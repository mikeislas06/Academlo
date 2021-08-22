let input = null;
let sum = 0;

while(input != 'x'){
    input = prompt();
    if(input != 'x'){
        sum += Number(input);
    }
}

console.log(sum);