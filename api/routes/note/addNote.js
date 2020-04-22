const express = require('express');

const mysql = require('../../../config/Database.js');
const router = express.Router();


//add Note



router.post('/', (req, res, next) => {
    let timeNow = Date.now();
    const user = [req.body.login, req.body.theme, req.body.message,timeNow,timeNow];
    const sql = "INSERT INTO add_note_view(login, theme,message,dateCreate,dateUpdate) VALUES(?,?,?,?,?);";

    mysql.query(sql, user, function (err, results) {
        if (!err) {
                           console.log();

            res.status(200).json({
                message: "Заметка добавленна",
                id: results["insertId"],

            });

        } else {
            // console.log(err.sqlMessage);
            //res.json({  messageError: err.sqlMessage.toString(),});
            res.status(200).json({
                //  messageError: err.sqlMessage,
                message: "Error",
            });
        }
    });

});

module.exports = router;