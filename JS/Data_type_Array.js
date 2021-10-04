var countries = ["Bangladesh", "USA", "UK", "KSA"];
console.log(countries);
console.log(countries[0]);
console.log(countries[3]);
console.log(countries.length);

countries[1] = "Poland";
console.log(countries); 
console.log(countries[5]);

countries[4] = "Norway";
console.log(countries);

countries[countries.length] = "Sewden";
console.log(countries);
countries[5] = "Sweden";
console.log(countries);

//push pop, always work in last item
countries.push("China");
console.log(countries);
console.log(countries.pop());
console.log(countries);
console.log(countries.push("China", "Japan")); // we can push/pop multiple elements
console.log(countries);

console.log(countries.shift()); //add from start
console.log(countries);
console.log(countries.unshift("Bangladesh")); // removes from start
console.log(countries);

var numbers = [];
numbers.push(21);
numbers.push("Two");
console.log(numbers);

var myCountry = "Bangladesh";
console.log(myCountry.split(""));
console.log(myCountry.split());

var x = "Bangladesh is a country"
console.log(x.split("n"));
console.log(x.split(" "));
x = "Bangladesh, China, Finland";
console.log(x.split(","));
x = "Bangladesh is a country"
var y = x.split(" ")
console.log(y);
var z = y.toString(); //array to string, by default a comma will be there
console.log(z); 
z = y.join(" ");
console.log(z); 

z = x.concat(y)
console.log(z); 
z = countries.concat(y);
console.log(z); 
console.log(countries.sort());  //always sort in ascending order
console.log(countries.reverse()); // will sort in descending order but have to use sort() first

