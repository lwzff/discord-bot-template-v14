function loadCommands (client) {
    const fs = require("fs");

    let commandsArray = [];
    let developerArray = [];

    const folders = fs.readdirSync("./commands");

    for (const folder of folders) {
        const files = fs.readdirSync(`./commands/${folder}`).filter( (file) => file.endsWith(".js"));

        for (const file of files) {
            const command = require(`../commands/${folder}/${file}`);

            client.commands.set(command.data.name, command);

            if (command.developer) developerArray.push(command.data.toJSON());
            else commandsArray.push(command.data.toJSON());

            client.log.command(`Successfully registered command ${command.data.name}`)
            continue;
        }
    }

    // Set basic commands on every guild the bot is on.
    client.application.commands.set(commandsArray);

    // In case needed, uncomment this line to delete all your bot commands (on every guild the bot is on).
    //client.application.commands.delete();

    // Set developers commands only on developer guild.
    const developerGuild = client.guilds.cache.get(client?.config?.developerGuild?.id);
    if (developerGuild) developerGuild.commands.set(developerArray);

    return;
}

module.exports = { loadCommands };