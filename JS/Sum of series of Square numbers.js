var num = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i=1; i<=num; i++){
    sum += i**2;
    series += (i**2).toString() + " ";
    //console.log(series);

    if(i == num){
        continue;
    }
    series += " + ";
}

console.log(`${series} = ${sum}`);
