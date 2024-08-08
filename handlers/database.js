function loadDb (client) {
    const mongoose = require("mongoose");

    if (!process.env.DATABASE) return;
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DATABASE).then( () => {
        client.log.database('Connected to MongoDB')
    });
}

module.exports = { loadDb };