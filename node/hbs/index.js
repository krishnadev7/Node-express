const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.set('view-engine','handlebars')
app.engine('handlebars',handlebars({
    layoutsDir: __dirname + '/views/',
}))
app.get('/',(req,res) => {
    res.render('page',{title: "Express view engine",p:"some random text"})
}).listen(5000);