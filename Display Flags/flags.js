function reqListener() {
    const countriesData = JSON.parse(this.responseText)
} 
  console.log(countriesData)
  for(let ind = 0; ind < countries.length; ind++){
    console.log(countriesData[ind].flags.png)
  } 
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
  