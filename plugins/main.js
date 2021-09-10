const express = require("express");
const LZString = require("lz-string");

const app = express();

const encode = (str = "") => LZString.compressToEncodedURIComponent(str);
const decode = (str = "") => LZString.decompressFromEncodedURIComponent(str);

const data = JSON.stringify({
    test : "hey hey hey",
    data : "hooya",
});

app.get("/", (req, res) => {
    console.log("data", data);
    res.redirect(`http://localhost:5000/decode?note=${encode(data)}`);
});

app.get("/decode", (req, res) => {
    const {
        note: encoded = "",
    } = req.query;

    console.log("note", encoded);
    console.log("decoded", decode(encoded));
    res.send(decode(encoded));
});

app.listen(5000, () => {
    console.log("we runnin up in here");
    console.log("catch us at http://localhost:5000");
});
