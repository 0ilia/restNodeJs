const express = require('express');

const mysql = require('../../../config/Database.js');
const bcrypt = require('bcrypt');
const router = express.Router();


//add User
router.post('/', (req, res, next) => {


    if (req.body.login.length > 3) {
        let email = req.body.email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        if (email) {
            if (req.body.password.length > 4) {
                if (req.body.password === req.body.confirmPassword) {

                    bcrypt.hash(req.body.password, 10, function(err, hash) {
                        if(!err){
                            passHash = hash;

                        }else {
                           console.log("Ошибка хеширования");
                        }
                    }); 

                    const user = [req.body.login, req.body.email, passHash, req.body.cookie];
                    const sql = "INSERT INTO add_user_view(login, email,password,cookie) VALUES(?,?,?,?);";

                    mysql.query(sql, user, function (err, results) {
                        if (!err) {
//                            console.log("Данные добавлены");

                            res.status(200).json({
                                messageError: "Вы зарегистрированны",
                                register: true,
                            });

                        } else {
                            // console.log(err.sqlMessage);
                            //res.json({  messageError: err.sqlMessage.toString(),});
                            res.status(200).json({
                                //  messageError: err.sqlMessage,
                                messageError: "Логин уже существует",
                                register: false,
                            });
                        }
                    });


                } else {
                    res.status(200).json({
                        messageError: "Пароли не совпадают",
                        register: false,
                    });
                }
            } else {
                res.status(200).json({
                    messageError: "Пароль должен содержать минимум 5 символов",
                    register: false,
                });
            }
        } else {
            res.status(200).json({
                messageError: "Не валидный email",
                register: false,
            });
        }
    } else {
        res.status(200).json({
            messageError: "Логин должен содержать минимум 4 символа",
            register: false,
        });

    }


});


module.exports = router;