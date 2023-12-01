const sqlite3 = require('sqlite3').verbose();


const sql = {
    SELECT_USERS: 'SELECT * FROM user',
    INSERT_USER: 'INSERT INTO user(username, password) VALUES(?, ?)',
    SELECT_USER: 'SELECT * FROM user WHERE username = ? AND password = ?',

    // BOOK TABLE COMMANDS
    INSERT_BOOK: 'INSERT INTO book(title, author, ISBN, available_copies) VALUES(?, ?, ?, ?)',
    SELECT_BOOKS: 'SELECT * FROM book ORDER BY title',
    SELECT_BOOK_BY_TITEL: 'SELECT * FROM book WHERE title = ?',
    SELECT_BOOK_WITH_LIKEOP: 'SELECT * FROM book WHERE title LIKE ? OR author LIKE ? OR ISBN LIKE ?',
    UPDATE_BOOK: 'UPDATE book SET title = ?, author = ?, ISBN = ?, available_copies=? WHERE id = ?',
    DELETE_BOOK: 'DELETE FROM book WHERE title = ?',

    //PATRON TABLE COMMANDS
    INSERT_PATRON: 'INSERT INTO patrons(name, contact_details) VALUES(?, ?)',
    SELECT_PATRONS: 'SELECT * FROM patrons ORDER BY name',
    SELECT_PATRONS_BY_ID_NAME: 'SELECT * FROM patrons WHERE id = ? OR name = ?',

    //INTERSECTION TABLE COMMANDS
    INSERT_BOOK_PATRON_INTERSECTION: 'INSERT INTO intersection (book_id, patron_id) VALUES (?, ?)',
    SELECT_PATRON_ID_INTERSECTION: 'SELECT patron_id FROM intersection WHERE book_id = ?',
    SELECT_INTERSECTION: 'SELECT * FROM intersection'

};

const db = new sqlite3.Database("./instance/library.db", sqlite3.OPEN_READWRITE, (err)=>{
    if (err) console.error(err.message);
});

module.exports = { sql, db };