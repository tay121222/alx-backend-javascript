function getResponseFromAPI() {
  return new Promise(((myResolve, myReject) => {
    myResolve(true);
  }));
}

getResponseFromAPI().then((value) => {
  console.log(value);
});
