/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1)

// const ads = document.getElementsByClassName("promo__adv");
// ads[0].remove();

const ads = document.querySelectorAll(".promo__adv img");
console.log(ads);
ads.forEach(item => {
    item.remove();
});

// 2)

// const promoGenre = document.getElementsByClassName("promo__genre")[0];
// promoGenre.innerHTML = "Драма";

const genreChange = document.querySelectorAll(".promo__genre")[0];
console.log(genreChange);
genreChange.innerHTML = "Драма";

// 3)

const backGroundPictureChange = document.querySelectorAll(".promo__bg")[0];
backGroundPictureChange.style.backgroundImage = 'url(img/bg.jpg)';

// 4), 5)

const films = document.querySelector(".promo__interactive-list");
console.log(films);
films.innerHTML = "";

movieDB.movies.sort().forEach((film, i) => {
    films.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});