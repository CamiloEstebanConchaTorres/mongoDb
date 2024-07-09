const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://camiloestebanconchatorres:RqAkh4dklHF0KmSm@cluster0.bb3txuo.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected successfully to database");
        return client;
    } catch (err) {
        console.error('Connection to database failed:', err);
        throw err;
    }
}

module.exports = connectToDatabase;
