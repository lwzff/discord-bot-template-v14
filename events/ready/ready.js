const { Client } = require("discord.js");

module.exports = {
    name: "ready",
    /**
     * @param { Client } client
     */
    async execute (client) {
        client.log.ready('Connected to Discord: ' + client.user.tag);
    }
}