const {
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
} = require('./consultations.js');

async function run(query) {
    try {
        switch (query) {
            case 'getTotalDvdCopies':
                const totalDvdCopies = await getTotalDvdCopies();
                console.log(`Total DVD copies: ${totalDvdCopies}`);
                break;
            case 'getOscarWinningActors':
                const oscarWinningActors = await getOscarWinningActors();
                console.log(`Oscar-winning actors: ${JSON.stringify(oscarWinningActors, null, 2)}`);
                break;
            case 'getTotalAwardsPerActor':
                const totalAwardsPerActor = await getTotalAwardsPerActor();
                console.log(`Total awards per actor: ${JSON.stringify(totalAwardsPerActor, null, 2)}`);
                break;
            case 'getActorsBornAfter1980':
                const actorsBornAfter1980 = await getActorsBornAfter1980();
                console.log(`Actors born after 1980: ${JSON.stringify(actorsBornAfter1980, null, 2)}`);
                break;
            case 'getActorWithMostAwards':
                const actorWithMostAwards = await getActorWithMostAwards();
                console.log(`Actor with most awards: ${JSON.stringify(actorWithMostAwards, null, 2)}`);
                break;
            case 'getDistinctMovieGenres':
                const distinctMovieGenres = await getDistinctMovieGenres();
                console.log(`Distinct movie genres: ${distinctMovieGenres}`);
                break;
            case 'getMoviesByActorId':
                const moviesByActorId = await getMoviesByActorId(1);
                console.log(`Movies by actor with ID 1: ${JSON.stringify(moviesByActorId, null, 2)}`);
                break;
            case 'getTotalDvdValue':
                const totalDvdValue = await getTotalDvdValue();
                console.log(`Total DVD value: ${totalDvdValue}`);
                break;
            case 'getTotalActors':
                const totalActors = await getTotalActors();
                console.log(`Total actors: ${totalActors}`);
                break;
            case 'getAverageActorAge':
                const averageActorAge = await getAverageActorAge();
                console.log(`Average actor age: ${averageActorAge}`);
                break;
            case 'getActorsWithInstagram':
                const actorsWithInstagram = await getActorsWithInstagram();
                console.log(`Actors with Instagram: ${JSON.stringify(actorsWithInstagram, null, 2)}`);
                break;
            case 'getMoviesWithPrincipalActors':
                const moviesWithPrincipalActors = await getMoviesWithPrincipalActors();
                console.log(`Movies with principal actors: ${JSON.stringify(moviesWithPrincipalActors, null, 2)}`);
                break;
            case 'getTotalAwards':
                const totalAwards = await getTotalAwards();
                console.log(`Total awards: ${totalAwards}`);
                break;
            case 'getBluRayMoviesByActor':
                const bluRayMoviesByActor = await getBluRayMoviesByActor(1);
                console.log(`Blu-ray movies by actor with ID 1: ${JSON.stringify(bluRayMoviesByActor, null, 2)}`);
                break;
            case 'getSciFiMoviesByActor':
                const sciFiMoviesByActor = await getSciFiMoviesByActor(3);
                console.log(`Sci-fi movies by actor with ID 3: ${JSON.stringify(sciFiMoviesByActor, null, 2)}`);
                break;
            case 'getMovieWithMostDvdCopies':
                const movieWithMostDvdCopies = await getMovieWithMostDvdCopies();
                console.log(`Movie with most DVD copies: ${JSON.stringify(movieWithMostDvdCopies, null, 2)}`);
                break;
            case 'getActorsWithAwardsAfter2015':
                const actorsWithAwardsAfter2015 = await getActorsWithAwardsAfter2015();
                console.log(`Actors with awards after 2015: ${JSON.stringify(actorsWithAwardsAfter2015, null, 2)}`);
                break;
            case 'getTotalBluRayValue':
                const totalBluRayValue = await getTotalBluRayValue();
                console.log(`Total Blu-ray value: ${totalBluRayValue}`);
                break;
            default:
                console.log('Invalid query');
        }
    } catch (err) {
        console.error('Error running main function:', err);
    }
}

module.exports = { run };