var page = require('page');
var empty = require('empty-element');
var template = require('./template')
var title = require('title');

page('/', function(ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-container');

	var pictures = [
		{
			user: {
				username: 'Enmanuel Jarquin',
				avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true
		},
		{
			user: {
				username: 'Enmanuel Jarquin',
				avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg'
			},
			url: 'office.jpg',
			likes: 2,
			liked: true
		},		
	];
	empty(main).appendChild(template(pictures));
});