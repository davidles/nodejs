"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
// const port: string | number = process.env.PORT=> Error
const port = 8000;
// Define the first Route of APP
app.get('/', (req, res) => {
    res.send("Welcome to APP Express + TS + Swagger + Mongoose + Node js + Jest");
});
app.get('/hello', (req, res) => {
    res.send("Hello world");
});
app.listen(port, () => {
    console.log(`Listen port: ${port}`);
});
//# sourceMappingURL=index.js.map