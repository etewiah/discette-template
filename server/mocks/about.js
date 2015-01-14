module.exports = function(app) {
  var express = require('express');
  var topicsRouter = express.Router();

  topicsRouter.get('/', function(req, res) {
    res.send(about_topic);
  });

  // topicsRouter.post('/', function(req, res) {
  //   res.status(201).end();
  // });

  // topicsRouter.get('/:id', function(req, res) {


  //   res.send(example_topic);

  //   // res.send({
  //   //   'topics': {
  //   //     id: req.params.id

  //   //   }
  //   // });
  // });

  // topicsRouter.put('/:id', function(req, res) {
  //   res.send({
  //     'topics': {
  //       id: req.params.id
  //     }
  //   });
  // });

  // topicsRouter.delete('/:id', function(req, res) {
  //   res.status(204).end();
  // });

  app.use('/discette/about', topicsRouter);
};

var about_topic = {
  "post_stream": {
    "posts": [{
      "id": 184,
      "name": "system",
      "username": "system",
      "avatar_template": "/user_avatar/localhost/system/{size}/1.png",
      "uploaded_avatar_id": 1,
      "created_at": "2014-12-19T22:53:10.586Z",
      "cooked": "<p>[Replace this first paragraph with a short description of your new category. This guidance will appear in the category selection area, so try to keep it below 200 characters. Until you edit this text or create topics, this category won't appear on the categories page.]</p> <p>Use the following paragraphs for a longer description, as well as to establish any category guidelines or rules.</p> <p>Some things to consider in any discussion replies below:</p> <ul><li><p>What is this category for? Why should people select this category for their topic?</p></li><li><p>How is this different than the other categories we already have?</p></li><li><p>Do we need this category?</p></li><li><p>Should we merge this with another category, or split it into more categories?</p></li></ul>",      
      "post_number": 1,
      "post_type": 1,
      "updated_at": "2014-12-19T22:53:10.586Z",
      "reply_count": 0,
      "reply_to_post_number": null,
      "quote_count": 0,
      "avg_time": null,
      "incoming_link_count": 0,
      "reads": 0,
      "score": 0,
      "yours": false,
      "topic_id": 129,
      "topic_slug": "about-the-ed-category",
      "topic_auto_close_at": null,
      "display_username": "system",
      "primary_group_name": null,
      "version": 1,
      "can_edit": false,
      "can_delete": false,
      "can_recover": false,
      "read": true,
      "user_title": null,
      "actions_summary": [{
        "id": 2,
        "count": 0,
        "hidden": false,
        "can_act": null
      }, {
        "id": 3,
        "count": 0,
        "hidden": false,
        "can_act": null
      }, {
        "id": 4,
        "count": 0,
        "hidden": false,
        "can_act": null
      }, {
        "id": 5,
        "count": 0,
        "hidden": true,
        "can_act": null
      }, {
        "id": 6,
        "count": 0,
        "hidden": false,
        "can_act": null
      }, {
        "id": 7,
        "count": 0,
        "hidden": false,
        "can_act": null
      }, {
        "id": 8,
        "count": 0,
        "hidden": false,
        "can_act": null
      }],
      "moderator": true,
      "admin": true,
      "staff": true,
      "user_id": -1,
      "hidden": false,
      "hidden_reason_id": null,
      "trust_level": 4,
      "deleted_at": null,
      "user_deleted": false,
      "edit_reason": null,
      "can_view_edit_history": true,
      "wiki": false
    }],
    "stream": [184]
  },
  "draft": null,
  "draft_key": "topic_129",
  "draft_sequence": null,
  "unpinned": null,
  "pinned_globally": false,
  "pinned": true,
  "pinned_at": "2014-12-19T22:53:10.036Z",
  "details": {
    "auto_close_at": null,
    "auto_close_hours": null,
    "auto_close_based_on_last_post": false,
    "created_by": {
      "id": -1,
      "username": "system",
      "uploaded_avatar_id": 1,
      "avatar_template": "/user_avatar/localhost/system/{size}/1.png"
    },
    "last_poster": {
      "id": -1,
      "username": "system",
      "uploaded_avatar_id": 1,
      "avatar_template": "/user_avatar/localhost/system/{size}/1.png"
    },
    "participants": [{
      "id": -1,
      "username": "system",
      "uploaded_avatar_id": 1,
      "avatar_template": "/user_avatar/localhost/system/{size}/1.png",
      "post_count": 1
    }],
    "suggested_topics": [{
      "id": 151,
      "title": "Something from lar w",
      "fancy_title": "Something from lar w",
      "slug": "something-from-lar-w",
      "posts_count": 2,
      "reply_count": 0,
      "highest_post_number": 2,
      "image_url": null,
      "created_at": "2015-01-10T15:25:27.564Z",
      "last_posted_at": "2015-01-10T15:26:00.270Z",
      "bumped": true,
      "bumped_at": "2015-01-10T15:26:00.270Z",
      "unseen": false,
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "archetype": "discette",
      "like_count": 0,
      "views": 1,
      "category_id": 35
    }, {
      "id": 21,
      "title": "Night life in Jersey",
      "fancy_title": "Night life in Jersey",
      "slug": "night-life-in-jersey",
      "posts_count": 1,
      "reply_count": 0,
      "highest_post_number": 1,
      "image_url": "/plugins/emoji/images/wink.png",
      "created_at": "2014-09-25T22:49:58.837Z",
      "last_posted_at": "2014-09-25T22:49:59.658Z",
      "bumped": true,
      "bumped_at": "2014-09-25T22:49:59.658Z",
      "unseen": false,
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "archetype": "regular",
      "like_count": 0,
      "views": 55,
      "category_id": 10
    }, {
      "id": 37,
      "title": "Good food that doesn't cost a fortune",
      "fancy_title": "Good food that doesn\\u0026rsquo;t cost a fortune",
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
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "archetype": "regular",
      "like_count": 0,
      "views": 115,
      "category_id": 15
    }, {
      "id": 122,
      "title": "Looking for the mad dog of Tralee",
      "fancy_title": "Looking for the mad dog of Tralee",
      "slug": "looking-for-the-mad-dog-of-tralee",
      "posts_count": 2,
      "reply_count": 0,
      "highest_post_number": 2,
      "image_url": "//a-klavado-discourse.s3.amazonaws.com/511a51ed253e1dbc13113a204a28014e541cd431b5_666x500.JPG",
      "created_at": "2014-11-21T13:13:52.915Z",
      "last_posted_at": "2014-11-21T13:32:54.773Z",
      "bumped": true,
      "bumped_at": "2014-11-21T13:32:54.773Z",
      "unseen": false,
      "pinned": false,
      "unpinned": null,
      "visible": true,
      "closed": false,
      "archived": false,
      "archetype": "regular",
      "like_count": 0,
      "views": 39,
      "category_id": 25
    }],
    "notification_level": 1,
    "can_flag_topic": false
  },
  "highest_post_number": 1,
  "deleted_by": null,
  "actions_summary": [{
    "id": 4,
    "count": 0,
    "hidden": false,
    "can_act": null
  }, {
    "id": 7,
    "count": 0,
    "hidden": false,
    "can_act": null
  }, {
    "id": 8,
    "count": 0,
    "hidden": false,
    "can_act": null
  }],
  "chunk_size": 20,
  "id": 129,
  "title": "About the ed category",
  "fancy_title": "About the ed category",
  "posts_count": 1,
  "created_at": "2014-12-19T22:53:10.045Z",
  "views": 1,
  "reply_count": 0,
  "participant_count": 1,
  "like_count": 0,
  "last_posted_at": null,
  "visible": false,
  "closed": false,
  "archived": false,
  "has_summary": false,
  "archetype": "regular",
  "slug": "about-the-ed-category",
  "category_id": 35,
  "word_count": null,
  "deleted_at": null
}

