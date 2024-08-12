const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({ //schema
    shortID:{
        type: String,
        required: true,
        unique: true,
    },
    redirectURL:{
        type: String,
        required: true,
    },
    visitHistory: [{ timpestamp: {type: Number}}],
    createdOn: {
        type: Date,
        default: Date.now,
    },
    timestamps: true
});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;