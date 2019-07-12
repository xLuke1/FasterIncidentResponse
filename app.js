const express = require('express')

const app = express();

const port = process.env.PORT || 4000;

app.get('/', function (req, res) {
  res.send('testing testing 123');
})

const listener = app.listen(port, function () {
  console.log(`Express server started on port:  + ${listener.address().port}`);
});

// var listener = app.listen(app.get('port'), function() {
//     console.log( 'Express server started on port: '+listener.address().port );
// });