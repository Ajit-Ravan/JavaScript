//document.getElementById("count_el").innerText = 5;

let count = 0;

let countEl = document.getElementById("count_el")  //pass in argument
function increment()
{
    console.log("clicked");
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
    
}

function save()
{
    console.log("save button is clicked");
}

 