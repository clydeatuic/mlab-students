/*
	Basic Express Server Guide Step by Step
	1. Load dependencies
	2. Setup Model
	3. Setup View Engine
	4. Utilizing middlewares
	5. Define routes
	6. Assign Port Number

	HTTP Methods Overview
	1. GET Retrieve the resource from the server.
	2. POST Create a resource on the server.
	3. PUT Update the resource on the server.
	4. DELETE Delete the resource from the server.
*/

/*>>> load dependencies <<<*/
const express = require('express');
const bodyParser= require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

/*>>> setup mongo model <<<*/
mongoose.Promise = global.Promise;
const studentSchema = new mongoose.Schema({
	studentid: 'string',	
	firstname: 'string',
	lastname: 'string'
});
// const uri = "mongodb://username:password@host.domain.com:port/database";
const uri = process.env.DB_URI;
const options = {
	useMongoClient: true,
	promiseLibrary: require('bluebird'),
};
const db = mongoose.createConnection(uri, options);
const Students = db.model('students', studentSchema);

/*>>> setup template view engine <<<*/
app.set('view engine', 'ejs');

/*>>> using express middlewares <<<*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());

/*>>> defining routes <<<*/
app.get('/', (req,res)=>{
	const callback = (err,result) => {
		if(err)throw err;
		res.render('index.ejs', {students: result});		
	};
	Students.find(callback);
	// res.sendFile(__dirname + '/index.html');
});

app.post('/students', (req, res) => {
	const newStudent = req.body;
	const callback = (err, data)=>{
		if(err)throw err;
		console.log('saved to database');
		res.redirect('/');
	};
	Students.create(newStudent, callback);
});

app.put('/students', (req, res) => {
	const query = {
		studentid: req.body.studentid
	};
	const update = {
		$set: {
			firstname: req.body.firstname,
			lastname: req.body.lastname
		}
	};
	const options = {
		sort: {_id: -1},
		upsert: false
	};
	const callback = (err, result) => {
		if (err) return res.send(err);
		res.send(result);
	};

	Students.updateOne(query, update, options, callback);
	// Students.findOneAndUpdate(query, update, options, callback);
});

app.delete('/students', (req, res) => {
	const query = {
		studentid: req.body.studentid
	};
	const callback = (err, result) => {
		if (err) return res.send(500, err);
		res.send({message: req.body.studentid + ' got deleted.'});
	};

	Students.deleteOne(query, callback);
});

/*>>> run server and assign port <<<*/
app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),()=>{
	console.log('listening on ', app.get('port'));
});