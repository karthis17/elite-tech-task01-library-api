const express = require('express');
const bookRouter = require('./router/book.router.js');
const patronRouter = require('./router/patron.router.js');
const intersectionRouter = require('./router/intersection.router.js');
const userRouter = require('./router/user.router.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/books', bookRouter);
app.use('/api/patrons', patronRouter);
app.use('/api/intersections', intersectionRouter);
app.use('/api/users', userRouter);

app.listen(port, (req, res)=>{
    console.log(`listening on port ${port} http://localhost:${port}`);
});

