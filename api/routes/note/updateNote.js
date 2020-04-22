const express = require('express');

const mysql = require('../../../config/Database.js');
const router = express.Router();


//add Note



router.put('/:id', (req, res, next) => {

     let timeNow = Date.now();

     mysql.query("UPDATE add_note_view SET theme = '" + req.body.theme + "', message ='"+ req.body.message+"', dateUpdate = "+ timeNow+" where id ="+req.params.id +"", function (err, result, fields) {
        if(!err){
            res.status(200).json({
                //  messageError: err.sqlMessage ,
                update:"Успешно",
            });
        }
    });


});

module.exports = router;