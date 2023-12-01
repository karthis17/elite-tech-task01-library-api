const router = require('express').Router();
const { db, sql } = require('../sql._commads.js');

router.get('/', async (req,res)=> {

    try {
        const result = await new Promise((resolve, reject) => {

            db.all(sql.SELECT_INTERSECTION, [], (err, rows) => {
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

router.get('/get-patronId/by-BookId/:input', async (req, res)=>{

    try {
        const result = await new Promise((resolve, reject) => {
            db.get(sql.SELECT_PATRON_ID_INTERSECTION, [req.params.input], (err, rows) => {
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

router.post('/add/new', async (req, res) => {
    let intersection = req.body;

    try {
        const id = await new Promise((resolve, reject) => {

            db.run(sql.INSERT_BOOK_PATRON_INTERSECTION, [intersection.book_id, intersection.patron_id], function (err) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(this.lastID); // Get the last inserted patron ID
                }

            });
        });
        res.send({
            success: true,
            message: "inserted successfully.",
            data: id
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({
            success: false,
            message: "Error while inserting"
        });
    }
});

module.exports = router;