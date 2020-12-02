const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const app = express();


require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'build')));

// API routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/stories', require('./routes/api/businesses'));

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});