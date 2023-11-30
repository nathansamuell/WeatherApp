const express = require('express'); //imports express app framework, more information can be found at https://github.com/expressjs/express
const { readFile } = require('fs').promises; //built in node module for interacting with the filesystem

const app = express();

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))