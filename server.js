var express = require('express');

// create app

var app = express();

/*app.use(function (req, resp, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    resp.redirect('http://' + req.hostname + req.url)
  }
  else {
    next();
  }
});
*/
app.use(express.static('public'));

app.listen(3000,function(){
  console.log('Express server is up on port 3000')
});
