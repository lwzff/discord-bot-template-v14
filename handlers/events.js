function loadEvents (client) {
    const fs = require("fs");
    const folders = fs.readdirSync("./events");

    for (const folder of folders) {
        const files = fs.readdirSync(`./events/${folder}`).filter( (file) => file.endsWith(".js"));
        
        for (const file of files) {
            const event = require(`../events/${folder}/${file}`);
            
            client.on(event.name, (...args) => event.execute(...args, client));

            client.log.event(`Successfully registered event ${event.name}.js`)
            continue;
        }
    }

    return;
}

module.exports = { loadEvents };