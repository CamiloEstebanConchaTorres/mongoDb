const connectToDatabase = require('./conection');

async function getTotalDvdCopies() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.aggregate([
            { $unwind: "$format" },
            { $match: { "format.name": "dvd" } },
            { $group: { _id: null, totalCopies: { $sum: "$format.copies" } } },
            { $project: { _id: 0, totalCopies: 1 } }
        ]).toArray();
        return result[0].totalCopies;
    } finally {
        await client.close();
    }
}

async function getOscarWinningActors() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.find({ "awards.name": "Oscar Award" }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getTotalAwardsPerActor() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.aggregate([
            { $project: { full_name: 1, totalAwards: { $size: "$awards" } } }
        ]).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getActorsBornAfter1980() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.find({ date_of_birth: { $gt: new Date("1980-01-01") } }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getActorWithMostAwards() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.aggregate([
            { $project: { full_name: 1, totalAwards: { $size: "$awards" } } },
            { $sort: { totalAwards: -1 } },
            { $limit: 1 }
        ]).toArray();
        return result[0];
    } finally {
        await client.close();
    }
}

async function getDistinctMovieGenres() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.distinct("genre");
        return result;
    } finally {
        await client.close();
    }
}

async function getMoviesByActorId(actorId) {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.find({ "character.id_actor": actorId }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getTotalDvdValue() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.aggregate([
            { $unwind: "$format" },
            { $match: { "format.name": "dvd" } },
            { $group: { _id: null, totalValue: { $sum: { $multiply: ["$format.copies", "$format.value"] } } } },
            { $project: { _id: 0, totalValue: 1 } }
        ]).toArray();
        return result[0].totalValue;
    } finally {
        await client.close();
    }
}

async function getTotalActors() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.countDocuments();
        return result;
    } finally {
        await client.close();
    }
}

async function getAverageActorAge() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.aggregate([
            { $project: { age: { $subtract: [new Date().getFullYear(), { $year: "$date_of_birth" }] } } },
            { $group: { _id: null, avgAge: { $avg: "$age" } } },
            { $project: { _id: 0, avgAge: 1 } }
        ]).toArray();
        return result[0].avgAge;
    } finally {
        await client.close();
    }
}

async function getActorsWithInstagram() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.find({ "social_media.instagram": { $exists: true, $ne: "" } }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getMoviesWithPrincipalActors() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.find({ "character.rol": "principal" }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getTotalAwards() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.aggregate([
            { $unwind: "$awards" },
            { $count: "totalAwards" }
        ]).toArray();
        return result[0].totalAwards;
    } finally {
        await client.close();
    }
}

async function getBluRayMoviesByActor(actorId) {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.find({ "character.id_actor": actorId, "format.name": "Bluray" }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getSciFiMoviesByActor(actorId) {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.find({ "genre": "Ciencia Ficción", "character.id_actor": actorId }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getMovieWithMostDvdCopies() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.aggregate([
            { $unwind: "$format" },
            { $match: { "format.name": "dvd" } },
            { $sort: { "format.copies": -1 } },
            { $limit: 1 }
        ]).toArray();
        return result[0];
    } finally {
        await client.close();
    }
}

async function getActorsWithAwardsAfter2015() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('actors');
        const result = await collection.find({ "awards.year": { $gt: 2015 } }).toArray();
        return result;
    } finally {
        await client.close();
    }
}

async function getTotalBluRayValue() {
    const client = await connectToDatabase();
    try {
        const database = client.db('blockbuster');
        const collection = database.collection('peliculas');
        const result = await collection.aggregate([
            { $unwind: "$format" },
            { $match: { "format.name": "Bluray" } },
            { $group: { _id: null, totalValue: { $sum: { $multiply: ["$format.copies", "$format.value"] } } } },
            { $project: { _id: 0, totalValue: 1 } }
        ]).toArray();
        return result[0].totalValue;
    } finally {
        await client.close();
    }
}

module.exports = {
    getTotalDvdCopies,
    getOscarWinningActors,
    getTotalAwardsPerActor,
    getActorsBornAfter1980,
    getActorWithMostAwards,
    getDistinctMovieGenres,
    getMoviesByActorId,
    getTotalDvdValue,
    getTotalActors,
    getAverageActorAge,
    getActorsWithInstagram,
    getMoviesWithPrincipalActors,
    getTotalAwards,
    getBluRayMoviesByActor,
    getSciFiMoviesByActor,
    getMovieWithMostDvdCopies,
    getActorsWithAwardsAfter2015,
    getTotalBluRayValue
};
