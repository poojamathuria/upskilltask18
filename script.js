//Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.
var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
function calculateGrade(score) {
    return score >= 90 ? 'A' :
        score >= 80 ? 'B' :
            score >= 70 ? 'C' :
                score >= 60 ? 'D' :
                    'F';
}

var studentScore = 85;
var grade = calculateGrade(studentScore);
console.log(`Student's grade: ${grade}`); // Output: B

//Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
var car = {
    companyName: 'Toyota',
    model: 'Corolla',
    year: 2020
};
function changeCarYear(carObj, newYear) {
    carObj.year = newYear;
}
changeCarYear(car, 2022);
var { model, year } = car;
console.log(`Car Model: ${model}, Year: ${year}`);

//Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
// Helper function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers); // Output: [2, 3, 5, 7]

//Q5 - State different use cases of map, filter and reduce functions.
//Map Function
var numbers = [1, 2, 3, 4, 5]; //Transforming Data
var squaredNumbers = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
var users = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]; //Extracting Values
var names = users.map(user => user.name); // ['Alice', 'Bob']

//Filter Function
var numbers = [1, 2, 3, 4, 5]; //Filtering Data
var evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
var numbers = [1, 2, 2, 3, 4, 4, 5]; //Removing Duplicates
var uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index); // [1, 2, 3, 4, 5]

//Reduce Function
var numbers = [1, 2, 3, 4, 5]; //Aggregating Data
var sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

var arrays = [[1, 2], [3, 4], [5, 6]]; //Flattening Arrays
var flattenedArray = arrays.reduce((acc, curr) => acc.concat(curr), []); // [1, 2, 3, 4, 5, 6]

//Q6 - Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
async function fetchData() {
    try {
        var response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        var data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
// Call the asynchronous function
fetchData();

//Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
var person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
    // contact property is missing
};
var phoneNumber = person?.contact?.phone;
console.log('Phone Number:', phoneNumber); // Output: undefined