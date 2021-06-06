// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  let arr = [];
  let director = moviesArr.map((movies) => {
    arr.push(movies.director);
  });

  return [...new Set(arr)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  let count = 0;
  let dramaMovies = moviesArr.filter((movies) => {
    if (
      movies.genre.indexOf('Drama') !== -1 &&
      movies.director === 'Steven Spielberg'
    ) {
      count++;
    }
  });
  return count++;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  let avg = 0;
  let sum = moviesArr.reduce(function (soma, atual, index) {
    if (atual.score === '' || !atual.hasOwnProperty('score')) {
      atual.score = 0;
    }
    if (index === moviesArr.length - 1) {
      soma += atual.score;

      avg = soma / (index + 1);

      return Number(avg.toFixed(2));
    }

    return soma + atual.score;
  }, 0);

  return sum;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  let arr = [];
  let dramaMovies = moviesArr.filter((movies) => {
    if (movies.genre.indexOf('Drama') !== -1) {
      arr.push(movies);
    }
  });

  return scoresAverage(arr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let movialpha = moviesArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return movialpha;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  let arr1 = [];
  let novo = moviesArr.map((movies) => {
    arr1.push(movies.title);
  });

  let movialpha = arr1.sort((a, b) => {
    return a.localeCompare(b);
  });
  let arr2 = [];

  let novo2 = movialpha.map((movies, index) => {
    if (index < 20) {
      arr2.push(movies);
    }
  });

  return arr2;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  let arr1 = [];

  let novo = moviesArr.map((movies, index) => {
    let duration1 = movies.duration.toString();
    let passo1 = duration1.split('h');
    let passo2 = passo1[1].split('min');
    let num1 = Number(passo1[0]);
    let num2 = Number(passo2[0]);
    let horas = num1 * 60 + num2;
    arr1.push(movies);
    arr1[index].duration = horas;
  });
  return arr1;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
