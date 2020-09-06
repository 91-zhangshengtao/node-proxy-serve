// var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const proxy = require('http-proxy-middleware') // proxy  插件
const { port = 8000, proxy: proxyConfig = {} } = require('./serverConfig') // proxy 反向代理配置

// var proxyRouter = require('./routes/proxy');
var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // 支持跨域
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));


// router
// app.use('/test', proxyRouter);

// // catch 404 and forward to error handler
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


// proxy 反向代理
Object.keys(proxyConfig).map(key=>{
  app.use(key, proxy(proxyConfig[key]) )
})
app.listen(()=>{
  console.log(`server is running on port ${process.env.PORT ? process.env.PORT:'3000'}`)
})

module.exports = app;
