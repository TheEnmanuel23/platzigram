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

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error.'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})