"use strict";
const Seq = require('sequelize');
const seq = require('../util/database');
const Detail = seq.define('detail', {
    id: {
        type: Seq.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Seq.STRING,
        allowNull: false,
    },
    email: { type: Seq.STRING,
        allowNull: false,
    },
    message: {
        type: Seq.STRING,
        allowNull: false,
    },
});
module.exports = Detail;
