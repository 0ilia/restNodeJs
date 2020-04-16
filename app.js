const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');


const app = express();

app.use(morgan("dev")); //Показывает логи выполнения запроса


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json');

    next();
});


//My Routes
//Add user
app.use('/addUser',require('./api/routes/user/addUser'));
app.use('/loginUser',require('./api/routes/user/loginUser'));

app.use('/getAllNotes',require('./api/routes/note/getAllNotes'));
app.use('/addNote',require('./api/routes/note/addNote'));



//Errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});




module.exports = app;