const express = require('express');

const mysql = require('../../../config/Database.js');
const router = express.Router();


//add Note



router.post('/', (req, res, next) => {


    const user = [req.body.login, req.body.theme, req.body.message];
    const sql = "INSERT INTO add_note_view(login, theme,message) VALUES(?,?,?);";

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