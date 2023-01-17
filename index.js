const { Client, Collection } = require("discord.js");

// Define your client with needed intents.
// List of all Discord intents -> https://discord.com/developers/docs/topics/gateway#list-of-intents
// Note: You can write "intents: 32767" to add all Discord' intents if you don't want to write them all.

const client = new Client({ intents: [
    "Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites",
    "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages",
    "DirectMessageReactions", "DirectMessageTyping", "MessageContent", "GuildScheduledEvents" ] 
});

// Request and import env configuration.
require("dotenv").config();

// Get the handlers.
const { loadEvents } = require("./handlers/events");
const { loadCommands } = require("./handlers/commands");
const { loadDb } = require("./handlers/database");

// Global variables and classes.
client.commands = new Collection();
client.config = require("./config.json");
client.env = process.env;

client.login(process.env.BOT_TOKEN).then( () => {
    loadEvents(client);
    loadCommands(client);
    loadDb(client);
});
