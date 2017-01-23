var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');

//db connect
var db = 'mongodb://localhost/book';

mongoose.connect(db);

//body parser to parse json or url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//building route ---------- **** ------------
app.get('/', function(req, res){
  res.send('happy to be here');
});

/*
  Note: using mongoosejs reference library
  mongoosejs.com/docs/queries.html
*/

app.get('/books', function(req, res){
  console.log('getting all books');
  Book.find({})
    .exec(function(err, books){
      if(err){
        res.send('error has occured');
      }else{
        console.log(books);
        res.json(books);
      }
    });
});

app.get('/books/:id', function(req, res){
  console.log('getting on book');
  Book.findOne({
    _id: req.params.id
  })
  .exec(function(err, book){
    console.log(book);
    res.json(book);
  })
})

//add a post route to insert
app.post('/book', function(req, res){
  var newBook = new Book();//sample new book schema

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save(function(err, book){
    if(err){
      res.send('error saving book');
    }else{
      console.log(book);
      res.send(book);
    }
  })
});
//or this one route /book = /book2 but book2 is nicer
app.post('/book2', function (req, res){
  Book.create(req.body, function(err, book){
    if(err){
      console.log('error saving book');
    }else{
      console.log(book);
      req.send(book);
    }
  });
});

//add a post route to update
//upsert (optional): Update if the record already exists else insert a new record.
app.put('/book/:id', function(req, res){
  Book.findOneAndUpdate({
    _id: req.params.id
  },{$set: {title: req.body.title}},
    {upsert: true},
    function (err, newBook){
      if(err){
        console.log('error occured');
      }else{
        console.log(newBook);
        //res.status(204);
        res.send(newBook);
      }
    });
});

app.delete('/book/:id', function(req, res){
  Book.findOneAndRemove({
    _id: req.params.id
  }, function(err, book){
    if(err){
      console.log(err);
    }else{
      console.log(book);
      res.status(204);
    }
  });
});
//-------end route---------

var port = 8080;

app.listen(port, function(){
  console.log('app listening to port: '+ port);
});
