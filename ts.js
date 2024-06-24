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
    age: 'Secret!',
};
function anAdult(user) {
    console.log("".concat(user.name, " is").concat(isAdult(user, 'naughty string where it does not belong') ? '' : ' not', " an adult"));
}
anAdult(bob);
anAdult(priscilla);
