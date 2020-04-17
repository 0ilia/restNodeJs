const express = require('express');

const mysql = require('../../config/Database.js');
const router = express.Router();


//getAll Notes
router.get('/', (req, res, next) => {



    mysql.query("SELECT login FROM add_note_view LIMIT 1;", function (err, result, fields) {
        if(!err){
            res.status(200).json({
                //  messageError: err.sqlMessage ,
                notes:result,
            });
        }

    });

});

module.exports = router;