var example_topics = {
  "discette_topics": [{
    "category_id": 6,
    "id": 80,
    "views": 56,
    "like_count": 0,
    "title": "Where to go with a large number of people",
    "excerpt": "I\u0026#39;ve had a group of 36 dutchmen coming over and had to find some restaurants for them. Madrid has loads of restaurants but often not big enough to serve a big group. Yesterday we went to La Mucca on calle pez, tonight to\u0026hellip;",
    "archetype": "regular",
    "last_posted_at": "2014-10-11T17:54:48.779Z",
    "posts_count": 1,
    "slug": "where-to-go-with-a-large-number-of-people"
  }, {
    "category_id": 6,
    "id": 11,
    "views": 95,
    "like_count": 0,
    "title": "The best 'menu del dia' on the planet!",
    "excerpt": "One of the best things for me about Madrid is the variety and quality of the daily menus that many restaurants have to offer. And about the best \u0026#39;menu del dia\u0026#39; that you\u0026#39;ll find is at Capricho Extremeño.  Its a small fami\u0026hellip;",
    "archetype": "regular",
    "last_posted_at": "2014-10-07T00:41:31.805Z",
    "posts_count": 2,
    "slug": "the-best-menu-del-dia-on-the-planet"
  }, {
    "category_id": 6,
    "id": 12,
    "views": 88,
    "like_count": 0,
    "title": "Partying into the wee hours",
    "excerpt": "Only a teeny weeny small bar but the have the best live music you can get for free.  Check out who\u0026#39;s playing here: \n\nhttps://www.facebook.com/maloka.barbrasileiro?fref=ts \n\nReally lively music and super friendly crowd!",
    "archetype": "regular",
    "last_posted_at": "2014-09-28T08:41:13.120Z",
    "posts_count": 5,
    "slug": "partying-into-the-wee-hours"
  }, {
    "category_id": 6,
    "id": 15,
    "views": 92,
    "like_count": 0,
    "title": "The startup tourist guide to Madrid",
    "excerpt": "Any international geek or startupper visiting Madrid should make sure they stop by at the international labs - its full of smart Eds and interesting people working on a variety of startups. \n\nHere\u0026#39;s a little preview of t\u0026hellip;",
    "archetype": "regular",
    "last_posted_at": "2014-10-05T22:32:08.031Z",
    "posts_count": 2,
    "slug": "the-startup-tourist-guide-to-madrid"
  }, {
    "category_id": 6,
    "id": 93,
    "views": 136,
    "like_count": 0,
    "title": "Best of Tapapies 2014",
    "excerpt": "Tapapies is a yearly tapas festival in the Madrid working class neighbourhood of Lavapies.  This year it runs from the 16th till the 26th of October.  You can see the full list of places taking part here: \n\nhttp://comerc\u0026hellip;",
    "archetype": "regular",
    "last_posted_at": "2014-10-18T00:48:33.465Z",
    "posts_count": 3,
    "slug": "best-of-tapapies-2014"
  }, {
    "category_id": 6,
    "id": 35,
    "views": 98,
    "like_count": 0,
    "title": "Great bars to have cañas and tapas",
    "excerpt": "When it comes to bars in Madrid, you can\u0026#39;t go wrong, there\u0026#39;s almost as much bars as people. I wanted to post about El Capricho though because I think it has to be one of the best places where cañas are put. For me a caña\u0026hellip;",
    "archetype": "regular",
    "last_posted_at": "2014-10-12T21:05:44.709Z",
    "posts_count": 3,
    "slug": "great-bars-to-have-canas-and-tapas"
  }, {
    "category_id": 6,
    "id": 71,
    "views": 100,
    "like_count": 0,
    "title": "Classic madrid walking tour",
    "excerpt": "Someone recently posted details of a classic walking tour of Madrid on reddit.  Though  it had links to each of the places on google maps, it was a bit of a hassle opening multiple new windows to see each place so to mak\u0026hellip;",
    "archetype": "regular",
    "last_posted_at": "2014-10-07T10:53:20.605Z",
    "posts_count": 5,
    "slug": "classic-madrid-walking-tour"
  }, {
    "category_id": 6,
    "id": 133,
    "views": 1,
    "like_count": 0,
    "title": "Samba in madrid city",
    "excerpt": "slighthly longer sht txt",
    "archetype": "regular",
    "last_posted_at": "2014-12-25T21:27:01.328Z",
    "posts_count": 1,
    "slug": "samba-in-madrid-city"
  }]
}
