function isCharsUnique(string) {
  let sortedArr = string.split("").sort();
  for (let [i, char] of sortedArr.entries()) {
    if (char === sortedArr[i + 1]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
