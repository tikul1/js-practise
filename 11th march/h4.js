

function randomWholeNum() {
console.log("=>", Math.floor(Math.random() * 9000) + 1000);
}
randomWholeNum();


// 1 to 100

let a= 50000;
let b =100000;
let r = Math.floor(a + (b-a)*Math.random());
console.log("the random number is ",r )