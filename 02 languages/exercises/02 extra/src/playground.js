const set = propertyName => (user, value) => ({...user, [propertyName] : value});

const setName = set('name');
const setSurname = set('surname');
const setAge = set('age');

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };
console.log(set('name')(julia, 'Amparo')); // { name: 'Amparo', surname: 'Álvarez', age: 19 };

console.log(setName(julia, 'Ana')); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, 'González')); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }

console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
