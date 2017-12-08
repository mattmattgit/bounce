require('./config/config');

const express = require('express');
const http = require('http');
const socket = require('socket.io')
const path = require('path');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose.js');
let {User} = require('./models/user.js');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socket(server);

app.use(express.static(publicPath));

// app.post('/todos', (req,res) => {
// 	var newTodo = new Todo( {
// 		text: req.body.text
// 	})

// 	newTodo.save().then((r) => {
// 		res.send(r);
// 	}, (e) => {
// 		res.status(400).send(e);
// 	});
// });

io.on('connection', (socket) => {
	console.log('new user');

	socket.on('sendIP', (data) => {
		console.log(data);
	});

	socket.on('addEmail', (email) => {
		console.log(email);
		var newUser = new User({
			email: email.email
		})

		newUser.save().then((res) => {
			console.log(res);
			io.emit('emailSuccess', `Thanks ${email.email}`)
		}, (e) => {
			console.log(e)
			io.emit('emailSuccess', `Sorry we didn't get that. Balls`)
		})
		
	});

	socket.on('disconnect', () => {
		console.log('bye')
	});
});

server.listen(port, () => {
	console.log(`listening on ${port}`)
});