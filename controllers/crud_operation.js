"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotnev = require('dotenv').config();
const path = require('path');
const Details = require("../model/detail");
exports.addDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        console.log(name, email, message);
        if (!email) {
            throw new Error('Email is mandatory !');
        }
        const data = yield Details.create({
            name: name,
            email: email,
            message: message
        });
        res.status(201).json({ data });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
});
exports.getDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let detail = yield Details.findAll();
        res.status(200).json({ details: detail });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.deleteDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = Details.findAll({ where: { id: id } });
        if (!user) {
            console.log('This user does not exist.');
            return res.sendStatus(400);
        }
        yield Details.destroy({ where: { id: id } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.editDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedname = req.body.name;
        const updatedemail = req.body.email;
        const updatedmessage = req.body.message;
        const id = req.params.id;
        console.log(id);
        let user = yield Details.update({
            name: updatedname,
            email: updatedemail,
            message: updatedmessage
        }, { where: { id: id } });
        console.log(user);
        res.status(201).json({ user });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
