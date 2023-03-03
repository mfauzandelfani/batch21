const checkPermute = function (str1, str2) {
  var a = [];
  var b = [];
  var c = "";
  var d = "";

  for (let index = 0; index < str1.length; index++) {
    a.push(str1.charAt(index));
    b.push(str2.charAt(index));
  }
  c = a.sort();
  d = b.sort();
  if (
    c[0] === d[0] &&
    c[1] === d[1] &&
    c[2] === d[2] &&
    str1.length === str2.length
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;

//true;
