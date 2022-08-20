let first = Number(prompt("Please first num : "));
let second = Number(prompt("Please second num : "));
let third = Number(prompt("Please third num : "));
let flag = 1;
flag = (first+second<third) ? 0 : (third+second<first) ? 0 : (first+third<second) ? 0 : 1;
console.log(flag==1 ? "yes" : "no");