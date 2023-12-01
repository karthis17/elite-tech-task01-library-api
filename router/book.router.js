const router = require('express').Router();
const { db, sql } = require('../sql._commads.js');

router.get('/', async (req, res)=> {

    try {
        const result = await new Promise((resolve, reject) => {

            db.all(sql.SELECT_BOOKS, [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
        res.send(result);
    } catch (error) {
        console.error('Error fetch book:', error);
        res.status(422).send({
            success: false,
            message: "Error while fetch data"
        });
    }

});

router.get('/searchBook/:input', async (req, res)=>{

    try {
        const result = await new Promise((resolve, reject) => {
            let searchParams = `%${req.params.input}%`;

            db.all(sql.SELECT_BOOK_WITH_LIKEOP, [searchParams, searchParams, searchParams], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
        res.send(result);
    } catch (err_1) {
        res.status(404).send({
            success: false,
            menubar: err_1.message
        });
    }
});

router.get('/searchBook/title/:input', async (req, res)=>{

    try {
        const result = await new Promise((resolve, reject) => {
            db.get(sql.SELECT_BOOK_BY_TITEL, [req.params.input], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
        res.send(result);
    } catch (err_1) {
        res.status(404).send({
            success: false,
            menubar: err_1.message
        });
    }
});

router.post('/add/new', async function(req, res) {

    let book = req.body;

    try {
        const id = await new Promise((resolve, reject) => {
            db.run(sql.INSERT_BOOK, [book.title, book.author, book.ISBN, book.available_copies], function (err) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(this.lastID); // Get the last inserted book ID
                }

            });
        });
        res.send({
            success: true,
            message: "Book inserted successfully.",
            data: id
        });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({
            success: false,
            message: "Error while inserting book."
        });
    }

});

router.put('/update', async (req, res) => {

    let book = req.body
    try {
        await new Promise((resolve, reject) => {

            db.run(sql.UPDATE_BOOK, [book.title, book.author, book.ISBN, book.available_copies, book.id], (err, rows) => {
                if (err) resolve(false);
                else resolve(true);
            });
        });
        res.send({
            success: true,
            message: "Book updated successfully."
        });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({
            success: false,
            message: "Error while updating book."
        });
    }

});

router.delete('/remove/:title', async (req, res) => {

    try {
        const result = await new Promise((resolve, reject) => {
            db.run(sql.DELETE_BOOK, [req.params.title], (err, rows) => {
                if (err) {
                    reject(false);
                } else {
                    resolve(true);
                }
            });
        });
        res.send({
            success: true,
            message: "Book deleted successfully."
        });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({
            success: false,
            message: "Error deleting book."
        });
    }

});


module.exports = router;
