const express = require('express');
const app = express();
app.use(express.json());

const listToDo = require('../routes/listToDo');

const errorHandler = require('../middleware/errorHandler');

app.use('/api/listToDo', listToDo);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
