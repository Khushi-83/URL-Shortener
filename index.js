const express = require('express');
const {connectToMongoDB} = require('./connectDB');
const urlRoute = require('./routes/url');
const app = express();
const PORT = 9000;

connectToMongoDB("mongodb://127.0.0.1:27017//url-shortener")
.then(() => console.log("MongoDB Successfully Connected"))
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));