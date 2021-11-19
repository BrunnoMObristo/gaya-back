var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); //Incluir o pacote CORS

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lojaRouter = require('./routes/lojas');

var app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

//Executar o middleware para tratamento do CORS / Incluir este midlleware antes dos outros
/*app.use((req, res, next) => {
	//Permitir todos site colocando "*" 
  res.header("Access-Control-Allow-Origin", "*");
	//Informar destes sites quais métodos serão permitidos
  res.header("Access-Control-Allow-Methods", 'GET,HEAD,PUT,PATCH,POST,DELETE');
  app.use(cors());
  next();
}); */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lojas', lojaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
