let num = Number(prompt("Please enter number : "));
let count=0;
if (num >= 1) ++count;
while (num / 10 >= 1) {
    num /= 10;
    console.log(num)
    ++count;
}
console.log(count)