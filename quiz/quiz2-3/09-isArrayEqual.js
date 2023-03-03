function isArraysEqual(arrayA, arrayB) {
  for (let index = 0; index < arrayA.length; index++) {
    if (arrayA[index] === arrayB[index]) {
      return true;
    } else {
      return false;
    }
  }
}

const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
