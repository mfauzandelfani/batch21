const object = {
  firstname: "John",
  Lastname: "Doe",
  Age: 17,
};
console.log(object);

const object1 = new object({
  Firsname: "Marie",
  Lastname: "Doe",
  Age: 18,
});
console.log(object1);

console.log(Object.values(object));

const merge = {...object,...object1}
console.log(merge);