# Discette

This Ember application was created using ember-cli and is designed to work with a [Discourse](http://www.discourse.org/) backend.

One of the main reasons for this is that even after many months of working with the Discourse codebase, I find too large to easily find my way around.  This NOT a criticism of Discourse, it has a ton of functionality and probably needs to be complex.  I just find that I don't need a lot of that functionality and I got curious about what the minimum amount of functionality for a front end would be.  Well, this is what I came up with.  You can see it in action here:

http://ed.klavado.com/home

There are about 2.3 million extra bits of functionality that could be added but the point of this is that anyone can fork this basic implementation and add what the hell they want.  It is a pretty simple (too simple perhaps) codebase and anyone who manages to get their head round ember-cli will understand it in minutes.

If you wish to make any changes, please fork this repository.  I am happy to host any repository that is forked from this at http://klavado.com.  Here is how that works:
 * Go to any subdomain at klavado.com.  eg http://myname.klavado.com
 * If that subdomain is available, claim it by clicking on the button (You will need to create an account first if you don't have one.
 * Once you've done that, leave me a message here ( http://klavado.com/users/ed_tee ) and I will deploy your fork of this discette-template to the subdomain you claimed.  Simple as that ;)


You can work with this repository on your local machine as per the instructions below.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/etewiah/discette-template `
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

Please note that by default, when in development it will use mock data served by the built-in express server.  This means that the topics and posts remain the same as you navigate the app.
It is possible to connect to a real discourse server while in development by starting the server so:

`DISABLE_MOCK=true ember serve --proxy http://madrid.lvh.me:3000/`

You will however need to install this plug-in to your discourse server:

https://github.com/etewiah/discourse-drive

You will also have to make sure CORS is set up correctly on the discourse server or use api keys:  I will provide more detailed instructions on this when I get the chance.

Right now I'd recommend that you stick with the default of using mock data.  Once I have the plug-in better developed, I will update this readme.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Deploying to your own discourse instance currently involves quite a lot of manual steps - I am working on automating it to a reasonable degree so that I can document it easily here.

In the meantime, as mentioned at the top of this readme, you can contact me via klavado.com and I will deploy your application to any subdomain on klavado.com that is available.  This is only an offer to allow people to experiment with discourse in a quick, easy and free way - I am not offering any guarantees about service levels and at this stage I would not recommend it for anything more than 'kicking the tyres'.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

