var Author = require('../models/author');

//Display list of all Authors
exports.author_list = function(req,res,next){
	res.send('NOT IMPLEMENTED: Author list');

};

//Display detail page for a specific Author
exports.author_detail = function(req,res,next){
	res.send('NOT IMPEMENTED:Author detail:' +req.params.id);
};

//Display Author create form on GET
exports.author_create_get = function(req,res,next){
	res.send('NOT IMPLEMENTED: Author created GET');
};

//Handle Author create on POST
exports.author_create_post=function(req,res,next){
	res.send('NOT IMPLEMENTED: Author create POST');
};

//Display Author delete from on GET
exports.author_delete_get = function(req,res,next){
	res.send('NOT IMPLEMENTED: Author delete GET');
};

//Handle Author delete on POST
exports.author_delete_post = function(req,res,next){
	res.send('NOT IMPLEMENTED:Author delete POST');
};

//Display Author update from on GET
exports.author_update_get = function(){
	res.send('NOT IMPLEMENTED: Author update GET');
};

//Handle Author update on POST
exports.author_update_post = function(req,res,next){
	res.send('NOT IMPLEMENTED:Author update POST');
};


