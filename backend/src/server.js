const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://Omni:1234@cluster0-rvxaz.mongodb.net/airc&c?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)