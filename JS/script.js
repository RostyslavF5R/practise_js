'use strict';

const numberOfFilms = +prompt("Кілько кін видів?", "25");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: {}
};

const film = prompt("Якийсь фільм шариши", ""),
    film1 = prompt("Якийсь фільм шариши", ""),
    rating = prompt("Оціни", "7.1"),
    rating1 = prompt("Оціни", "7.1");

personalMovieDB.movies[film] = rating;
personalMovieDB.movies[film1] = rating1;

console.log(personalMovieDB);
