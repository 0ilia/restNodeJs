const express = require('express');

const mysql = require('../../../config/Database.js');
const bcrypt = require('bcrypt');
const router = express.Router();



router.post('/', (req, res, next) => {
    /*SELECT login from   add_user_view;
    select count(*) FROM add_user_view WHERE login = '1';
    const user = [req.body.login, req.body.email, passHash, req.body.cookie];
    const sql = "SELECT login  from add_user_view where  login = "+req.body.login+";";*/


    mysql.query("SELECT count(*)  password FROM add_user_view where login = '"+req.body.login+"';", function (err, result, fields) {
        if (err) {
            throw err;
        }
        if(result[0]['count(*)']===1){
            bcrypt.compare(req.body.password, result[0]['password']).then(function(result) {

                if(result){
                    res.status(200).json({
                        //  messageError: err.sqlMessage,
                        messageError: "Вы авторизовались",
                        register: true,
                    });
                }else {
                    res.status(200).json({
                        //  messageError: err.sqlMessage,
                        messageError: "Логин или пароль введены неверно",
                        register: false,
                    });
                }
            });
        }else {
            res.status(200).json({
                //  messageError: err.sqlMessage,
                messageError: "Логин или пароль введены неверно",
                register: false,
            });
        }
    });


});


module.exports = router;
