
console.log ("=>" ,Math.max(1,2,3));

// we can use apply method to find max in an array

console.log("=>", Math.max.apply(null, [1,2,3]));


const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    } 
}

const person1 = {
    firstName : "Hardik",
    lastName : "Parmar"
}
person.fullName.apply(person1, ["ahmedabad, India"]);           //apply method
person.fullName.call(person1, "ahmedabad" , "India");           //call method
