let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent;
document.getElementById("num2-el").textContent;

let sum = document.getElementById("sum-el");


function add()
{
  let result  = num1 + num2;
  sum.textContent = "result: " + result;
  console.log(sum);
}
function substract() {
    let result = num1 - num2;
    sum.textContent = "result: " + result;
  console.log(sum);
}
function multiplication() {
  let result = num1 * num2;
  sum.textContent = "result: " + result;
  console.log(sum);
}
function divide() {
  let result = num1 / num2;
  sum.textContent = "result: " + result;
  console.log(sum);
}