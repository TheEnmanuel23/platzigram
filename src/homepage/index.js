var page = require('page');
var empty = require('empty-element');
var template = require('./template')
var title = require('title');
var request = require('superagent');

page('/', loadpictures, function(ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-container');
	console.log(ctx.pictures);
	empty(main).appendChild(template(ctx.pictures));
});

function loadpictures(ctx, next){
	request
		.get('/api/pictures')
		.end(function(err, res){
			if(err) return console.log(err);
			
			ctx.pictures = res.body;
			next();
		})
};