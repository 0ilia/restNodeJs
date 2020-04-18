
const express = require('express');

const mysql = require('../../../config/Database.js');
const router = express.Router();


//add Note



router.delete('/:id', (req, res, next) => {
    /*

        UPDATE add_note_view SET theme ="asd" ,message ="asd" where id = 78

        const user = [req.body.id, req.body.theme, req.body.message];
        const sql = "INSERT INTO add_note_view(login, theme,message) VALUES(?,?,?);";
    */
//    console.log("DELETE FROM add_note_view where id = " + req.body.id + ";");

    mysql.query("DELETE FROM add_note_view where id = " + req.params.id+ ";", function (err, result, fields) {
        if(!err){
            res.status(200).json({
                //  messageError: err.sqlMessage ,
                delete:"Заметка удалена",
            });
        }
    });


});

module.exports = router;