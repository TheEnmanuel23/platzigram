var page = require('page');
var empty = require('empty-element');
var template = require('./template')
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');


page('/', header, loadpicturesAxios, function(ctx, next){
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

function loadpicturesAxios(ctx, next){
	axios
		.get('/api/pictures')
		.then(function (res){
			ctx.pictures = res.data;
			next();
		})
		.catch(function (err){
			console.log(err);
		});
};