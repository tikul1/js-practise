//bind can be used when there are 2 objects. and you want to decleare method to both object.

const person = {
    firstName: "Hardik",
    lastName: "Parmar",
    fullName: function() {
    this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName : "Akash",
    lastName: "Solanki"
}

let fullname = person.fullName.bind(member);