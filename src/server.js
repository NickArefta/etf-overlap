const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(bodyParser.urlencoded({ extended: false }));

// First endpoint
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log("Server listening at port: 3000");
});

require("./routes/betashares.route")(app);
