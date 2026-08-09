interface RedditPost {
	_meta?: {
		edited_title?: string, // 2858864/45091873 (6.34%)
		is_edited?: boolean, // 2021862/45091873 (4.48%)
		removal_type?: "deleted"|"reddit"|"moderator"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 10362743/45091873 (22.98%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9610339/45091873 (21.31%)
		was_initially_deleted?: boolean, // 752408/45091873 (1.67%)
	}, // 45091873/45741262 (98.58%)
	ad_business?: null, // 713228/45741262 (1.56%)
	ad_promoted_user_posts?: null, // 713228/45741262 (1.56%)
	ad_supplementary_text_md?: null|string, // 713228/45741262 (1.56%)
	ad_user_targeting?: null, // 713228/45741262 (1.56%)
	adserver_click_url?: null, // 713228/45741262 (1.56%)
	adserver_imp_pixel?: null, // 713228/45741262 (1.56%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 713228/45741262 (1.56%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 122416/45741262 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1126024/3039634 (37.04%)
		e: "text"|"emoji",
		t?: string, // 1913610/3039634 (62.96%)
		u?: string, // 1126024/3039634 (37.04%)
	}[], // 45001866/45741262 (98.38%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 45001866/45741262 (98.38%)
	author_fullname?: string, // 45001866/45741262 (98.38%)
	author_id?: string|null, // 713228/45741262 (1.56%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 45001866/45741262 (98.38%)
	author_premium?: boolean, // 45001866/45741262 (98.38%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 623102/45741262 (1.36%)
	campaign_id?: null, // 713228/45741262 (1.56%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3556012/45741262 (7.77%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 9686/3553766 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 82610/217979 (37.90%)
			e: "text"|"emoji",
			t?: string, // 135369/217979 (62.10%)
			u?: string, // 82610/217979 (37.90%)
		}[], // 3543197/3553766 (99.70%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3543197/3553766 (99.70%)
		author_fullname?: string, // 3543197/3553766 (99.70%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3543197/3553766 (99.70%)
		author_premium?: boolean, // 3543197/3553766 (99.70%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"photography"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"comics"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: string, // 1324731/4465665 (29.66%)
				id: number,
				is_deleted: boolean,
				media_id: string,
				outbound_url?: string, // 7141/4465665 (0.16%)
			}[],
		}|null, // 795657/3553766 (22.39%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 795657/3553766 (22.39%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 95918/680578 (14.09%)
			e: "text"|"emoji",
			t?: string, // 584660/680578 (85.91%)
			u?: string, // 95918/680578 (14.09%)
		}[],
		link_flair_template_id?: string, // 1557478/3553766 (43.83%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null, // 3307783/3553766 (93.08%)
		location_long?: null, // 3307783/3553766 (93.08%)
		location_name?: null, // 3307783/3553766 (93.08%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 48862/411696 (11.87%)
				author_url?: string, // 48850/411696 (11.87%)
				cache_age?: number, // 11/411696 (0.00%)
				description?: string, // 2301/411696 (0.56%)
				height?: number|null, // 411652/411696 (99.99%)
				html: string,
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 406588/411696 (98.76%)
				thumbnail_url?: string, // 411641/411696 (99.99%)
				thumbnail_width?: number, // 406588/411696 (98.76%)
				title?: string, // 411667/411696 (99.99%)
				type: "video"|"rich",
				url?: string, // 47/411696 (0.01%)
				version: "1.0",
				width?: number, // 411652/411696 (99.99%)
			}, // 411696/624625 (65.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 212751/212929 (99.92%)
				dash_url?: string, // 212916/212929 (99.99%)
				duration?: number, // 212916/212929 (99.99%)
				fallback_url?: string, // 212916/212929 (99.99%)
				has_audio?: boolean, // 211918/212929 (99.53%)
				height: number|null,
				hls_url?: string, // 212916/212929 (99.99%)
				is_gif?: boolean, // 212916/212929 (99.99%)
				scrubber_media_url?: string, // 212916/212929 (99.99%)
				transcoding_message?: string, // 13/212929 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 212929/624625 (34.09%)
			type?: string, // 411696/624625 (65.91%)
		},
		media_embed: {
			content?: string, // 411652/3553766 (11.58%)
			height?: number, // 411652/3553766 (11.58%)
			scrolling?: boolean, // 411652/3553766 (11.58%)
			width?: number, // 411652/3553766 (11.58%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3121/4541740 (0.07%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4539179/4541740 (99.94%)
				hlsUrl?: string, // 3121/4541740 (0.07%)
				id?: string, // 4539179/4541740 (99.94%)
				isGif?: boolean, // 3121/4541740 (0.07%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4536058/4541740 (99.87%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2945244/4541740 (64.85%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4536058/4541740 (99.87%)
				s?: {
					gif?: string, // 183933/4536058 (4.05%)
					mp4?: string, // 183933/4536058 (4.05%)
					u?: string, // 4352125/4536058 (95.95%)
					x: number,
					y: number,
				}, // 4536058/4541740 (99.87%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 3121/4541740 (0.07%)
				y?: number, // 3121/4541740 (0.07%)
			},
		}|null, // 831266/3553766 (23.39%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		outbound_link?: {
			created: null|number,
			expiration: null|number,
			url: string,
		}, // 2352357/3553766 (66.19%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 431/15853 (2.72%)
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|boolean|null, // 5818/3553766 (0.16%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1763935/3553766 (49.64%)
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
					gif?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 11855/1763935 (0.67%)
					mp4?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 11855/1763935 (0.67%)
					nsfw?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 923631/1763935 (52.36%)
					obfuscated?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 929608/1763935 (52.70%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 359660/359702 (99.99%)
				dash_url?: string, // 359674/359702 (99.99%)
				duration?: number, // 359674/359702 (99.99%)
				fallback_url?: string, // 359674/359702 (99.99%)
				has_audio?: boolean, // 348435/359702 (96.87%)
				height: number|null,
				hls_url?: string, // 359674/359702 (99.99%)
				is_gif?: boolean, // 359674/359702 (99.99%)
				scrubber_media_url?: string, // 359674/359702 (99.99%)
				transcoding_message?: string, // 28/359702 (0.01%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 359702/1763935 (20.39%)
		}, // 1763935/3553766 (49.64%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 48862/411696 (11.87%)
				author_url?: string, // 48850/411696 (11.87%)
				cache_age?: number, // 11/411696 (0.00%)
				description?: string, // 2301/411696 (0.56%)
				height?: number|null, // 411652/411696 (99.99%)
				html: string,
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 406588/411696 (98.76%)
				thumbnail_url?: string, // 411641/411696 (99.99%)
				thumbnail_width?: number, // 406588/411696 (98.76%)
				title?: string, // 411667/411696 (99.99%)
				type: "video"|"rich",
				url?: string, // 47/411696 (0.01%)
				version: "1.0",
				width?: number, // 411652/411696 (99.99%)
			}, // 411696/624625 (65.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 212751/212929 (99.92%)
				dash_url?: string, // 212916/212929 (99.99%)
				duration?: number, // 212916/212929 (99.99%)
				fallback_url?: string, // 212916/212929 (99.99%)
				has_audio?: boolean, // 211918/212929 (99.53%)
				height: number|null,
				hls_url?: string, // 212916/212929 (99.99%)
				is_gif?: boolean, // 212916/212929 (99.99%)
				scrubber_media_url?: string, // 212916/212929 (99.99%)
				transcoding_message?: string, // 13/212929 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 212929/624625 (34.09%)
			type?: string, // 411696/624625 (65.91%)
		},
		secure_media_embed: {
			content?: string, // 411652/3553766 (11.58%)
			height?: number, // 411652/3553766 (11.58%)
			media_domain_url?: string, // 411652/3553766 (11.58%)
			scrolling?: boolean, // 411652/3553766 (11.58%)
			width?: number, // 411652/3553766 (11.58%)
		},
		selftext: string,
		selftext_html: string|null,
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"live"|"controversial"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 3552231/3553766 (99.96%)
		thumbnail_width?: number|null, // 3552231/3553766 (99.96%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2527288/3553766 (71.12%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 3307783/3553766 (93.08%)
		wls: null|number,
	}[], // 3556012/45741262 (7.77%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 713228/45741262 (1.56%)
	downs: number,
	edited: boolean|number,
	embed_type?: null, // 713228/45741262 (1.56%)
	embed_url?: null, // 713228/45741262 (1.56%)
	events?: [], // 713228/45741262 (1.56%)
	eventsOnRender?: [], // 713228/45741262 (1.56%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 98480/23248061 (0.42%)
			caption?: string, // 7425061/23248061 (31.94%)
			display_url?: string, // 107097/23248061 (0.46%)
			id: number,
			is_deleted: boolean,
			media_id: string,
			outbound_url?: string, // 129995/23248061 (0.56%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 11986/23248061 (0.05%)
		}[],
	}|null, // 6434542/45741262 (14.07%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 713228/45741262 (1.56%)
	id: string,
	impression_id?: null, // 713228/45741262 (1.56%)
	impression_id_str?: null, // 713228/45741262 (1.56%)
	is_blank?: boolean, // 713228/45741262 (1.56%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 6434542/45741262 (14.07%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 713228/45741262 (1.56%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1457566/10844596 (13.44%)
		e: "text"|"emoji",
		t?: string, // 9387030/10844596 (86.56%)
		u?: string, // 1457566/10844596 (13.44%)
	}[],
	link_flair_template_id?: string, // 21326488/45741262 (46.62%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 45542179/45741262 (99.56%)
	location_long?: null, // 45542179/45741262 (99.56%)
	location_name?: null, // 45542179/45741262 (99.56%)
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 587332/2793124 (21.03%)
			author_url?: string, // 587337/2793124 (21.03%)
			cache_age?: number, // 118/2793124 (0.00%)
			description?: string, // 20532/2793124 (0.74%)
			height?: number, // 2792577/2793124 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2782596/2793124 (99.62%)
			thumbnail_url: string,
			thumbnail_width?: number, // 2782596/2793124 (99.62%)
			title?: string, // 2792371/2793124 (99.97%)
			type: "video"|"rich",
			url?: string, // 1279/2793124 (0.05%)
			version: "1.0",
			width?: number, // 2792577/2793124 (99.98%)
		}, // 2793124/4226285 (66.09%)
		reddit_video?: {
			bitrate_kbps?: number, // 1427769/1433161 (99.62%)
			dash_url?: string, // 1427769/1433161 (99.62%)
			duration?: number, // 1427769/1433161 (99.62%)
			fallback_url?: string, // 1427769/1433161 (99.62%)
			has_audio?: boolean, // 1427755/1433161 (99.62%)
			height: number|null,
			hls_url?: string, // 1427769/1433161 (99.62%)
			is_gif?: boolean, // 1427769/1433161 (99.62%)
			scrubber_media_url?: string, // 1427769/1433161 (99.62%)
			transcoding_message?: string, // 5392/1433161 (0.38%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1433161/4226285 (33.91%)
		type?: string, // 2793124/4226285 (66.09%)
	},
	media_embed: {
		content?: string, // 2791371/45741262 (6.10%)
		height?: number, // 2791371/45741262 (6.10%)
		scrolling?: boolean, // 2791371/45741262 (6.10%)
		width?: number, // 2791371/45741262 (6.10%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 18409/23809802 (0.08%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 23694950/23809802 (99.52%)
			hlsUrl?: string, // 18409/23809802 (0.08%)
			id?: string, // 23694950/23809802 (99.52%)
			isGif?: boolean, // 18409/23809802 (0.08%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 23676541/23809802 (99.44%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 12636534/23809802 (53.07%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 23676541/23809802 (99.44%)
			s?: {
				gif?: string, // 468966/23676541 (1.98%)
				mp4?: string, // 468966/23676541 (1.98%)
				u?: string, // 23207575/23676541 (98.02%)
				x: number,
				y: number,
			}, // 23676541/23809802 (99.44%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 18409/23809802 (0.08%)
			y?: number, // 18409/23809802 (0.08%)
		},
	}|null, // 6858566/45741262 (14.99%)
	media_only: boolean,
	mobile_ad_url?: string, // 713228/45741262 (1.56%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 713228/45741262 (1.56%)
	outbound_link?: {
		created?: null|number, // 27436024/28149252 (97.47%)
		expiration?: null|number, // 27436024/28149252 (97.47%)
		url?: string, // 27436024/28149252 (97.47%)
	}, // 28149252/45741262 (61.54%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 16067/176939 (9.08%)
		}[],
		prediction_status: null,
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 2900475/45741262 (6.34%)
	post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 19679017/45741262 (43.02%)
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
				gif?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 354793/19715956 (1.80%)
				mp4?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 354793/19715956 (1.80%)
				nsfw?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 9344523/19715956 (47.40%)
				obfuscated?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 9431467/19715956 (47.84%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2146314/2147166 (99.96%)
			dash_url?: string, // 2146328/2147166 (99.96%)
			duration?: number, // 2146328/2147166 (99.96%)
			fallback_url?: string, // 2146328/2147166 (99.96%)
			has_audio?: boolean, // 2135109/2147166 (99.44%)
			height: number|null,
			hls_url?: string, // 2146328/2147166 (99.96%)
			is_gif?: boolean, // 2146328/2147166 (99.96%)
			scrubber_media_url?: string, // 2146328/2147166 (99.96%)
			transcoding_message?: string, // 838/2147166 (0.04%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 2147166/19715956 (10.89%)
	}, // 19715956/45741262 (43.10%)
	priority_id?: null, // 713228/45741262 (1.56%)
	product_ids?: [], // 713228/45741262 (1.56%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 713228/45741262 (1.56%)
	promoted?: boolean, // 713228/45741262 (1.56%)
	promoted_by?: null, // 713228/45741262 (1.56%)
	promoted_display_name?: null, // 713228/45741262 (1.56%)
	promoted_url?: null, // 713228/45741262 (1.56%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 587332/2793124 (21.03%)
			author_url?: string, // 587337/2793124 (21.03%)
			cache_age?: number, // 118/2793124 (0.00%)
			description?: string, // 20532/2793124 (0.74%)
			height?: number, // 2792577/2793124 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2782596/2793124 (99.62%)
			thumbnail_url: string,
			thumbnail_width?: number, // 2782596/2793124 (99.62%)
			title?: string, // 2792371/2793124 (99.97%)
			type: "video"|"rich",
			url?: string, // 1279/2793124 (0.05%)
			version: "1.0",
			width?: number, // 2792577/2793124 (99.98%)
		}, // 2793124/4226285 (66.09%)
		reddit_video?: {
			bitrate_kbps?: number, // 1427769/1433161 (99.62%)
			dash_url?: string, // 1427769/1433161 (99.62%)
			duration?: number, // 1427769/1433161 (99.62%)
			fallback_url?: string, // 1427769/1433161 (99.62%)
			has_audio?: boolean, // 1427755/1433161 (99.62%)
			height: number|null,
			hls_url?: string, // 1427769/1433161 (99.62%)
			is_gif?: boolean, // 1427769/1433161 (99.62%)
			scrubber_media_url?: string, // 1427769/1433161 (99.62%)
			transcoding_message?: string, // 5392/1433161 (0.38%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1433161/4226285 (33.91%)
		type?: string, // 2793124/4226285 (66.09%)
	},
	secure_media_embed: {
		content?: string, // 2791371/45741262 (6.10%)
		height?: number, // 2791371/45741262 (6.10%)
		media_domain_url?: string, // 2791371/45741262 (6.10%)
		scrolling?: boolean, // 2791371/45741262 (6.10%)
		width?: number, // 2791371/45741262 (6.10%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 713228/45741262 (1.56%)
	sk_ad_network_data?: null, // 713228/45741262 (1.56%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 12611/45741262 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 713228/45741262 (1.56%)
	third_party_tracking?: null, // 713228/45741262 (1.56%)
	third_party_tracking_2?: null, // 713228/45741262 (1.56%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 45358104/45741262 (99.16%)
	thumbnail_width?: number|null, // 45358104/45741262 (99.16%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 28244221/45741262 (61.75%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 45542179/45741262 (99.56%)
	wls: null|number,
}