const shortid = require("shortid");
const URL = require('../models/url');
async function handleGenerateNewShortURL(res, req){
    const body = req.body;
    if(!body.url) return res.json({error: "URL is required"})
    
    const shortID = shortid();
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitedHistory: [],
    });
    return res.status(200).json({id: shortID});

    }
async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const reesult = await URL.findOne({shortId});
    return res.json({totalClicks:result.visitHistory.length, 
        analytics:result.visitHistory,
    });
}  

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};