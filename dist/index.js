"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = config_1.configENV.port || 5000;
app.get('/', (req, res) => {
    console.log('ok');
    return res.json(1);
});
app.get('/crash', (req, res) => {
    console.log('crash');
    process.exit(1);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
