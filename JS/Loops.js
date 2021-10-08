var i = 1;

while(i <= 10){
    if(i === 4){
       console.log(`Value of i is ${i}`); 
    }
    console.log(i);
    i++;
}

for(i=1; i<=10; i++){
    if(i % 2 == 1){
        continue;
    }
    console.log(i);
}