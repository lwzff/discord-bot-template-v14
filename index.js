const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const { Logger } = require("term-logger");

// Define your client with needed intents.
// List of all Discord intents -> https://discord.com/developers/docs/topics/gateway#list-of-intents
// Note: You can write "intents: 32767" to add all Discord' intents if you don't want to write them all.

const client = new Client(
    { 
        intents: [ 
            GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMembers, 
            GatewayIntentBits.GuildBans, 
            GatewayIntentBits.GuildEmojisAndStickers, 
            GatewayIntentBits.GuildScheduledEvents,
            GatewayIntentBits.GuildIntegrations, 
            GatewayIntentBits.GuildWebhooks, 
            GatewayIntentBits.GuildInvites, 
            GatewayIntentBits.GuildVoiceStates, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.GuildMessageReactions, 
            GatewayIntentBits.GuildMessageTyping, 
            GatewayIntentBits.DirectMessages, 
            GatewayIntentBits.DirectMessageReactions, 
            GatewayIntentBits.DirectMessageTyping, 
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMessagePolls
        ],
        
        partials: [
            Partials.User,
            Partials.Channel,
            Partials.Message,
            Partials.GuildMember,
            Partials.Reaction,
            Partials.GuildScheduledEvent,
            Partials.ThreadMember
        ]
    }
);

// Request and import env configuration.
require("dotenv").config();

// Get the handlers.
const { loadEvents } = require("./handlers/events");
const { loadCommands } = require("./handlers/commands");
const { loadDb } = require("./handlers/database");

// Global variables and classes.
client.commands = new Collection();
client.config = require("./config.json");
client.models = new Collection();
client.log = Logger;

// Crash handling system.
process.on('unhandledRejection', async (reason, promise) => {
    console.log('[Unhandled Rejection]  :: [Promise] ', promise, ' :: [Reason] ', reason);
});

process.on('uncaughtException', (err) => {
    console.log('[Uncaught Exception] :: [Reason] ', err);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[Uncaught Exception Monitor] :: [Reason] ', err, origin);
});

// Client login
client.login(process.env.BOT_TOKEN).then( () => {
    loadEvents(client);
    loadCommands(client);
    loadDb(client);
});
