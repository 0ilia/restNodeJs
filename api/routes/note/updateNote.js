const express = require('express');

const mysql = require('../../../config/Database.js');
const router = express.Router();


//add Note



router.put('/:theme/:message/:id', (req, res, next) => {
/*

    UPDATE add_note_view SET theme ="asd" ,message ="asd" where id = 78

    const user = [req.body.id, req.body.theme, req.body.message];
    const sql = "INSERT INTO add_note_view(login, theme,message) VALUES(?,?,?);";
*/
    mysql.query("UPDATE add_note_view SET theme = '" + req.params.theme + "', message ='"+ req.params.message+"' where id ="+req.params.id +"", function (err, result, fields) {
        if(!err){
            res.status(200).json({
                //  messageError: err.sqlMessage ,
                update:"Успешно",
            });
        }
    });


});

module.exports = router;