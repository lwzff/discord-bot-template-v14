const mongoose = require("mongoose");

module.exports = mongoose.model(
    "settings",
    new mongoose.Schema({
        guildId: String,
        logsChannelId: String,
    })
);