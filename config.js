'use strict'

const config = {
	aws: {
		accessKey: process.env.AWS_ACCESS_KEY,
		secretKey: process.env.AWS_SECRET_KEY
	},
	client: {
		endpoints: {
			pictures: 'http://ap.platzigram.com/picture',
			users: 'http://ap.platzigram.com/user',
			auth: 'http://ap.platzigram.com/auth'
		}
	},
	secret: process.env.PLATZIGRAM_SECRET || 'pl4tzi' // el valor por default nunca debe de ir, se puso solo para efectos de pruebas
}

if (process.env.NODE_ENV !== 'production') {
	config.client.endpoints = {
		pictures: 'http://localhost:5000',
		users: 'http://localhost:5001',
		auth: 'http://localhost:5002'
	}
}

module.exports = config;