const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(express.json())
const port = 2000;
require('./routes/postRoutes')(app);

app.listen(port, (error) => {
    error ? console.log(error) : console.log('listening port ' + port);
});

