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

const isBobAnAdult: boolean = isAdult(bob);

console.log(`Bob is${isBobAnAdult? ' ' : ' not'}an adult`);
