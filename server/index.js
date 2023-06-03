const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Express Here!")
});

app.listen(7000, () => console.log("App is running on Port 7000"));