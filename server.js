var express =  require('express');
var app =  express();
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');


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
				username: 'Angélica Cabrera',
				avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/admod/128.jpg'
			},
			url: 'sample-1.jpg',
			likes: 1,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		},		
	];
	setTimeout(() => res.send(pictures), 2000);
})

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

app.get('/api/user/:username', function(req, res){
	const user = {
		username: req.params.username,
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/admod/128.jpg',
		pictures: [
				{
					id: 1,
					src: 'https://fb-s-d-a.akamaihd.net/h-ak-xpt1/v/t1.0-1/p160x160/15698305_1859695137597513_6580231155928255033_n.jpg?oh=6fce37c3171c4e7d63ac839000ae2405&oe=593A924E&__gda__=1498107973_8515b76894fb18ada34701cd0ea8a28c',
					likes: 3
				},{
					id: 2,
					src: 'https://fb-s-d-a.akamaihd.net/h-ak-xpt1/v/t1.0-1/p160x160/15698305_1859695137597513_6580231155928255033_n.jpg?oh=6fce37c3171c4e7d63ac839000ae2405&oe=593A924E&__gda__=1498107973_8515b76894fb18ada34701cd0ea8a28c',
					likes: 23
				},{
					id: 3,
					src: 'https://fb-s-d-a.akamaihd.net/h-ak-xpt1/v/t1.0-1/p160x160/15698305_1859695137597513_6580231155928255033_n.jpg?oh=6fce37c3171c4e7d63ac839000ae2405&oe=593A924E&__gda__=1498107973_8515b76894fb18ada34701cd0ea8a28c',
					likes: 42
				},{
					id: 4,
					src: 'https://fb-s-d-a.akamaihd.net/h-ak-xpt1/v/t1.0-1/p160x160/15698305_1859695137597513_6580231155928255033_n.jpg?oh=6fce37c3171c4e7d63ac839000ae2405&oe=593A924E&__gda__=1498107973_8515b76894fb18ada34701cd0ea8a28c',
					likes: 14
				},{
					id: 5,
					src: 'https://fb-s-d-a.akamaihd.net/h-ak-xpt1/v/t1.0-1/p160x160/15698305_1859695137597513_6580231155928255033_n.jpg?oh=6fce37c3171c4e7d63ac839000ae2405&oe=593A924E&__gda__=1498107973_8515b76894fb18ada34701cd0ea8a28c',
					likes: 53
				}
			]
		};
	res.send(user);
})

app.get('/:username', function(req, res){
	res.render('index', {title: `Platzigram - ${req.params.username}` });
});

app.get('/:username/:id', function(req, res){
	res.render('index', {title: `Platzigram - ${req.params.username}` });
});

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error.'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})