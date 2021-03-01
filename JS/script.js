'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Кілько кін видів?", "25");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Кілько кін видів?", "25");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: {}
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt("Якийсь фільм шариши", ""),
            rating = prompt("Оціни", "");

        if (film === null || rating === null || film === '' || rating === '' || film.length > 50) {
            i--;
        } else {
            personalMovieDB.movies[film] = rating;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Мало кін бачив");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Рядовий глядач");
    } else {
        console.log("Якийсь трохи кіноман");
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat) console.log(personalMovieDB);
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const question = prompt(`Ваш улюлблений жанр ${i}`);
        //personalMovieDB.generes[i - 1] = prompt(`Ваш улюлблений жанр ${i}`);
        if (question === null || question === '' || !isNaN(question)) {
            i--;
        } else {
            personalMovieDB.generes[i - 1] = question;
        }
    }
}

writeYourGenres();
showMyDB();