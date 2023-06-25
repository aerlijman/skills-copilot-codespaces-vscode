//Create web server
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

//Use body-parser to parse body of POST request
app.use(bodyParser.urlencoded({ extended: true }));

//Use body-parser to parse body of POST request
app.use(bodyParser.json());

//Use public folder for static files
app.use(express.static('public'));

//Use public folder for static files
app.use(express.static('node_modules/bootstrap/dist'));

//Use public folder for static files
app.use(express.static('node_modules/jquery/dist'));

//Use public folder for static files
app.use(express.static('node_modules/popper.js/dist'));

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

//Create a new database instance
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });
 
