"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const controller = require('../controllers/crud_operation');
router.post('/add-detail', controller.addDetails);
router.get('/get-detail', controller.getDetails);
router.delete('/delete-detail/:id', controller.deleteDetails);
router.post('/edit-detail/:id', controller.editDetails);
exports.default = router;
