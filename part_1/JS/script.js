'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Кілько кін видів?", "25");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Кілько кін видів?", "25");
        }
        // this.count = numberOfFilms;
        // return this.count;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const film = prompt("Якийсь фільм шариши", ""),
                rating = prompt("Оціни", "");

            if (film === null || rating === null || film === '' || rating === '' || film.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[film] = rating;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Мало кін бачив");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Рядовий глядач");
        } else {
            console.log("Якийсь трохи кіноман");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // const answer = prompt(`Ваш улюлблений жанр ${i}`);
            // //personalMovieDB.generes[i - 1] = prompt(`Ваш улюлблений жанр ${i}`);
            // if (answer === null || answer === '' || !isNaN(answer)) {
            //     i--;
            // } else {
            //     personalMovieDB.generes[i - 1] = answer;
            // }
            const answer = prompt("Ваші улюлблені жанри через кому").toLowerCase();
            if (answer === null || answer === '' || !isNaN(answer)) {
                i--;
            } else {
                personalMovieDB.generes = answer.split(', ').sort();
            }

        }
        personalMovieDB.generes.forEach(function (item, index) {
            console.log(`Ваш улюблений жанр ${index + 1} - це ${item}`);
        });
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        console.log(personalMovieDB.privat);
    }

};
