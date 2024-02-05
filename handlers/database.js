function loadDb (client) {
    const mongoose = require("mongoose");

    if (!client.env.DATABASE) {
        console.log('-> No MongoDB database URL provided in .env file, not using MongoDB.');
        return;
    }
    
    mongoose.set('strictQuery', true);
    mongoose.connect(client.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
        console.log('-> Connected to MongoDB.');
    });
}

module.exports = { loadDb };