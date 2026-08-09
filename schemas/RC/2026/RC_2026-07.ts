interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 19435427/370996199 (5.24%)
		removal_type?: "removed"|"deleted"|"removed by reddit", // 15952776/370996199 (4.30%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 14133973/370996199 (3.81%)
		was_initially_deleted?: boolean, // 1841836/370996199 (0.50%)
	}, // 370996199/371198229 (99.95%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1172845/371198229 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 26461072/61074719 (43.33%)
		e: "text"|"emoji",
		t?: string, // 34613647/61074719 (56.67%)
		u?: string, // 26461072/61074719 (43.33%)
	}[], // 357574356/371198229 (96.33%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 357574356/371198229 (96.33%)
	author_fullname?: string, // 355749833/371198229 (95.84%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 357574356/371198229 (96.33%)
	author_premium?: boolean, // 357574356/371198229 (96.33%)
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
	editable?: boolean, // 728754/371198229 (0.20%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_author?: string, // 209433603/371198229 (56.42%)
	link_id: string,
	link_permalink?: string, // 209433603/371198229 (56.42%)
	link_title?: string, // 209433603/371198229 (56.42%)
	link_url?: string, // 209433603/371198229 (56.42%)
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 8172010/12124261 (67.40%)
			ext?: string, // 115232/12124261 (0.95%)
			id?: string, // 8172010/12124261 (67.40%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 8172010/12124261 (67.40%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 8172010/12124261 (67.40%)
			s?: {
				gif?: string, // 729528/8172010 (8.93%)
				mp4?: string, // 729528/8172010 (8.93%)
				u?: string, // 7442482/8172010 (91.07%)
				x: number,
				y: number,
			}, // 8172010/12124261 (67.40%)
			status: "valid"|"invalid"|"unprocessed",
			t?: "giphy", // 115232/12124261 (0.95%)
		},
	}, // 12124141/371198229 (3.27%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments?: number, // 209420699/371198229 (56.42%)
	num_reports: null,
	over_18?: boolean, // 209433603/371198229 (56.42%)
	parent_id: string,
	permalink: string,
	profile_img?: string, // 357293437/371198229 (96.25%)
	profile_over_18?: boolean, // 357293437/371198229 (96.25%)
	quarantine?: boolean, // 209433603/371198229 (56.42%)
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