module.exports = function(app) {
  var express = require('express');
  var topicsRouter = express.Router();

  topicsRouter.get('/', function(req, res) {
    res.send({
      'topics': []
    });
  });

  topicsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  topicsRouter.get('/:id', function(req, res) {


    res.send(example_topic);

    // res.send({
    //   'topics': {
    //     id: req.params.id

    //   }
    // });
  });

  topicsRouter.put('/:id', function(req, res) {
    res.send({
      'topics': {
        id: req.params.id
      }
    });
  });

  topicsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/topics', topicsRouter);
};



tt = {
  post_stream: "ddddddsww"
};


var example_topic = {
  "post_stream": {
    "posts": [{
      "id": 30,
      "name": "Ed Tee",
      "username": "Ed_Tee",
      "avatar_template": "/user_avatar/klavado.com/ed_tee/{size}/7.png",
      "uploaded_avatar_id": 7,
      "created_at": "2014-09-27T13:25:38.078Z",
      "cooked": "<p>Its almost 20 years after the first africajam - we've got to have an anniversary year edition so I'm going to start scouting locations now!!<\/p>\n\n<p>The first place that jumps to my mind is the Moseley Dance Center.  There never was an africajam there but its one of those places that really should have hosted one.  It was home to the legendary 'Bongo go' and 'Barefoot boogie' nights which were always close to Africajam spiritually.<\/p>\n\n<p>Anyway, that's my choice of location for the next Africajam - anyone have any other suggestions???<\/p>",
      "post_number": 1,
      "post_type": 1,
      "updated_at": "2014-09-27T13:25:38.078Z",
      "reply_count": 0,
      "reply_to_post_number": null,
      "quote_count": 0,
      "avg_time": 207,
      "incoming_link_count": 2,
      "reads": 4,
      "score": 21.15,
      "yours": true,
      "topic_id": 25,
      "topic_slug": "potential-locations-for-the-next-africajam",
      "topic_auto_close_at": null,
      "display_username": "Ed Tee",
      "primary_group_name": null,
      "version": 2,
      "can_edit": true,
      "can_delete": false,
      "can_recover": true,
      "read": true,
      "user_title": null,
      "actions_summary": [{
        "id": 2,
        "count": 0,
        "hidden": false,
        "can_act": false
      }, {
        "id": 3,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 4,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 5,
        "count": 0,
        "hidden": true,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 6,
        "count": 0,
        "hidden": false,
        "can_act": false
      }, {
        "id": 7,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 8,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }],
      "moderator": true,
      "admin": true,
      "staff": true,
      "user_id": 1,
      "hidden": false,
      "hidden_reason_id": null,
      "trust_level": 4,
      "deleted_at": null,
      "user_deleted": false,
      "edit_reason": null,
      "can_view_edit_history": true,
      "wiki": false,
      "location": {
        "id": 10,
        "title": "Moseley Dance Center",
        "description": null,
        "address": "570 Moseley Road, Birmingham, Birmingham, West Midlands B12, UK",
        "city": "birmingham",
        "region": "England",
        "postal_code": "B12",
        "country": "united kingdom",
        "longitude": -1.88638070000002,
        "latitude": 52.4549774,
        "topics_count": null,
        "gplace_id": null,
        "website_url": null
      }
    }, {
      "id": 40,
      "name": "Mike Hewitt",
      "username": "MikeH",
      "avatar_template": "/letter_avatar/mikeh/{size}/2.png",
      "uploaded_avatar_id": null,
      "created_at": "2014-09-28T00:19:38.792Z",
      "cooked": "<p>What about making sure you get a really sunny day and doing it in Moseley secret park?<\/p>",
      "post_number": 2,
      "post_type": 1,
      "updated_at": "2014-09-28T00:19:38.792Z",
      "reply_count": 1,
      "reply_to_post_number": null,
      "quote_count": 0,
      "avg_time": 651,
      "incoming_link_count": 0,
      "reads": 3,
      "score": 38.15,
      "yours": false,
      "topic_id": 25,
      "topic_slug": "potential-locations-for-the-next-africajam",
      "topic_auto_close_at": null,
      "display_username": "Mike Hewitt",
      "primary_group_name": null,
      "version": 1,
      "can_edit": true,
      "can_delete": true,
      "can_recover": true,
      "read": true,
      "user_title": null,
      "actions_summary": [{
        "id": 2,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 3,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 4,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 5,
        "count": 0,
        "hidden": true,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 6,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 7,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 8,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }],
      "moderator": true,
      "admin": false,
      "staff": true,
      "user_id": 6,
      "hidden": false,
      "hidden_reason_id": null,
      "trust_level": 4,
      "deleted_at": null,
      "user_deleted": false,
      "edit_reason": null,
      "can_view_edit_history": true,
      "wiki": false,
      "location": null
    }, {
      "id": 43,
      "name": "Latina Turner",
      "username": "LaTina",
      "avatar_template": "/letter_avatar/latina/{size}/2.png",
      "uploaded_avatar_id": null,
      "created_at": "2014-09-28T15:57:11.507Z",
      "cooked": "<p>Moseley secret park would kind of be the dream place to have it but you know exactly what the catch would be with that one:  ze friggin weather!!!<\/p>\n\n<p>And the beauty of the Moseley Dance centre is that we could sneak into the secret park after <img src=\"//klavado.com/plugins/emoji/images/emoji_one/wink.png\" title=\":wink:\" class=\"emoji\" alt=\"wink\" width=\"64\" height=\"64\"><\/p>\n\n<p>BTW, does anyone remember exactly when the first africajam was???<\/p>",
      "post_number": 3,
      "post_type": 1,
      "updated_at": "2014-09-28T15:57:11.507Z",
      "reply_count": 1,
      "reply_to_post_number": 2,
      "quote_count": 0,
      "avg_time": 119,
      "incoming_link_count": 0,
      "reads": 2,
      "score": 11.35,
      "yours": false,
      "topic_id": 25,
      "topic_slug": "potential-locations-for-the-next-africajam",
      "topic_auto_close_at": null,
      "display_username": "Latina Turner",
      "primary_group_name": null,
      "version": 1,
      "can_edit": true,
      "can_delete": true,
      "can_recover": true,
      "read": true,
      "user_title": null,
      "reply_to_user": {
        "username": "MikeH",
        "avatar_template": "/letter_avatar/mikeh/{size}/2.png",
        "uploaded_avatar_id": null
      },
      "actions_summary": [{
        "id": 2,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 3,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 4,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 5,
        "count": 0,
        "hidden": true,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 6,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 7,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 8,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }],
      "moderator": false,
      "admin": false,
      "staff": false,
      "user_id": 3,
      "hidden": false,
      "hidden_reason_id": null,
      "trust_level": 0,
      "deleted_at": null,
      "user_deleted": false,
      "edit_reason": null,
      "can_view_edit_history": true,
      "wiki": false,
      "location": null
    }, {
      "id": 46,
      "name": "Ed Tee",
      "username": "Ed_Tee",
      "avatar_template": "/user_avatar/klavado.com/ed_tee/{size}/7.png",
      "uploaded_avatar_id": 7,
      "created_at": "2014-09-29T15:43:16.587Z",
      "cooked": "<p>BTW, this is the link to the moseley dance center:<br><a href=\"http://www.moseleydancecentre.com/\" class=\"onebox\" target=\"_blank\">http://www.moseleydancecentre.com/<\/a><\/p>",
      "post_number": 4,
      "post_type": 1,
      "updated_at": "2014-09-29T15:43:16.587Z",
      "reply_count": 0,
      "reply_to_post_number": 3,
      "quote_count": 0,
      "avg_time": 178,
      "incoming_link_count": 0,
      "reads": 2,
      "score": 9.300000000000001,
      "yours": true,
      "topic_id": 25,
      "topic_slug": "potential-locations-for-the-next-africajam",
      "topic_auto_close_at": null,
      "display_username": "Ed Tee",
      "primary_group_name": null,
      "version": 1,
      "can_edit": true,
      "can_delete": true,
      "can_recover": true,
      "link_counts": [{
        "url": "http://www.moseleydancecentre.com/",
        "internal": false,
        "reflection": false,
        "title": "Moseley Dance Centre - Room Hire - Dance School",
        "clicks": 1
      }],
      "read": true,
      "user_title": null,
      "reply_to_user": {
        "username": "LaTina",
        "avatar_template": "/letter_avatar/latina/{size}/2.png",
        "uploaded_avatar_id": null
      },
      "actions_summary": [{
        "id": 2,
        "count": 0,
        "hidden": false,
        "can_act": false
      }, {
        "id": 3,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 4,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 5,
        "count": 0,
        "hidden": true,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 6,
        "count": 0,
        "hidden": false,
        "can_act": false
      }, {
        "id": 7,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }, {
        "id": 8,
        "count": 0,
        "hidden": false,
        "can_act": true,
        "can_defer_flags": false
      }],
      "moderator": true,
      "admin": true,
      "staff": true,
      "user_id": 1,
      "hidden": false,
      "hidden_reason_id": null,
      "trust_level": 4,
      "deleted_at": null,
      "user_deleted": false,
      "edit_reason": null,
      "can_view_edit_history": true,
      "wiki": false,
      "location": null
    }],
    "stream": [30, 40, 43, 46]
  },
  "draft": null,
  "draft_key": "topic_25",
  "draft_sequence": 2,
  "starred": false,
  "posted": true,
  "unpinned": null,
  "pinned_globally": false,
  "pinned": false,
  "pinned_at": null,
  "details": {
    "auto_close_at": null,
    "auto_close_hours": null,
    "auto_close_based_on_last_post": false,
    "created_by": {
      "id": 1,
      "username": "Ed_Tee",
      "uploaded_avatar_id": 7,
      "avatar_template": "/user_avatar/klavado.com/ed_tee/{size}/7.png"
    },
    "last_poster": {
      "id": 1,
      "username": "Ed_Tee",
      "uploaded_avatar_id": 7,
      "avatar_template": "/user_avatar/klavado.com/ed_tee/{size}/7.png"
    },
    "participants": [{
      "id": 1,
      "username": "Ed_Tee",
      "uploaded_avatar_id": 7,
      "avatar_template": "/user_avatar/klavado.com/ed_tee/{size}/7.png",
      "post_count": 2
    }, {
      "id": 6,
      "username": "MikeH",
      "uploaded_avatar_id": null,
      "avatar_template": "/letter_avatar/mikeh/{size}/2.png",
      "post_count": 1
    }, {
      "id": 3,
      "username": "LaTina",
      "uploaded_avatar_id": null,
      "avatar_template": "/letter_avatar/latina/{size}/2.png",
      "post_count": 1
    }],
    "suggested_topics": [{
      "id": 37,
      "title": "Good food that doesn't cost a fortune",
      "fancy_title": "Good food that doesn&rsquo;t cost a fortune",
      "slug": "good-food-that-doesnt-cost-a-fortune",
      "posts_count": 2,
      "reply_count": 0,
      "highest_post_number": 2,
      "image_url": null,
      "created_at": "2014-09-29T17:15:55.679Z",
      "last_posted_at": "2014-10-11T14:13:27.073Z",
      "bumped": true,
      "bumped_at": "2014-10-11T14:13:27.073Z",
      "unseen": false,
      "last_read_post_number": 2,
      "unread": 0,
      "new_posts": 0,
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "notification_level": 3,
      "archetype": "regular",
      "like_count": 0,
      "views": 133,
      "category_id": 15
    }, {
      "id": 103,
      "title": "What are the must see places in York?",
      "fancy_title": "What are the must see places in York?",
      "slug": "what-are-the-must-see-places-in-york",
      "posts_count": 1,
      "reply_count": 0,
      "highest_post_number": 1,
      "image_url": null,
      "created_at": "2014-10-26T21:37:35.819Z",
      "last_posted_at": "2014-10-26T21:37:37.030Z",
      "bumped": true,
      "bumped_at": "2014-10-26T21:37:37.030Z",
      "unseen": false,
      "last_read_post_number": 1,
      "unread": 0,
      "new_posts": 0,
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "notification_level": 3,
      "archetype": "regular",
      "like_count": 0,
      "views": 68,
      "category_id": 30
    }, {
      "id": 12,
      "title": "Partying into the wee hours",
      "fancy_title": "Partying into the wee hours",
      "slug": "partying-into-the-wee-hours",
      "posts_count": 5,
      "reply_count": 1,
      "highest_post_number": 5,
      "image_url": null,
      "created_at": "2014-09-25T11:00:12.408Z",
      "last_posted_at": "2014-09-28T08:41:13.120Z",
      "bumped": true,
      "bumped_at": "2014-09-28T08:41:13.120Z",
      "unseen": false,
      "last_read_post_number": 5,
      "unread": 0,
      "new_posts": 0,
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "notification_level": 3,
      "archetype": "regular",
      "like_count": 0,
      "views": 113,
      "category_id": 6
    }, {
      "id": 70,
      "title": "Tapas in Bairro Alto",
      "fancy_title": "Tapas in Bairro Alto",
      "slug": "tapas-in-bairro-alto",
      "posts_count": 1,
      "reply_count": 0,
      "highest_post_number": 1,
      "image_url": null,
      "created_at": "2014-10-06T18:23:31.060Z",
      "last_posted_at": "2014-10-06T18:23:31.267Z",
      "bumped": true,
      "bumped_at": "2014-10-06T18:23:31.267Z",
      "unseen": false,
      "last_read_post_number": 1,
      "unread": 0,
      "new_posts": 0,
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "notification_level": 2,
      "archetype": "regular",
      "like_count": 0,
      "views": 83,
      "category_id": 20
    }],
    "links": [{
      "url": "http://www.moseleydancecentre.com/",
      "title": "Moseley Dance Centre - Room Hire - Dance School",
      "fancy_title": null,
      "internal": false,
      "reflection": false,
      "clicks": 1,
      "user_id": 1,
      "domain": "www.moseleydancecentre.com"
    }],
    "notification_level": 3,
    "notifications_reason_id": 1,
    "can_move_posts": true,
    "can_edit": true,
    "can_delete": true,
    "can_recover": true,
    "can_remove_allowed_users": true,
    "can_invite_to": true,
    "can_create_post": true,
    "can_reply_as_new_topic": true,
    "can_flag_topic": true
  },
  "highest_post_number": 4,
  "last_read_post_number": 4,
  "deleted_by": null,
  "has_deleted": false,
  "actions_summary": [{
    "id": 4,
    "count": 0,
    "hidden": false,
    "can_act": true
  }, {
    "id": 7,
    "count": 0,
    "hidden": false,
    "can_act": true
  }, {
    "id": 8,
    "count": 0,
    "hidden": false,
    "can_act": true
  }],
  "chunk_size": 20,
  "id": 25,
  "title": "Potential locations for the next africajam",
  "fancy_title": "Potential locations for the next africajam",
  "posts_count": 4,
  "created_at": "2014-09-27T13:25:37.711Z",
  "views": 128,
  "reply_count": 2,
  "participant_count": 3,
  "like_count": 0,
  "last_posted_at": "2014-09-29T15:43:16.587Z",
  "visible": true,
  "closed": false,
  "archived": false,
  "has_summary": false,
  "archetype": "regular",
  "slug": "potential-locations-for-the-next-africajam",
  "category_id": 15,
  "word_count": 179,
  "deleted_at": null,
}
