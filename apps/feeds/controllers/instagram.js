var colors  = require('colors');
console.log('images.js entered'.cyan);
/////// END DEPENDENCIES


/////// INSTAGRAM
var ig = require('instagram-node').instagram();

//import Instagram secrets from json file
var instagram_secrets = require('../secrets.json').instagram;

//set up secrets for Instagram module
ig.use({ client_id: instagram_secrets.client_id,
    client_secret: instagram_secrets.client_secret });
/////// END INSTAGRAM