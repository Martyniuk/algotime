// 30.11.2020
Function.prototype.newBind = function (context, ...rest) {
  // if you will remove arrow function -> just use const fn = this; fn.apply....
  return (...innerRest) => {
    this.apply(context, rest.concat(innerRest));
  };
};

var a = {
  age: 12,
  getAge() {
    console.log("this.age", this.age);
  },
};

var c = {
  age: 14,
};

a.getAge(); // 12
const newAge = a.getAge().newBind(c); // 14

console.log("newAge", newAge);
