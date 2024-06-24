function isAdult(user) {
    return user.age >= 18;
}
var bob = {
    name: 'Bob',
    age: 23,
};
var isBobAnAdult = isAdult(bob);
console.log("Bob is ".concat(isBobAnAdult ? '' : 'not', " an adult"));
