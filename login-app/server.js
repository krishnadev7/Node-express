const express = require('express');
const app = express();
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const router = require('./router');

app.set('view engine','ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

app.use('/route',router);

app.get('/',(req,res) => {
    res.render('base',{title: 'Login Application'});
})

app.listen(5000,()=>{
    console.log(`Server listening on http://localhost:5000`);
})