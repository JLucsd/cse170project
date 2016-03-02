
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var getjson = require('./routes/getjson');
var index = require('./routes/index');
var splash = require('./routes/splash');
var add = require('./routes/add');
var about = require('./routes/about');
var contact = require('./routes/contact');
var help = require('./routes/help');
var homepage = require('./routes/homepage');
var newlist = require('./routes/newlist');
var editdata = require('./routes/editdata');
var editlist = require('./routes/editlist');
var newuser_homepage = require('./routes/newuser_homepage');
var showlist = require('./routes/showlist');
var homepage_after_signup = require('./routes/homepage_after_signup');
var visualization = require('./routes/visualization');
var start_shop = require('./routes/start_shop');
var shop= require('./routes/shop');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

app.get('/',splash.view);
app.get('/index', index.view);
app.get('/add',add.view);
app.get('/about', about.view);
app.get('/contact', contact.view);
app.get('/help', help.view);
app.get('/homepage', homepage.view);
app.get('/test_homepage',homepage.test_view);
app.get('/newuser_homepage', newuser_homepage.view);
app.get('/getjson', getjson.view)
app.get('/newlist', newlist.view);
app.get('/editdata',editdata.view);
app.get('/editlist',editlist.view);
app.get('/showlist',showlist.view);
app.get('/shop',shop.view)
app.get('/visualization', visualization.view);
app.get('/start_shop', start_shop.view)
app.post('/homepage_after_signup', homepage_after_signup.view);
// Example route

// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
