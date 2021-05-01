'use strict';
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilm;
        while(numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
            numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        this.count = numberOfFilm;
    },
    rememberMyFilms: function() {
        for(let i = 0; i< this.count; i++)
        {
            let a = prompt(`Введите название ${i+1} фильма`,'');
            while (a.length===0 || a.length>50 || a===null){
                console.log('error in film name lenght');
                a = prompt(`Введите название ${i+1} фильма`,'');
            }
            const b = prompt('На сколько вы оцените его?');
            this.movies[a] = b;
        }
    },
    detectPersonalLevel: function() {
        if(this.count<10) {
            console.log('Просмотрено довольно мало фильмов');
        }
        else if (this.count>10 && this.count<30) {
            console.log('Вы классический зритель');
        }
        else if (this.count>30) {
            console.log('Вы киноман');
        }
        else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres:function(genreDB) {
        for(let i = 0; i < 3; i++) {
            let genrePrompt = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if(genrePrompt === null || genrePrompt === ''){
                console.log('Неправильные данные');
                i--;
            }
            else {
                this.genres.push(genrePrompt);
            }
        }
        genreDB.forEach((element,i)=> {
            console.log(`Любимый жанр ${i+1} - это ${element}`);
        });
    },
    writeYourGenresInOneLine:function(){
        let genresPrompt = prompt('Введите ваши любимые жанры через запятую').toLowerCase();
        if(genrePrompt === null || genrePrompt === ''){
            console.log('Неправильные данные');
            i--;
        }
        else {
            this.genres = genresPrompt.split(', ');
            this.genres.sort();
        }
    },
    toggleVisibleMyDB: function() {
        if(!this.privat) {
            this.privat = true;
        }
        else if(this.privat) {
            this.privat = false;
        }
    }
}
//получение всех значений
//console.log(Object.keys(personalMovieDB));



