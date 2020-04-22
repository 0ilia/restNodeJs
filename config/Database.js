/*
var mysql = require('mysql2');

//local mysql db connection

let connection = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "",
    database: "notes"
});

console.log("connect User");
module.exports = connection;*/
const config = {
    username: "root",
    password: "",
    database: "notes",
    host: "localhost",
    dialect: "mysql" // Other options are postgres, sqlite, mariadb and mssql.
};

const Sequelize = require("sequelize");
module.exports = new  Sequelize(config);

const User = sequelize.define("user", {
    login: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }    ,
    cookie: {
        type: Sequelize.STRING,
    }
});

const Notes = sequelize.define("notes", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        foreignKey: true,
        type: Sequelize.STRING,
        allowNull: false
    },
    theme: {
        type: Sequelize.STRING,
    }    ,
    message: {
        type: Sequelize.STRING,
    },
    dateCreate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateUpdate: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
User.hasMany(Notes, {foreignKey: 'login'});

sequelize.sync().then(result => console.log("result")).catch(err => console.log(err));

/*User.create({
    name: "Tom",
    age: 35
}).then(res => {
    console.log(res);
}).catch(err => console.log(err));*/
//module.exports = connection;
