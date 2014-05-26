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


var image_array = [];



var fetchHandler = function(err, result, pagination, limit) {
  // Your implementation here
  if(err){
		console.log('instagram.js::fetchHandler() err with msg: ' + err);
	}else{
		console.log('instagram.js::'.cyan + 'returned from fetch() with: \n');
		console.dir(pagination);

		image_array.push(medias);

		if(pagination.next){
			pagination.next( fetchHandler );
		}else{
			res.render('feeds', { title: 'OfficeUS Outposts', medias: image_array });
		}
	}
};



// Polls Instagram API to see if there are any updates
// if so, stores them in the mongodb
exports.fetch = function(res){
	ig.tag_media_recent( 'architecture', fetchHandler );
};





exports.test = function(){
	console.log('ig.test()'.cyan);
};