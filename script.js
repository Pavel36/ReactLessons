'use strict';

let numberOfFilm;
function start() {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for(let i = 0; i< personalMovieDB.count; i++)
    {
        let a = prompt(`Введите название ${i+1} фильма`,'');
        while (a.length===0 || a.length>50 || a===null){
            console.log('error in film name lenght');
            a = prompt(`Введите название ${i+1} фильма`,'');
        }
        const b = prompt('На сколько вы оцените его?');
        personalMovieDB.movies[a] = b;
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if(numberOfFilm<10) {
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (numberOfFilm>10 && numberOfFilm<30) {
        console.log('Вы классический зритель');
    }
    else if (numberOfFilm>30) {
        console.log('Вы киноман');
    }
    else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(genreDB) {
    for(let i = 0; i < 3; i++) {
        genreDB.push(prompt(`Ваш любимый жанр под номером ${i+1}`));
    }
}
writeYourGenres(personalMovieDB.genres);



