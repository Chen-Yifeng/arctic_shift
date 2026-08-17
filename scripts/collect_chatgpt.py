"""
采集 Reddit 上关于 ChatGPT 的讨论（帖子 + 评论），按天过滤输出为 JSONL。

用法:
    1. pip install zstandard        # 解析 .zst 必需
    2. 用种子客户端下载某个月的转储（建议只勾选 submissions 文件，见下载说明）
    3. 把 PATH 改成你下载的 .zst 文件路径
    4. 确认 START / END 覆盖你要的那一天
    5. python scripts/collect_chatgpt.py

输出: chatgpt_discussion.jsonl （每行一条匹配的帖子或评论）

提示: 数据量很大时，建议 pip install orjson 并把下面的 `import json`
      换成 `import orjson as json`（dumps 返回 bytes，需 .decode()），解析会快很多。
"""
import os
import json
from datetime import datetime, timezone
import zstandard

# ===== 配置 =====
# 单个 .zst 文件，或一个文件夹路径（文件夹时会处理里面所有支持的文件）
PATH = r"<path to your .zst file>"
RECURSIVE = False                    # PATH 是文件夹时是否递归子目录

# 关键词（全部小写，匹配标题+正文，或评论正文）
KEYWORDS = ["chatgpt", "gpt-4", "gpt4", "gpt-4o", "openai"]

# 只保留这些 subreddit（留空 set() = 全部 subreddit）
# 例如 {"ChatGPT", "OpenAI", "artificial", "singularity"}
SUBREDDITS = set()

# 只保留这一天（UTC 时间；请与你下载的月份对应）
START = datetime(2026, 7, 1, tzinfo=timezone.utc)
END = datetime(2026, 7, 2, tzinfo=timezone.utc)

OUT_FILE = "chatgpt_discussion.jsonl"
# =================


def match(text):
    if not text:
        return False
    t = text.lower()
    return any(k in t for k in KEYWORDS)


def in_time(created_utc):
    if START and created_utc < START.timestamp():
        return False
    if END and created_utc > END.timestamp():
        return False
    return True


def iter_zst_lines(f):
    """逐行 yield 解压后的 JSON 字符串（.zst 内部是 ndjson）"""
    dctx = zstandard.ZstdDecompressor(max_window_size=2**31)
    reader = dctx.stream_reader(f)
    buf = ""
    while True:
        chunk = reader.read(1024 * 1024 * 10)
        if not chunk:
            break
        buf += chunk.decode("utf-8", "replace")
        lines = buf.split("\n")
        buf = lines[-1]
        for line in lines[:-1]:
            if line.strip():
                yield line
    if buf.strip():
        yield buf


def process_file(path, out):
    matched = 0
    with open(path, "rb") as f:
        for line in iter_zst_lines(f):
            try:
                row = json.loads(line)
            except json.JSONDecodeError:
                continue

            sub = row.get("subreddit", "")
            if SUBREDDITS and sub not in SUBREDDITS:
                continue

            created = row.get("created_utc", 0)
            if not in_time(created):
                continue

            is_post = "title" in row
            text = (row.get("title", "") + "\n" + row.get("selftext", "")) if is_post \
                   else row.get("body", "")
            if not match(text):
                continue

            permalink = row.get("permalink", "")
            url = f"https://www.reddit.com{permalink}" if permalink else ""
            if is_post:
                keep = {"type": "post", "id": row.get("id"), "subreddit": sub,
                        "author": row.get("author"), "created_utc": created,
                        "score": row.get("score"), "num_comments": row.get("num_comments"),
                        "title": row.get("title"), "selftext": row.get("selftext"), "url": url}
            else:
                keep = {"type": "comment", "id": row.get("id"), "subreddit": sub,
                        "author": row.get("author"), "created_utc": created,
                        "score": row.get("score"), "body": row.get("body"),
                        "link_id": row.get("link_id"), "parent_id": row.get("parent_id"),
                        "url": url}
            out.write(json.dumps(keep, ensure_ascii=False) + "\n")
            matched += 1
            if matched % 1000 == 0:
                print(f"\r{os.path.basename(path)} 已匹配 {matched:,} 条", end="")
    return matched


def main():
    if os.path.isdir(PATH):
        if RECURSIVE:
            files = [os.path.join(r, fn) for r, _, fs in os.walk(PATH) for fn in fs]
        else:
            files = [os.path.join(PATH, fn) for fn in os.listdir(PATH)]
    else:
        files = [PATH]

    files = [f for f in files
             if f.endswith((".zst", ".zst_blocks", ".jsonl", ".ndjson", ".json"))]
    if not files:
        print("未找到可处理的文件，请检查 PATH 配置。")
        return

    total = 0
    with open(OUT_FILE, "w", encoding="utf-8") as out:
        for i, f in enumerate(files):
            print(f"[{i+1}/{len(files)}] 处理 {f}")
            total += process_file(f, out)
    print(f"\n完成，共采集 {total:,} 条 → {OUT_FILE}")


if __name__ == "__main__":
    main()
