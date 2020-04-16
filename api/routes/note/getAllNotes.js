const express = require('express');

const mysql = require('../../../config/Database.js');
const router = express.Router();


//getAll Notes
router.get('/:login', (req, res, next) => {



    mysql.query("SELECT theme, message  FROM add_note_view where login = '" + req.params.login + "'", function (err, result, fields) {
      if(!err){
          res.status(200).json({
              //  messageError: err.sqlMessage ,
              notes:result,
          });
      }

    });

});

module.exports = router;