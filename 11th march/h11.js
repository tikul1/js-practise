const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
    console.log(error);
});