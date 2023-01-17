function loadDb (client) {
    const mongoose = require("mongoose");

    if (!client.env.DATABASE) return;
    mongoose.connect(client.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
        console.log('-> Connected to MongoDB.')
    });
}

module.exports = { loadDb };