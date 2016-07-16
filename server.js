express = require("express");
app = express();

app.use(express.static("pub"));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.listen(80);
console.log("Server is up...");