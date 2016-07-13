var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db;
console.log('Hello');
if(process.env.ENV == 'Test'){

    db = mongoose.connect('mongodb://localhost/bookAPI_test');
}

else{
    db= mongoose.connect('mongodb://localhost/bookAPI');
}

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.use('/api/books', bookRouter); 


app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;