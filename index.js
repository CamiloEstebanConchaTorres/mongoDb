const {MongoClient} = require('mongodb');

const uri = ('mongodb+srv://camiloestebanconchatorres:RqAkh4dklHF0KmSm@cluster0.bb3txuo.mongodb.net/')

const client = new MongoClient(uri,{useNewUrlParser: true, useUnifiedTopology: true});

async function run() {
    try {
        await client.connect();
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const documentos = await collection.find({}).toArray();
        console.log(documentos);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);