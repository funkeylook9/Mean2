var express = require('express');
var path = require('path');
var event = require('events')
var eventEmitter =  new event.EventEmitter()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http').Server(app);
var cors = require('cors')

var indexRouter = require('./routes/index');
var ProductRouter = require('./routes/product');
var SignupRouter = require('./routes/Signup');

var app = express();

// view engine setup
app.use(express.static(__dirname + '/views'));

app.engine('html', require('ejs').renderFile);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'html');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Product', ProductRouter);
app.use('/User', SignupRouter);

 var myEventHandler = ()=>{
    console.log('event firirng');
}

eventEmitter.on('fire',myEventHandler);

eventEmitter.emit('fire')
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



module.exports = app;



