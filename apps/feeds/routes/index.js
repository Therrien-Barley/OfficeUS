
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.instagram = function(req, res){
	res.render('feeds', { title: 'OfficeUS Outposts' });
}