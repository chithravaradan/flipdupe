const db = require("../connector");
const sequelize =require('sequelize');

module.exports =db.define(
    "Cart",
    {
        "user_id":{
            type: sequelize.DOUBLE
        },
        "product_id":{
            type:sequelize.DOUBLE
        }
    }
);