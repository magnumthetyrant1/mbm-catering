var
  express = require('express'),
  app     = express();

module.exports = function(app){
  // Route for the home page
  //===================================================
  app.get('/', function(req, res){
      res.render('index', {
          title : 'MBM Catering - Home'
      });
  });

  // Route for the contact page
  //===================================================
  app.get('/contact', function(req, res){
    res.render('contact', {
        title : 'MBM Catering - Contact'
    });
  });

  // Route for the events page
  //===================================================
  app.get('/events', function(req, res){
    res.render('events', {
      title : 'MBM Catering - Events'
    });
  });

  // Route for the portfolio page
  //===================================================
  app.get('/portfolio', function(req, res){
    res.render('portfolio', {
      title: 'MBM Catering - Portfolio'
    });
  });

  // Route for the success page
  //===================================================
  app.get('/success', function(req, res){
    res.render('success', {
      title : 'MBM Catering - Success'
    });
  });

  // Route for the 404 page
  //===================================================

};// End of routes.js
