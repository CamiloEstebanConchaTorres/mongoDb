const connectToDatabase = require('./conection.js');



//
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
    } catch (err) {
        console.error('Failed to get total DVD copies:', err);
        throw err;
    } finally {
        await client.close();
    }
}
module.exports = { getTotalDvdCopies };
