const express = require('express');
const {connectToMongoDB} = require("./connectDB");
const urlRoute = require('./routes/url');
const path = require('path')
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/:shortID', async(req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpadte({
        shortId,
    },
    {
        $push:{
            visitHistory:{
                timestamp: Date.now(),
            }
        },
    }
    );
    res.redirect(entry.redirectURL)
    })

app.set("view engine", "ejs");  
app.set("views", path.resolve("./views")); 

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortener")
.then(() => console.log("MongoDB Successfully Connected"))
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));