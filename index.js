const express = require('express');
const {connectToMongoDB} = require("./connectDB");
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const path = require('path')
const app = express();
const PORT = 3000;

app.get('/:shortID', async(req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID,
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

app.use(express.json());    

app.set("view engine", "ejs");  
app.set("views", path.resolve("./views")); 

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render("home",{
        urls: allUrls,
        name: 'Khus'
});
});

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortener")
.then(() => console.log("MongoDB Successfully Connected"))
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));