const express = require('express');

const mysql = require('../../config/Database.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    mysql.query('Select * from users', (err, rows, fields) => {

        if (!err) {
            console.log(rows);
        }
    });

    res.status(200).json({
        name: "Ilya"
    });


});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        name: req.params.id
    });


});

//add User
router.post('/', (req, res, next) => {

    if (req.body.login.length > 3) {
        let email = req.body.email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        if (email) {
            if (req.body.password.length > 4) {
                if (req.body.password === req.body.confirmPassword) {

                    const user = [req.body.login, req.body.email, req.body.password, req.body.cookie];
                    const sql = "INSERT INTO users(login, email,password,cookie) VALUES(?,?,?,?)";
                    // res.send(req.body.login);
                    /*
var q = db.query("SELECT * FROM someTable");
var count = 0;

q.on("end", done);
q.on("error", function (err) {console.error(err.stack || err);});

q.on("result", function (row) {
    console.log("row:", ++count, row.id);
    db.pause()

    setTimeout(function () {
        db.resume();
    }, 1000);
});*/
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