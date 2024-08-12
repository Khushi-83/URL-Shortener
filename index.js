const express = require("express");
const {connectToMongoDB} = require('./connect')
const urlRoute = require
const app = express('./routes/url');
const port = 8001;

connectToMongoDB("mongodb://localhost:27017/url-shortener")
.then(() => console.log("MongoDB Successfully Connected"))
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))