const fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears', 'bananas'];
const found = [];

function findFruit(fruits, searchPhrase) {
    const foundFruit = fruits.find(fruit => fruit === searchPhrase);
    if (foundFruit) {
        console.log(searchPhrase + ' was found!');
    } else {
        console.log(searchPhrase + ' was not found!');
    }
    }
    findFruit(fruits, 'pears');
