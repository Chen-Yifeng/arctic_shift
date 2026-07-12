interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 17876661/347222726 (5.15%)
		removal_type?: "removed"|"deleted"|"removed by reddit", // 15089926/347222726 (4.35%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 13397591/347222726 (3.86%)
		was_initially_deleted?: boolean, // 1693355/347222726 (0.49%)
	}, // 347222726/347582376 (99.90%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1015466/347582376 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 23641884/55538329 (42.57%)
		e: "text"|"emoji",
		t?: string, // 31896445/55538329 (57.43%)
		u?: string, // 23641884/55538329 (42.57%)
	}[], // 334475879/347582376 (96.23%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 334475879/347582376 (96.23%)
	author_fullname?: string, // 332799353/347582376 (95.75%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 334475879/347582376 (96.23%)
	author_premium?: boolean, // 334475879/347582376 (96.23%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 762391/347582376 (0.22%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_author?: string, // 18791535/347582376 (5.41%)
	link_id: string,
	link_permalink?: string, // 18791535/347582376 (5.41%)
	link_title?: string, // 18791535/347582376 (5.41%)
	link_url?: string, // 18791535/347582376 (5.41%)
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 7502072/11226919 (66.82%)
			ext?: string, // 118506/11226919 (1.06%)
			id?: string, // 7502072/11226919 (66.82%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 7502072/11226919 (66.82%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 7502072/11226919 (66.82%)
			s?: {
				gif?: string, // 713948/7502072 (9.52%)
				mp4?: string, // 713948/7502072 (9.52%)
				u?: string, // 6788124/7502072 (90.48%)
				x: number,
				y: number,
			}, // 7502072/11226919 (66.82%)
			status: "valid"|"invalid"|"unprocessed"|"failed",
			t?: "giphy", // 118506/11226919 (1.06%)
		},
	}, // 11226806/347582376 (3.23%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments?: number, // 18790774/347582376 (5.41%)
	num_reports: null,
	over_18?: boolean, // 18791535/347582376 (5.41%)
	parent_id: string,
	permalink: string,
	profile_img?: string, // 334248546/347582376 (96.16%)
	profile_over_18?: boolean, // 334248546/347582376 (96.16%)
	quarantine?: boolean, // 18791535/347582376 (5.41%)
	removal_reason: null|"legal",
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null,
	ups: number,
	user_reports: [],
}