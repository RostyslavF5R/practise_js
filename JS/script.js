'use strict';

const numberOfFilms = +prompt("Кілько кін видів?", "25");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: {}
};

for (let i = 0; i < 2; i++) {
    const film = prompt("Якийсь фільм шариши", ""),
        rating = prompt("Оціни", "");

    if (film === null || rating === null || film === '' || rating === '' || film.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[film] = rating;
    }   
}

if (personalMovieDB.count < 10) {
    console.log("Мало кін бачив");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Рядовий глядач");
} else {
    console.log("Якийсь трохи кіноман");
}

console.log(personalMovieDB);


