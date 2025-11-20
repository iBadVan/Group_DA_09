// routes/books.js
const express = require('express');
const appRouter = express.Router();
const con = require('../config/connection');

const bodyParser = require('body-parser');
appRouter.use(bodyParser.urlencoded({ extended: true }));
appRouter.use(bodyParser.json());

// Stored Procedures
let sql_all = 'CALL usp_listar_books()';
let sql_insert = 'CALL usp_insertar_books(?,?,?)';

// GET: listar libros
appRouter.get('/books', (req, res) => {
    con.query(sql_all, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// POST: insertar libro
appRouter.post('/books', (req, res) => {
    const book = {
        title: req.body.book_title,
        author: req.body.book_author,
        publicado: req.body.book_published
    };

    con.query(sql_insert, [book.title, book.author, book.publicado], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

module.exports = appRouter;
