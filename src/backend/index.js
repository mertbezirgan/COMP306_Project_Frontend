const apiAdress = "http://localhost:3001";
const searchAdress = apiAdress + "/home/searchMovies";
const getRandomMoviesAdress = apiAdress + "/home/getRandomMovies";
const getGenres = apiAdress + "/home/getGenres"
const getMovieById = apiAdress + "/movie";
const getDirectorById = apiAdress + "/director";
const getActorById = apiAdress + "/actor";



export const routes = {
    apiAdress,
    searchAdress,
    getGenres,
    getRandomMoviesAdress,
    getMovieById,
    getDirectorById,
    getActorById
}