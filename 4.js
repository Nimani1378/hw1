let num1 = Number(prompt("Please enter first number : "));
let num2 = Number(prompt("Please enter second number : "));
for (let i = 1; i <= num1 && i <= num2; i++) {
    if( num1 % i == 0 && num2 % i == 0) {
    console.log(i);
    }
}