
const Actor = require("./Actor");
const Director = require("./Director");
const Genre=require("./Genre");
const Movie = require("./Movie");
Movie.belongsToMany(Genre,{through:"GenreMovies"})
Movie.belongsToMany(Director,{through:"DirectorMovies"})
Movie.belongsToMany(Actor,{through:"ActorsMovies"})