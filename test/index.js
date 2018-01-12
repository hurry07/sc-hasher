let Index = require('../index.js');

console.log(Index.hash('abc', 10));
console.log(Index.hash(10, 10));
console.log(Index.hash(['abc'], 10));
console.log(Index.hash([10], 10));
console.log(Index.hash([{name: 'jack'}], 10));