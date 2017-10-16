var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-faceboook').Strategy;
var platzigram = require('platzigram-client');
var config = require('../config');

var client = platzigram.createClient(config.client);

exports.localStrategy = new LocalStrategy(function (username, password, done) {
	client.auth(username, password, (err, token) => {
		if (err) {
			return done(null, false, { message: 'username and password not found' });
		}

		client.getUser(username, (err, user) => {
			if (err) {
				return done(null, false, { message: `an error courred: ${err.message}` });
			}

			user.token = token;
			return done(null, user);
		});
	});
});

exports.facebookStrategy = new FacebookStrategy({
	clientID: config.auth.facebook.clientID,
	clientSecret: config.auth.facebook.clientSecret,
	callbackURL: config.auth.facebook.callbackURL,
	profileFields: ['id', 'displayName', 'email']
}, function (accessToken, refreshToken, profile, done) {
	var userProfile = {
		username: profile._json.id,
		name: profile._json.name,
		email: profile._json.email,
		facebook: true
	};

	findOrCreate(userProfile, function (err, user) {
		return done(null, user)
	})

	function findOrCreate (user, done) {
		client.getUser(user.username, function (err, usr) {
			if (err) {
				return client.saveUser(user, callback);
			}

			callback(null, usr)
		})
	}
});

exports.serializeUser = function (user, done) {
	done(null, {
		username: user.username,
		token: user.token
	});
}

exports.deserializeUser = function (user, done) {
	client.getUser(user.username, function (err, usr) {
		usr.token = user.token;
		done(err, usr);
	});
}