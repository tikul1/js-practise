function greet() {
    console.log('good morning');
}
greet();

//arrow function

let greet1 = ()=>{
    console.log('good night')
}

let greet3(() => {
    console.log("time out");}, 3000);
}
)