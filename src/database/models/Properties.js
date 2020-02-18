const db = require("../connector");
const sequelize =require('sequelize');

module.exports = db.define(
    "Properties",
    {
        "color":{
            type:sequelize.STRING
        },
        "weight":{
            type:sequelize.STRING
        }

    }
);