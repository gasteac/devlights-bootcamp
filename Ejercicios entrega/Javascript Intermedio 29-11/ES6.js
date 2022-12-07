// 1.Compare Scopes of the var and let Keywords

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

// 2.Mutate an Array Declared with const

  const s = [5, 7, 2];
  function editInPlace() {
  s[0] = 2
  s[1] = 5
  s[2] = 7
  }
  editInPlace();

// 3.Prevent Object Mutation

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  Object.freeze(MATH_CONSTANTS)
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

// 4.Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => new Date();

// 5.Write Arrow Functions with Parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// 6.Set Default Parameters for Your Functions

const increment = (number, value = 1) => number + value;

// 7.Use the Rest Parameter with Function Parameters

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(0,1,2));
  console.log(sum(1,2,3,4));
  console.log(sum(5));

  // 8.Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

// 9.Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
const {today, tomorrow} = HIGH_TEMPERATURES;

// 10.Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

// 11.Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
const { today :{low:lowToday, high:highToday}} = LOCAL_FORECAST

// 12.Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
[a, b] = [b, a]

// 13.Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
 
function removeFirstTwo(list) {
    // Only change code below this line
    const [,,...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// 14.Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = ({max, min})=>{
    return (max + min)/2
  }; 

// 15.Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
    for (let i=0 ; i<3 ; i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return failureItems;
  }
  const failuresList = makeList(result.failure);

  // 16.Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => 
({name, age, gender});
createPerson("Zodiac Hasbro", 56, "male")

// 17.Write Concise Declarative Functions with ES6

const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);

// 18.Use class Syntax to Define a Constructor Function

class Vegetable{
    constructor(carrot){
      this.name = carrot;
    }
  }
const carrot = new Vegetable('carrot');
console.log(carrot.name); 

// 19.Use getters and setters to Control Access to an Object


class Thermostat{
    constructor(temp){
      this._temperature = temp
    }
    get temperature(){
      return 5/9 * (this._temperature-32)
    }
    set temperature(updatedTemp){
      this._temperature = updatedTemp * 9.0 / 5 + 32
    }
  }
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

// 20.Create a Module Script

<html>
  <body>
    <script type='module' src='index.js'></script>
  </body>
</html>

// 21.Use export to Share a Code Block

export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
const lowercaseString = (string) => {
return string.toLowerCase()
}
export{lowercaseString}

// 22.Reuse JavaScript Code Using import

import {uppercaseString, lowercaseString} from './string_functions.js'
uppercaseString("hello");
lowercaseString("WORLD!");

// 23.Use * to Import Everything from a File

import * as stringFunctions from './string_functions.js'
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// 24.Create an Export Fallback with export default

export default function subtract(x, y) {
    return x - y;
  }

// 25.Import a Default Export

import subtract from './math_functions.js';
subtract(7,4);

// 26.Create a JavaScript Promise

const makeServerRequest = new Promise((resolve,reject)=>{});

// 27.Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
    if(responseFromServer) {
      resolve('We got the data');
    } else {  
      reject('Data not received');
    }
  });

// 28.Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => console.log(result));

// 29.Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });