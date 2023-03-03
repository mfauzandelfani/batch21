function maxWordLength(params) {
  var words = params.split(" ");
  var terbesar = 0;
  var tampung = [];
  for (let index = 0; index < words.length; index++) {
    tampung.push(words[index].length);
  }

  for (i = 0; i < words.length; i++) {
    if (tampung[i] > terbesar) {
      terbesar = tampung[i];
    }
  }
  for (let index = 0; index < words.length; index++) {
    if (terbesar == words[index].length) {
      console.log(words[index]);
    }
  }
}

maxWordLength("aku suka bootcamp sentul city"); //bootcamp
