"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const env_1 = require("./env");
const app = (0, express_1.default)();
(0, dbConnect_1.default)();
app.listen(env_1.env.PORT, () => {
    console.log("Server is runing...");
});
