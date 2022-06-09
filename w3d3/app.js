const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000
app.use(cookieParser())
var path = require("path")
var ejs = require("ejs")
app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('/cookie')
});
app.get('/login', (req, res, next) => {
    res.render('login');
});
app.get('/logout', (req, res, next) => {
    res.clearCookie('username'); 
    res.redirect('/login');
});
app.post('/process_login', (req, res, next) => {
    const { username, password } = req.body;
    const userdetails = {
        username: 'fatma',
        password: '1234'
    }
    if (username === userdetails.username && password === userdetails.password) {
        res.cookie('username', username);
        res.cookie('password', password);
        res.redirect('/cookie');
    } else {
        res.redirect('/login?msg=fail')
    }
});
app.get('/cookie', function(req, res) {
    if(req.cookies.username=="fatma" && req.cookies.password=="1234"){
        res.render('form', { username: req.cookies.username})
    }
    else{
        res.redirect('/login')
    }
});


app.post('/cookie', function(req, res) {
    const myCookie = req.body;
    if(myCookie.text1){
        res.cookie("Textfield:", myCookie.text1)
    }
    if(myCookie.radio){
        res.cookie("Radio:", myCookie.radios)
    }
    if(myCookie.chkbox){
        res.cookie("Checkbox:", myCookie.chkbox)
    }
    if(myCookie.selectlist){
        res.cookie("Option:", myCookie.selectlist)
    }
    if(myCookie.txtArea){
        res.cookie("Textarea:", myCookie.txtArea)
    }
    res.redirect('/view')
  
});

app.get('/view', (req, res,next) =>{
    console.log("cookies: ", req.cookies);
    res.render('view', {name: req.cookies.myName, 
        text1: req.cookies.text1,
        radio: req.cookies.radio,
        chkbox: req.cookies.chkbox,
        seloption: req.cookies.selectlist,
        txtArea: req.cookies.txtArea })
})