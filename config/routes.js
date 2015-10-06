var
  express = require('express'),
  app     = express();
;

module.exports = function () {
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

  // Route for the success page
  //===================================================
  app.get('/success', function(req, res){
    res.render('success', {
      title : 'MBM Catering - Success'
    });
  });
};// end of module.exports
