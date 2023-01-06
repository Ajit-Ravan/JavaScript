// document.getElementById("count_el").innerText = 5;

let count = 0;

let countEl = document.getElementById("count_el")
function increment()
{
    console.log("clicked");
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
    
}