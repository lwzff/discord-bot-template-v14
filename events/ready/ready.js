const { Client } = require("discord.js");

module.exports = {
    name: "ready",
    /**
     * @param { Client } client
     */
    async execute (client) {
        console.log('-> Connected to Discord: ' + client.user.tag);
    }
}