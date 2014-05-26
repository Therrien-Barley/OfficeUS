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



// Polls Instagram API to see if there are any updates
// if so, stores them in the mongodb
exports.fetch = function(res){
	ig.tag('architecture', function(err, result, limit) {

		if(err){
			console.log('instagram.js::fetch() err with msg: ' + err);
		}else{
			console.log('instagram.js::'.cyan + 'returned from fetch() with: \n');
			console.dir(result);

			res.render('feeds', { title: 'OfficeUS Outposts', result: result });
		}
	});
};





exports.test = function(){
	console.log('ig.test()'.cyan);
};