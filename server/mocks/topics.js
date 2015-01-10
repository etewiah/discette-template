module.exports = function(app) {
  var express = require('express');
  var topicsRouter = express.Router();

  topicsRouter.get('/', function(req, res) {
    res.send(example_topics);
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

  app.use('/discette_topics', topicsRouter);
};


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
