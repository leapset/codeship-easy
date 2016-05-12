const path = require('path');
const port = (process.env.PORT || 8080);
const express = require('express');
const app = express();

const indexPath = path.join(__dirname, './public/index.html');

app.use('/dist', express.static(path.join(__dirname, './dist')));
app.get('/', function (_, res) { res.sendFile(indexPath) });

app.listen(port);
console.log(`Listening at http://localhost:${port}`)
