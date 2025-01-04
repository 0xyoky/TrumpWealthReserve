const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

// app.use(express.static(path.join(__dirname)));

// app.use(bodyParser.json());

// app.use(

//     bodyParser.urlencoded({

//         extended: true,

//     }),

// );

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", function (request, response) {

    response.sendFile(path.join(__dirname, "dist", "index.html"));

});

app.listen(port, () => {

    console.log("Server started on port " + port);

});
