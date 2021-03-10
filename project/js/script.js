'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ads = document.querySelectorAll(".promo__adv img"),
        genreChange = document.querySelectorAll(".promo__genre")[0],
        backGroundPictureChange = document.querySelectorAll(".promo__bg")[0],
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector('form.add'),
        inputFilm = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = inputFilm.value,
            favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
                // newFim = newFilm.slice(0,22) + '...';
            }

            if (favorite) {
                console.log("Adding favorite movie");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });
    
    const deleteAds = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genreChange.innerHTML = "Драма";
        backGroundPictureChange.style.backgroundImage = 'url(img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.sort().forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAds(ads);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});
