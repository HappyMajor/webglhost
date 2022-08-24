const express = require('express');
var compression  = require('compression');
const app = express();

app.use(compression());
app.use(function(req, res, next) {
    next();
});
app.use(express.static(__dirname + '/client'));


app.listen(8080, () => {
console.log('Server has started!')
});
