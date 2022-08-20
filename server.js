const express = require("express");
const cors = require("cors");
const compress = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express();
const jsonData = require("./data.json");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the world" });
});

app.get("/data", (req, res) => {
    res.json({ message: "success", data: jsonData });
});

app.listen(PORT, () => {
    console.log("Server is running at port: ", PORT);
});
