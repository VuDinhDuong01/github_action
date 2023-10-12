"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configENV = void 0;
const dotenv_1 = require("dotenv");
const pathFile = `.env.${process.env.NODE_ENV}`;
(0, dotenv_1.config)({
    path: pathFile,
});
exports.configENV = {
    port: process.env.PORT
};
