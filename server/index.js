var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path = require('path');
var cors = require('cors');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var {DATABASE_URL} = require('./config/database.js');
var {CLIENT_ORIGIN} = require('./config/server.js');

app.locals.db = mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true
}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log('connected to db');
    }
}); 

mongoose.Promise = global.Promise;
require('./config/passport')(app, passport);

if (process.env.NODE_ENV !== 'test'){
    app.use(morgan('dev'));
}

app.use(cookieParser());
// app.use(cors({
//     origin: CLIENT_ORIGIN,
//     credentials: true
// }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  });

app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', 
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./app/routes.js')(app, passport); 

app.use('*', (_, res) => res.sendFile(path.resolve(__dirname, '../client/build/index.html')));

if (require.main === module){
    app.listen(port, () => console.log('The magic happens on port ' + port));
}

module.exports = { app, DATABASE_URL };


