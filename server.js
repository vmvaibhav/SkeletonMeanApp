var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const port = 3000;
var todoController = require('./controllers/todoController');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.get('', (req,res)=>{
    console.log("I a, here");
    
})

app.listen( (req,res)=>{
    console.log("Server is listening to port: " +port);
});
