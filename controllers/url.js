const shortid = require("shortid");
const URL = require('..models/url');
async function handleGenerateNewShortURL(res, req){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"})
    const shortID = shortid();
    
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitedHistory: [],
    });
    return res.status(200).json({shortID: shortID});

    }

module.exports = {
    handleGenerateNewShortURL,
}