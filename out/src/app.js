"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 3000;
// Crud
app.post('/', (request, result) => {
    result.send("Create: Received POSTr");
});
// cRud
app.get('/', (request, result) => {
    result.send("Read: Hello, World!");
});
// crUd
app.put("/", (request, result) => {
    result.send("Update: Received PUT request");
});
// cruD
app.delete("/", (request, result) => {
    result.send("Delete: Received request for DELETE");
});
// Serve static
app.use(express_1.default.static('public'));
// Serve aliased static
app.use('/static', express_1.default.static('public'));
// Parameters
app.get('/users/:userId/books/:bookId', (request, result) => {
    result.send(request.params);
});
// 404
app.use((request, result, next) => {
    result.status(404).send("Yeah, no. Something is missing.");
});
// Error handler
app.use((error, request, result, next) => {
    console.error(error.stack);
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
