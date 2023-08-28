const express = require("express");
const router = express.Router();
const app = express();
const path = require('path');

const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/"));
});

app.get('/', function (req, res) {
  res.sendFile(publicPath + 'index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});