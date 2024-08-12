const express = require('express');
const {connectToMongoDB} = require('./connectDB');
const urlRoute = require('./routes/url');
const app = express();
const port = 8001;

connectToMongoDB("mongodb://localhost:27017/url-shortener")
.then(() => console.log("MongoDB Successfully Connected"))
app.use("/url", urlRoute);

app.listen(port, () => console.log(`Server Started at PORT:${port}`));