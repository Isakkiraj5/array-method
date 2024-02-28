const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  //contient
  let flag = JSON.parse(this.response);
  const asia = flag.filter((item) => {
    return item.continents.includes("Asia");
  });
  console.log("Contitent", asia);

  // population less than 600
  const pop = flag.filter((item) => {
    return item.population < 200000;
  });
  console.log(pop);

  const curr = flag.map((item) => {
    return item.currencies;
  });
  console.log("Currencies", curr);

  // reduce
  const value = flag.map((item) => {
    return item.population;
  });

  const rec = value.reduce((acc, val) => {
    return acc + val;
  }, 0);
  console.log("Total population", rec);

  //print country
  var input = flag;
  const country = flag.filter((item) => {
    const data = item.currencies;
    if (data != null) {
      if ("USD" in data) {
        if (data.USD.name == "United States dollar") {
          return item.name.common;
        }
      }
    }
  });
  const count = country.map((item) => {
    return item.name.common;
  });
  console.log("countries using US Dollar", count);


  // for each method
  flag.forEach((item) => {
    if (item != null) {
      console.log(item.name.common, item.capital[0], item.flags.png);
    }
  });
};
