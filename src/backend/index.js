const apiAdress = "http://localhost:3001";
const searchAdress = apiAdress + "/home/searchMovies";
const getRandomMoviesAdress = apiAdress + "/home/geRandomMovies";
const getMovieById = apiAdress + "/movie";
const getDirectorById = apiAdress + "/director";
const getActorById = apiAdress + "/actor";



export const routes = {
    apiAdress,
    searchAdress,
    getRandomMoviesAdress,
    getMovieById,
    getDirectorById,
    getActorById
}