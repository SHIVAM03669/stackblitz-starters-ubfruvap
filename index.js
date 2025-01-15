const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Spiderman!", data: ["Man of spider", "Worship's iron man"] });
  } else {
    res.send({ message: "Welcome, Batman!", data: ["ruler of the Dark", "Richest man"] });
  }
});

app.listen(3000, () => console.log(`Server is runnning on local host http://localhost:${port}
`));