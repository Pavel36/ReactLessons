const numberOfFilm = prompt('Сколько фильмов вы уже посмотрели?', '');
if(numberOfFilm<10) {
    alert('Просмотрено довольно мало фильмов');
}
else if (numberOfFilm>10 && numberOfFilm<30) {
    alert('Вы классический зритель');
}
else if (numberOfFilm>30) {
    alert('Вы киноман');
}
else {
    alert('Произошла ошибка');
}
const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
for(let i = 0; i< personalMovieDB.count; i++)
{
    let a = prompt(`Введите название ${i+1} фильма`,'');
    while (a.length===0 || a.length>50){
        a = prompt(`Введите название ${i+1} фильма`,'');
    }
    const b = prompt('На сколько вы оцените его?');
    personalMovieDB.movies[a] = b;
}
// let i = 0;
// while(i<personalMovieDB.count)
// {
//     let a = prompt(`Введите название ${i+1} фильма`,'');
//     while (a.length===0 || a.length>50){
//         a = prompt(`Введите название ${i+1} фильма`,'');
//     }
//     const b = prompt('На сколько вы оцените его?');
//     personalMovieDB.movies[a] = b;
//     i++;
// }
// do {
//     let a = prompt(`Введите название ${i+1} фильма`,'');
//     while (a.length===0 || a.length>50){
//         a = prompt(`Введите название ${i+1} фильма`,'');
//     }
//     const b = prompt('На сколько вы оцените его?');
//     personalMovieDB.movies[a] = b;
//     i++;
// } while(i<personalMovieDB.count);

console.log(personalMovieDB);



