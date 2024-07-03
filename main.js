const { getTotalDvdCopies } = require('./peliculas.js');

async function run() {
    try {
        const totalDvdCopies = await getTotalDvdCopies();
        console.log(`Total DVD copies: ${totalDvdCopies}`);
    } catch (err) {
        console.error('Error running main function:', err);
    }
}

run().catch(console.dir);
