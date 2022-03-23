// function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence = ['learning', ...fragment, 'is', 'fun']; 
//     return sentence;
//   }
  
//   console.log(spreadOut());

function quickCheck(arr, elem) {

    if(arr.indexOf(elem) >=0) {
     return true;
   }
   else { 
     return false;
   }  
  }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


  //iterate through all the elemnts of array using for loop


  function filteredArray(arr, elem) {
    let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
          }
        }
    return newArr;
  }
  
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));