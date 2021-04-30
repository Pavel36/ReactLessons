const numberOfFilm = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const a = prompt('Один из последних просмотренных фильмов',''),
      b = prompt('На сколько вы оцените его?');
personalMovieDB.movies[a] = b;
console.log(personalMovieDB);



