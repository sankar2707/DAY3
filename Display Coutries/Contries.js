function reqListener() {
    const countriesData = JSON.parse(this.responseText)
} 
  console.log(countriesData)
  for(let ind = 0; ind < countries.length; ind++){
    console.log(countriesData[ind].name.common, countriesData[ind].region, countriesData[ind.subregion, countriesData[ind].population])
  } 
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373");
  req.send();
  
  