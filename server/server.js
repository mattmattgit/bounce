require('./config/config');
require('dotenv').config();

const express = require('express');
const http = require('http');
const socket = require('socket.io')
const path = require('path');
const fs = require('fs');
const {ObjectID} = require('mongodb');
const nodeCookie = require('node-cookie');

let {mongoose} = require('./db/mongoose.js');
let {User} = require('./models/user.js');
let utils = require('./utilFunctions.js');
let twit = require('./twit.js');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socket(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('new user');

	socket.on('addEmail', (email) => {
		console.log(email);
		var newUser = new User({
			email: email.email
		})

		newUser.save().then((res) => {
			console.log(res);
			io.emit('emailSuccess', `${email.email}`)
		}, (e) => {
			console.log(e)
			io.emit('emailSuccess', `Sorry we didn't get that. Try Dropping us an email at hello@timetobounce.co.uk`)
		})
		
	});

	socket.on('text', (output) => {
		utils.entitiesFunction(output).then((res) => {
			console.log(res)
			io.emit('analysisSuccess', res)
		}, (e) => {
			console.log(e)
			io.emit('analysisSuccess', `Dunno mate`)
		})

		utils.sentimentFunction(output).then((res) => {
			console.log(res)
			io.emit('sentSuccess', res)
		}, (e) => {
			console.log(e)
			io.emit('sentSuccess', `Dunno mate`)
		})

		utils.classFunction(output).then((res) => {
			console.log(res)
			io.emit('classSuccess', res)
		}, (e) => {
			console.log(e)
			io.emit('classSuccess', `Dunno mate`)
		})
	})

	socket.on('twitCat', (output) => {
		twit.getter(output.twitterCategories).then((res) => {
			console.log(res)
			io.emit('tweets', res)
		}, (e) => {
			console.log(e)
			io.emit('tweets', `Nothing found`)
		})
		twit.sender(output)
	})

	socket.on('disconnect', () => {
		console.log('bye')
	});
});

server.listen(port, () => {
	console.log(`listening on ${port}`)
});