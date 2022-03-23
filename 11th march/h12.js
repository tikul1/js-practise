function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  
  console.log(generateRandomLetter()) 
  console.log(generateRandomLetter()) 
  console.log(generateRandomLetter()) 
  console.log(generateRandomLetter()) 
  console.log(generateRandomLetter()) 
  console.log(generateRandomLetter()) 


  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(7));
console.log(generateString(6));
console.log(generateString(5));
console.log(generateString(2));
console.log(generateString(3));