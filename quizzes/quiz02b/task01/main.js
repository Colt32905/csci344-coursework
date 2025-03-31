const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, role: "admin" },
    { id: 2, name: "Bob", age: 30, isActive: false, role: "user" },
    { id: 3, name: "Charlie", age: 22, isActive: true, role: "moderator" },
    { id: 4, name: "David", age: 35, isActive: true, role: "user" },
    { id: 5, name: "Eve", age: 28, isActive: false, role: "admin" },
    { id: 6, name: "Frank", age: 40, isActive: true, role: "moderator" },
];

// 1.1. Use map to create an array of names from the users array.
//      Then output the array of names to the console.

const userNames = users => (users.name);
const test1 = users.map(userNames);
console.log(test1);

// 1.2. Use filter to create an array of only active users from the users array.
//      Then output the array of active users to the console.

const yayActive = users.isActive==true;
const test2 = users.filter(yayActive);
console.log(test2); 


// const isGreaterThan2 = (item) => item > 2;
// const isEven = (item) => item % 2 === 0;
// const isOdd = (item) => item % 2 === 1;

// // The filter "higher order" function applies a filtering function
// // to each element of a list (which evaluates to true or false).
// // It returns a new list with only those items where filtering function returned true.
// const result1 = myNums.filter(isGreaterThan2);
// const result2 = myNums.filter(isEven);
// const result3 = myNums.filter(isOdd);

// console.log(result1);
// console.log(result2);
// console.log(result3);


