interface RedditPost {
	_meta?: {
		edited_title?: string, // 2680370/43667458 (6.14%)
		is_edited?: boolean, // 1936016/43667458 (4.43%)
		removal_type?: "deleted"|"reddit"|"moderator"|"automod_filtered"|"author"|"content_takedown"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 9895948/43667458 (22.66%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9192659/43667458 (21.05%)
		was_initially_deleted?: boolean, // 703294/43667458 (1.61%)
	}, // 43667458/44257470 (98.67%)
	ad_business?: null, // 661940/44257470 (1.50%)
	ad_promoted_user_posts?: null, // 661940/44257470 (1.50%)
	ad_supplementary_text_md?: null|string, // 661940/44257470 (1.50%)
	ad_user_targeting?: null, // 661940/44257470 (1.50%)
	adserver_click_url?: null, // 661940/44257470 (1.50%)
	adserver_imp_pixel?: null, // 661940/44257470 (1.50%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 661940/44257470 (1.50%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 110249/44257470 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1073891/2887313 (37.19%)
		e: "text"|"emoji",
		t?: string, // 1813422/2887313 (62.81%)
		u?: string, // 1073891/2887313 (37.19%)
	}[], // 43563643/44257470 (98.43%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 43563643/44257470 (98.43%)
	author_fullname?: string, // 43563643/44257470 (98.43%)
	author_id?: string|null, // 661940/44257470 (1.50%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 43563643/44257470 (98.43%)
	author_premium?: boolean, // 43563643/44257470 (98.43%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 572911/44257470 (1.29%)
	campaign_id?: null, // 661940/44257470 (1.50%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3387983/44257470 (7.66%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 8762/3385835 (0.26%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 69352/189693 (36.56%)
			e: "text"|"emoji",
			t?: string, // 120341/189693 (63.44%)
			u?: string, // 69352/189693 (36.56%)
		}[], // 3376259/3385835 (99.72%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3376259/3385835 (99.72%)
		author_fullname?: string, // 3376259/3385835 (99.72%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3376259/3385835 (99.72%)
		author_premium?: boolean, // 3376259/3385835 (99.72%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"photography"|"entertainment",
		clicked: boolean,
		content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
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
				caption?: string, // 1301578/4424827 (29.42%)
				id: number,
				is_deleted: boolean,
				media_id: string,
				outbound_url?: string, // 9612/4424827 (0.22%)
			}[],
		}|null, // 770662/3385835 (22.76%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 770662/3385835 (22.76%)
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
			a?: string, // 88075/613601 (14.35%)
			e: "text"|"emoji",
			t?: string, // 525526/613601 (85.65%)
			u?: string, // 88075/613601 (14.35%)
		}[],
		link_flair_template_id?: string, // 1432961/3385835 (42.32%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null, // 2550121/3385835 (75.32%)
		location_long?: null, // 2550121/3385835 (75.32%)
		location_name?: null, // 2550121/3385835 (75.32%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 44946/426653 (10.53%)
				author_url?: string, // 44929/426653 (10.53%)
				cache_age?: number, // 17/426653 (0.00%)
				description?: string, // 2126/426653 (0.50%)
				height?: number|null, // 426626/426653 (99.99%)
				html: string,
				mean_alpha?: number, // 5/426653 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 421689/426653 (98.84%)
				thumbnail_url?: string, // 426562/426653 (99.98%)
				thumbnail_width?: number, // 421689/426653 (98.84%)
				title?: string, // 426582/426653 (99.98%)
				type: "video"|"rich",
				url?: string, // 47/426653 (0.01%)
				version: "1.0",
				width?: number, // 426626/426653 (99.99%)
			}, // 426653/614838 (69.39%)
			reddit_video?: {
				bitrate_kbps?: number, // 187958/188185 (99.88%)
				dash_url?: string, // 188175/188185 (99.99%)
				duration?: number, // 188175/188185 (99.99%)
				fallback_url?: string, // 188175/188185 (99.99%)
				has_audio?: boolean, // 187279/188185 (99.52%)
				height: number|null,
				hls_url?: string, // 188175/188185 (99.99%)
				is_gif?: boolean, // 188175/188185 (99.99%)
				scrubber_media_url?: string, // 188175/188185 (99.99%)
				transcoding_message?: string, // 10/188185 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 188185/614838 (30.61%)
			type?: string, // 426653/614838 (69.39%)
		},
		media_embed: {
			content?: string, // 426626/3385835 (12.60%)
			height?: number, // 426626/3385835 (12.60%)
			scrolling?: boolean, // 426626/3385835 (12.60%)
			width?: number, // 426626/3385835 (12.60%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3434/4496784 (0.08%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4494135/4496784 (99.94%)
				hlsUrl?: string, // 3434/4496784 (0.08%)
				id?: string, // 4494135/4496784 (99.94%)
				isGif?: boolean, // 3434/4496784 (0.08%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4490701/4496784 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 3007658/4496784 (66.88%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4490701/4496784 (99.86%)
				s?: {
					gif?: string, // 180358/4490701 (4.02%)
					mp4?: string, // 180358/4490701 (4.02%)
					u?: string, // 4310343/4490701 (95.98%)
					x: number,
					y: number,
				}, // 4490701/4496784 (99.86%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 3434/4496784 (0.08%)
				y?: number, // 3434/4496784 (0.08%)
			},
		}|null, // 804980/3385835 (23.77%)
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
		}, // 1831337/3385835 (54.09%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 421/15613 (2.70%)
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
		}|boolean|null, // 5234/3385835 (0.15%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1692762/3385835 (50.00%)
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
					}, // 12973/1692762 (0.77%)
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
					}, // 12973/1692762 (0.77%)
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
					}, // 924422/1692762 (54.61%)
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
					}, // 930483/1692762 (54.97%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 378950/378992 (99.99%)
				dash_url?: string, // 378970/378992 (99.99%)
				duration?: number, // 378970/378992 (99.99%)
				fallback_url?: string, // 378970/378992 (99.99%)
				has_audio?: boolean, // 363369/378992 (95.88%)
				height: number|null,
				hls_url?: string, // 378970/378992 (99.99%)
				is_gif?: boolean, // 378970/378992 (99.99%)
				scrubber_media_url?: string, // 378970/378992 (99.99%)
				transcoding_message?: string, // 22/378992 (0.01%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 378992/1692762 (22.39%)
		}, // 1692762/3385835 (50.00%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"content_takedown"|"moderator"|"author"|"automod_filtered"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 44946/426653 (10.53%)
				author_url?: string, // 44929/426653 (10.53%)
				cache_age?: number, // 17/426653 (0.00%)
				description?: string, // 2126/426653 (0.50%)
				height?: number|null, // 426626/426653 (99.99%)
				html: string,
				mean_alpha?: number, // 5/426653 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 421689/426653 (98.84%)
				thumbnail_url?: string, // 426562/426653 (99.98%)
				thumbnail_width?: number, // 421689/426653 (98.84%)
				title?: string, // 426582/426653 (99.98%)
				type: "video"|"rich",
				url?: string, // 47/426653 (0.01%)
				version: "1.0",
				width?: number, // 426626/426653 (99.99%)
			}, // 426653/614838 (69.39%)
			reddit_video?: {
				bitrate_kbps?: number, // 187958/188185 (99.88%)
				dash_url?: string, // 188175/188185 (99.99%)
				duration?: number, // 188175/188185 (99.99%)
				fallback_url?: string, // 188175/188185 (99.99%)
				has_audio?: boolean, // 187279/188185 (99.52%)
				height: number|null,
				hls_url?: string, // 188175/188185 (99.99%)
				is_gif?: boolean, // 188175/188185 (99.99%)
				scrubber_media_url?: string, // 188175/188185 (99.99%)
				transcoding_message?: string, // 10/188185 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 188185/614838 (30.61%)
			type?: string, // 426653/614838 (69.39%)
		},
		secure_media_embed: {
			content?: string, // 426626/3385835 (12.60%)
			height?: number, // 426626/3385835 (12.60%)
			media_domain_url?: string, // 426626/3385835 (12.60%)
			scrolling?: boolean, // 426626/3385835 (12.60%)
			width?: number, // 426626/3385835 (12.60%)
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
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 3384743/3385835 (99.97%)
		thumbnail_width?: number|null, // 3384743/3385835 (99.97%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2430788/3385835 (71.79%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 2550121/3385835 (75.32%)
		wls: null|number,
	}[], // 3387983/44257470 (7.66%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 661940/44257470 (1.50%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 661940/44257470 (1.50%)
	embed_url?: null|string, // 661940/44257470 (1.50%)
	events?: [], // 661940/44257470 (1.50%)
	eventsOnRender?: [], // 661940/44257470 (1.50%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 114645/22546657 (0.51%)
			caption?: string, // 7196438/22546657 (31.92%)
			display_url?: string, // 119381/22546657 (0.53%)
			id: number,
			is_deleted: boolean,
			media_id: string,
			outbound_url?: string, // 142438/22546657 (0.63%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 22273/22546657 (0.10%)
		}[],
	}|null, // 6143536/44257470 (13.88%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 661940/44257470 (1.50%)
	id: string,
	impression_id?: null, // 661940/44257470 (1.50%)
	impression_id_str?: null, // 661940/44257470 (1.50%)
	is_blank?: boolean, // 661940/44257470 (1.50%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 6143536/44257470 (13.88%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 661940/44257470 (1.50%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1420418/10105924 (14.06%)
		e: "text"|"emoji",
		t?: string, // 8685506/10105924 (85.94%)
		u?: string, // 1420418/10105924 (14.06%)
	}[],
	link_flair_template_id?: string, // 20003177/44257470 (45.20%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 40820880/44257470 (92.24%)
	location_long?: null, // 40820880/44257470 (92.24%)
	location_name?: null, // 40820880/44257470 (92.24%)
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 580382/3076328 (18.87%)
			author_url?: string, // 580386/3076328 (18.87%)
			cache_age?: number, // 50/3076328 (0.00%)
			description?: string, // 19449/3076328 (0.63%)
			height?: number, // 3075830/3076328 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3066122/3076328 (99.67%)
			thumbnail_url: string,
			thumbnail_width?: number, // 3066122/3076328 (99.67%)
			title?: string, // 3075568/3076328 (99.98%)
			type: "video"|"rich",
			url?: string, // 1232/3076328 (0.04%)
			version: "1.0",
			width?: number, // 3075830/3076328 (99.98%)
		}, // 3076328/4484825 (68.59%)
		reddit_video?: {
			bitrate_kbps?: number, // 1402952/1408497 (99.61%)
			dash_url?: string, // 1402952/1408497 (99.61%)
			duration?: number, // 1402952/1408497 (99.61%)
			fallback_url?: string, // 1402952/1408497 (99.61%)
			has_audio?: boolean, // 1402949/1408497 (99.61%)
			height: number|null,
			hls_url?: string, // 1402952/1408497 (99.61%)
			is_gif?: boolean, // 1402952/1408497 (99.61%)
			scrubber_media_url?: string, // 1402952/1408497 (99.61%)
			transcoding_message?: string, // 5545/1408497 (0.39%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1408497/4484825 (31.41%)
		type?: string, // 3076328/4484825 (68.59%)
	},
	media_embed: {
		content?: string, // 3074449/44257470 (6.95%)
		height?: number, // 3074449/44257470 (6.95%)
		scrolling?: boolean, // 3074449/44257470 (6.95%)
		width?: number, // 3074449/44257470 (6.95%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 18273/23070803 (0.08%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 22959445/23070803 (99.52%)
			hlsUrl?: string, // 18273/23070803 (0.08%)
			id?: string, // 22959445/23070803 (99.52%)
			isGif?: boolean, // 18273/23070803 (0.08%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 22941172/23070803 (99.44%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 12301339/23070803 (53.32%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 22941172/23070803 (99.44%)
			s?: {
				gif?: string, // 455552/22941172 (1.99%)
				mp4?: string, // 455552/22941172 (1.99%)
				u?: string, // 22485620/22941172 (98.01%)
				x: number,
				y: number,
			}, // 22941172/23070803 (99.44%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 18273/23070803 (0.08%)
			y?: number, // 18273/23070803 (0.08%)
		},
	}|null, // 6539427/44257470 (14.78%)
	media_only: boolean,
	mobile_ad_url?: string, // 661940/44257470 (1.50%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 661940/44257470 (1.50%)
	outbound_link?: {
		created?: null|number, // 24605602/25267542 (97.38%)
		expiration?: null|number, // 24605602/25267542 (97.38%)
		url?: string, // 24605602/25267542 (97.38%)
	}, // 25267542/44257470 (57.09%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 15474/174443 (8.87%)
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
	}|null, // 2771058/44257470 (6.26%)
	post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 19207235/44257470 (43.40%)
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
				}, // 371644/19242622 (1.93%)
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
				}, // 371644/19242622 (1.93%)
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
				}, // 9335023/19242622 (48.51%)
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
				}, // 9429405/19242622 (49.00%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2440470/2441734 (99.95%)
			dash_url?: string, // 2440490/2441734 (99.95%)
			duration?: number, // 2440490/2441734 (99.95%)
			fallback_url?: string, // 2440490/2441734 (99.95%)
			has_audio?: boolean, // 2424900/2441734 (99.31%)
			height: number|null,
			hls_url?: string, // 2440490/2441734 (99.95%)
			is_gif?: boolean, // 2440490/2441734 (99.95%)
			scrubber_media_url?: string, // 2440490/2441734 (99.95%)
			transcoding_message?: string, // 1244/2441734 (0.05%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 2441734/19242622 (12.69%)
	}, // 19242622/44257470 (43.48%)
	priority_id?: null, // 661940/44257470 (1.50%)
	product_ids?: [], // 661940/44257470 (1.50%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 661940/44257470 (1.50%)
	promoted?: boolean, // 661940/44257470 (1.50%)
	promoted_by?: null, // 661940/44257470 (1.50%)
	promoted_display_name?: null, // 661940/44257470 (1.50%)
	promoted_url?: null, // 661940/44257470 (1.50%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 580382/3076328 (18.87%)
			author_url?: string, // 580386/3076328 (18.87%)
			cache_age?: number, // 50/3076328 (0.00%)
			description?: string, // 19449/3076328 (0.63%)
			height?: number, // 3075830/3076328 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3066122/3076328 (99.67%)
			thumbnail_url: string,
			thumbnail_width?: number, // 3066122/3076328 (99.67%)
			title?: string, // 3075568/3076328 (99.98%)
			type: "video"|"rich",
			url?: string, // 1232/3076328 (0.04%)
			version: "1.0",
			width?: number, // 3075830/3076328 (99.98%)
		}, // 3076328/4484825 (68.59%)
		reddit_video?: {
			bitrate_kbps?: number, // 1402952/1408497 (99.61%)
			dash_url?: string, // 1402952/1408497 (99.61%)
			duration?: number, // 1402952/1408497 (99.61%)
			fallback_url?: string, // 1402952/1408497 (99.61%)
			has_audio?: boolean, // 1402949/1408497 (99.61%)
			height: number|null,
			hls_url?: string, // 1402952/1408497 (99.61%)
			is_gif?: boolean, // 1402952/1408497 (99.61%)
			scrubber_media_url?: string, // 1402952/1408497 (99.61%)
			transcoding_message?: string, // 5545/1408497 (0.39%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1408497/4484825 (31.41%)
		type?: string, // 3076328/4484825 (68.59%)
	},
	secure_media_embed: {
		content?: string, // 3074449/44257470 (6.95%)
		height?: number, // 3074449/44257470 (6.95%)
		media_domain_url?: string, // 3074449/44257470 (6.95%)
		scrolling?: boolean, // 3074449/44257470 (6.95%)
		width?: number, // 3074449/44257470 (6.95%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 661940/44257470 (1.50%)
	sk_ad_network_data?: null, // 661940/44257470 (1.50%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 12713/44257470 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 661940/44257470 (1.50%)
	third_party_tracking?: null, // 661940/44257470 (1.50%)
	third_party_tracking_2?: null, // 661940/44257470 (1.50%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 43911804/44257470 (99.22%)
	thumbnail_width?: number|null, // 43911804/44257470 (99.22%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 27330754/44257470 (61.75%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 40820880/44257470 (92.24%)
	wls: null|number,
}