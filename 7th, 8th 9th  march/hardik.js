
       let a = 6;
       console.log(a);
// using += operator to add string

       let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

// adding string with variable

const myName = "Hardiik";
const myStr1 = "My name is" + myName + "and I am well!";

// printing length of string

let myStr2 = "This is the first sentence. ";
console.log(myStr2.length);

// creating array 
const myArray = ["hardik", 22];

// multidimensional array create and printing element 

const myArray1 = [["hardik", 28], ["parmar", 28]];
const name1 = myArray1[0];
console.log(name1);

// changing value of array 

const myArray2 = [18, 64, 99];
myArray2[0] = 45;
console.log(myArray2[0])

// accessing perticuler data from multi-dimensional array  

const myArray3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData3 = myArray3[2][1];
console.log(myData3)

// pushing data in array 

const myArray4 = [["John", 23], ["cat", 2]];
myArray4.push(["dog", 3]);
console.log(myArray4)

// removing element from array using .pop, .shift
const myArray5 = [["John", 23], ["cat", 2]];


const removedFromMyArray5 = myArray5.pop();
console.log(myArray5);
console.log(removedFromMyArray5);

const removedFromMyArray = myArray5.shift();         //to remove first element of array

console.log(myArray5);     //array will be empty

// Adding data using unshift in array 

myArray5.unshift("Hardik")
console.log (myArray5)      //to add first element of array

// creating reusable function 

function reusableFunction() {
  console.log("Hi World")
}
reusableFunction();

// adding 2 number using function with argument

function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}
functionWithArgs(3, 4);

// return a value from function using return 

function timesFive(num) {
  return num * 5;
}
const answer = timesFive(5);
console.log(answer)

// Declare the myGlobal variable

let myGlobal= 10;        //global variable it can be used anywhere in JS

function fun1() {
  oopsGlobal = 5;        //it is inside function so it has local scope

}

// global and local variable with same name 

const outerWear = "T-Shirt";  //globally it will give this value

function myOutfit() {

  const outerWear = "sweater" //inside this function it will give this value

  return outerWear;
  
}
myOutfit();
console.log(outerWear);
console.log(myOutfit);

// sum with 2 diffrent function 

let sum = 0;

function addThree() {
  sum = sum + 3;
}


function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
console.log(sum);
// use of if statement 

function trueOrFalse(wasThatTrue) {
  
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// equality operator and if statement

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

//greater than or equal to operator

function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) { 
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >=10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// use of logical "and" operator

function testLogicalAnd(val) {

  if (val >= 25 && val <=50) {
       return "Yes";
    }
  return "No";
}
testLogicalAnd(10);

//use of logical "or" operator


function testLogicalOr(val) {

if (val >= 25 || val <=50) {
     return "Yes";
  }
return "No";
}
testLogicalOr(10);

// cahined if else statements 

function testSize(num) {
  if(num  <5) {
    return "Tiny";
  }
else if(num  <10) {
    return "Small";
  }
else if(num  <15) {
    return "Medium";
  }
 else if(num  <20) {
    return "Large";
  }
  else {
    return "Huge";
  }
}

testSize(7);

// using chained if else for array 

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if(strokes == 1) {
 return names[0];
    }
    else if(strokes <= par - 2) {
      return names[1];
    }
    else if(strokes == par - 1) {
      return names[2];
    }
    else if(strokes == par) {
      return names[3];
    }
    else if(strokes == par + 1) {
      return names[4];
    }
    else if(strokes == par + 2) {
      return names[5];
    }
    else if(strokes >= par + 3) {
      return names[6];
    }
}

golfScore(5, 4);

// use of switch statement 

function caseInSwitch(val) {
  let answer = "";
switch (val) {
 
   case 1:
      answer = "alpha";
      break;
   case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
}

  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 1:                 //we can pass string intead of 1 using ""
    answer = "apple";
    break;
    case 2:
    answer = "bird";
    break;
    case 3:
    answer = "cat";
    break;
    default: 
    answer = "stuff";
    break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// switch for multiple identical cases
function sequentialSizes(val) {
  let answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
        answer = "Low";
        break;
    case 4:
    case 5:
    case 6:
        answer = "Mid";
        break;
    case 7:
    case 8:
    case 9:
        answer = "High"
        break;
  }
}
