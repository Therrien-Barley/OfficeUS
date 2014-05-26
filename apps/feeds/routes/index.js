
/*
 * GET home page.
 */

var ig = require('../controllers/instagram');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.instagram = function(req, res){

	ig.fetch(res);
}