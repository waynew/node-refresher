type User = {
    name: string;
    age: number;
};

function isAdult(user: User): boolean {
    return user.age >= 18;
}

const bob: User = {
    name: 'Bob',
    age: 23,
};

const priscilla: User = {
    name: 'Priscilla',
    age: 14,
};

function anAdult(user: User): void {
    console.log(`${user.name} is${isAdult(user)? '': ' not'} an adult`);
}

anAdult(bob);
anAdult(priscilla);
