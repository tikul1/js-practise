const arr1 = [1, 2, 3, 4, 5, 6, 7];

const result1 = arr1
  .map((item) => {
    return item * 2;
  })
  .filter((item) => item > 10);

let result2 = [];

for (let i = 0; i < arr1.length; i++) {
  result2.push(arr1[i] * 2);
}

// console.log('result1: ', result1)
// console.log(`result: ${result1}`)
// console.log(`result2: ${result2}`)
let dayresult = [];
let day = arr1.map((item) => {
  // console.log('item', item)
  let dayresult1 = [];

  //switch case condition
  switch (item) {
    case 1:
      console.log(item);
      dayresult1.push("bigger");
      break;
    case 7:
      console.log(item);
      dayresult1.push("smaller");
      break;
  }
  dayresult = dayresult1;
});
console.log("dayresult: ", dayresult);
const person = {fname:"John", lname:"Doe", age:25};
console.log('person.fname: ', person.fname)
console.log('person["fname"]: ', person["fname"])

//for in
let txt = " ";
for (let x in person) {
    txt += person[x] + " ";
}
console.log('txt: ', txt)

//for of 
const cars = {name1:'one',name2:'two',name3:'three',};

let text = "";
for (let x of Object.keys(cars)) {
  text += `${cars[x]}` + "<br>";
}
//explanation:
// let x of [name1,name2,name3]
// cars["name1"]