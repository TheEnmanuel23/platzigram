var express =  require('express');
var app =  express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index', { title: 'Platzigram'});
});

app.get('/singup', function(req, res){
	res.render('index', { title: 'Platzigram - Singup'});
});

app.get('/singin', function(req, res){
	res.render('index', { title: 'Platzigram - Singin'});
});

app.get('/api/pictures', function(req, res){
	var pictures = [
		{
			user: {
				username: 'Enmanuel Jarquin',
				avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date().getTime()
		},
		{
			user: {
				username: 'Enmanuel Jarquin',
				avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/admod/128.jpg'
			},
			url: 'sample-1.jpg',
			likes: 1,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		},		
	];
	setTimeout(function(){
		res.send(pictures);
	}, 2000);
	
})

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error.'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})