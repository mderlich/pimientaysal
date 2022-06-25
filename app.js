var createError = require('http-errors');
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();
const puerto = 3000;

// Indicar EJS como template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Indicar recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* RUTAS (1) --------------------- */
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users'); 
const mainRoutes = require("./routes/main");
const productsRoutes = require("./routes/products");
const productsRoutesApi = require("./routes/productsApi");
const detallesRoutes = require("./routes/detalles");

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* RUTAS (2) --------------------- */
// app.use('/users', usersRouter);
app.use('/', mainRoutes);
app.use("/productos", productsRoutes);
app.use("/detalles", detallesRoutes);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* RUTAS (3 / API) --------------------- */
// rutas de api, que devuelven json
app.use("/api/productos", productsRoutesApi);

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


