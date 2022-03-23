// creating object JSON  

const myDog = {
  
  "name" : "Milo",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["milk", "stick"]
  };
  console.log("tut1");
  console.log (myDog);

//   accessing data in JSON 

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  const hatValue = testObj.hat;      
  const shirtValue = testObj.shirt;
  console.log("tut2"); 
console.log(hatValue);
console.log(shirtValue);

  //when object properties has space in in it . [] is used to access data

  const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  const entreeValue = testObj1["an entree"];
    const drinkValue = testObj1["the drink"];

    //assigning properties to variable 

    const testObj2 = {
            12: "Namath",
        16: "Montana",
        19: "Unitas"
      };
      
      const playerNumber = 16;
      const player = testObj2[playerNumber]; 
      console.log("tut3");
      console.log(player);


    //updating value of object and adding new value 

const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog1.name = "Happy Coder"      //name update
  myDog1.bark = "Woof"             //new data add
  delete myDog1.legs;              //deleting bark
  console.log("tut4");
  console.log(myDog1);
  
    //using objects for lookup

    function phoneticLookup(val) {
        let result = "";
      
        const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
        };
       result= lookup[val];
      
        return result;
      }
      
      phoneticLookup("charlie");

      //creating array with object

      var myMusic = [
        {
          artist: "Billy Joel",
          title: "Piano Man",
          release_year: 1973,
          formats: ["CD", "8T", "LP"],
          gold: true
        },
        // Add record here
        {
          artist: "Deep Purple",
          title: "Smoke on the water",
          release_year: 1976,
          formats: ["CD", "8T", "LP"]
        }
      ];
      console.log("tut5");
            console.log(myMusic);

      //objext with subobject access (nested object)

      const myStorage = {
        "car": {
          "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
           },
          "outside": {
            "trunk": "jack"
          }
        }
      };
      
      const gloveBoxContents = myStorage.car.inside["glove box"];;


       //iteration using while loop in array
        
       const myArray = [];
       let i = 5;
       
       while (i >= 0) {
         myArray.push(i);
         i--;
       }
        console.log(myArray);
       //iteration using for loop in array

       const myArray2 = [];
for (let i=1; i<6; i++)
{
  myArray2.push(i);
}

//printing odd numbers using for loop

const myArray1 = [];
for(let i = 1; i < 10; i +=2 ) {
  myArray1.push(i);
}

    //addition of all the elements in array using for loop

const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++ ) {
  total += myArr[i];
  
}

    //multiply 

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length;  i++) {
    for(let j = 0; j < arr[i].length; j++ ) {
      product = product *arr[i][j];
     
       }
  }
  console.log(product);
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  
      // generating random number using Math.random

      function randomFraction() {

      let result = 0;
      while(result ===0)
      {
      result = Math.random();
      }
      
        return result;
    }
  
      
    //random number using Math.floor

   
      
      
  
  
      //for loop for profile lookup array
  
      const contacts = [
        {
          firstName: "Akira",
          lastName: "Laine",
          number: "0543236543",
          likes: ["Pizza", "Coding", "Brownie Points"],
        },
        {
          firstName: "Harry",
          lastName: "Potter",
          number: "0994372684",
          likes: ["Hogwarts", "Magic", "Hagrid"],
        },
        {
          firstName: "Sherlock",
          lastName: "Holmes",
          number: "0487345643",
          likes: ["Intriguing Cases", "Violin"],
        },
        {
          firstName: "Kristian",
          lastName: "Vos",
          number: "unknown",
          likes: ["JavaScript", "Gaming", "Foxes"],
        },
      ];
      
      function lookUpProfile(name, prop) {
        
        for (let x = 0; x < contacts.length; x++) {
          if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
              return contacts[x][prop];
            } else {
              return "No such property";
            }
          }
        }
        return "No such contact";
      }
      
      
      lookUpProfile("Akira", "likes");
 

    //ternary operator

    function checkSign(num) {
        return num > 0 ? "positive"
          : num < 0 ? "negative"
          : "zero";
      }
      checkSign(10);

        //using function in object

      let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {
          return "This dog has " + dog.numLegs + " legs.";
        }
      };
      
      dog.sayLegs();
      console.log(dog);

      //constructor 
      function Dog() {
        this.name = "Rupert";
        this.color = "brown";
        this.numLegs = 4;
      }

      //creating object for adding multiple data.

      function Dog(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
      }
      let terrier = new Dog("milo", "black");
      

      //terrier is instance of dog verify. if not then it will be false
      terrier instanceof Dog;     
      // abc instanceof Dog;



//adding object properties into array

      function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      
      for (let property in canary) {
        if(canary.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }
      console.log("property of bird function")
      console.log(ownProps);

//when you have n numbers of data prototype is used as common data to instances

      function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype.numLegs = 4;
      
      let beagle = new Dog("Snoopy");
      
      function Dog(name) {
        this.name = name;
      }
      
   //adding prototypes data in an array

      
   let dog4 = {
    name: "Spot",
    numLegs: 4
   }
      let ownProps1 = [];
      let prototypeProps = [];
      
      for (let property in dog4) {
        if (beagle.hasOwnProperty(property)) {
          ownProps1.push(property);
        } else {
          prototypeProps.push(property);
        }
      }
      console.log(ownProps1);
      console.log(prototypeProps);      

      //creating another object for protoypes for multiple prototypes.

      function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype = {
        constructor : Dog,
        numLegs: 4,
        eat: function() {
          console.log("nom nom nom");
        },
        describe: function() {
          console.log("Dog name is" + this.name);
        }
      };
 

      //inheritance in object

      function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle2 = new Dog();
console.log("beagle");
beagle2.eat();



//add methods after inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
 
 Dog.prototype.bark  = function() {
  console.log("Woof!");
};


let beagle3 = new Dog();
console.log("methods and inheritance")
beagle3.eat();
beagle3.bark();

//override inherited methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//private variable in object

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}
//slice in array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2, 2);
console.log(citrus);

//splice in array
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

fruits.splice(2, 2);
//remove and add using splice in array

var fruits3 = ["Banana", "Orange", "Apple", "Mango"];

fruits3.splice(2, 1, "Lemon", "Kiwi");



// //concat in array


const arry6 = ["ABC", "DEF"];
const arry7 = ["XYZ", "GHI", "LMN"];
const children1 = arry6.concat(arry7);
console.log(children1);
// concat 3 arrays

const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin"];
const children = array1.concat(array2,array3);
console.log(children);




