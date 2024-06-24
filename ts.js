function isAdult(user) {
    return user.age >= 18;
}
var bob = {
    name: 'Bob',
    age: 23,
};
var priscilla = {
    name: 'Priscilla',
    age: 14,
};
var alice = {
    name: 'Alice',
    age: 42,
};
function anAdult(user) {
    console.log("".concat(user.name, " is").concat(isAdult(user) ? '' : ' not', " an adult"));
}
anAdult(bob);
anAdult(priscilla);
anAdult(alice);
