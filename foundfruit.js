const fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears', 'bananas'];
const found = [];

function findFruit(fruits, searchPhrase) {
    const foundFruit = fruits.find(fruit => fruit === searchPhrase);
    if (foundFruit) {
        console.log(searchPhrase + ' were found!');
    } else {
        console.log(searchPhrase + ' were not found!');
    }
    }
    findFruit(fruits, 'pears');
