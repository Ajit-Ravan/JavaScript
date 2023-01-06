//document.getElementById("count_el").innerText = 5;

let count = 0;

let countEl = document.getElementById("count_el")  //pass in argument
let saveEl = document.getElementById("save-el");


function increment()
{
    console.log("clicked");
    count += 1;
    // count = count + 1;
    // countEl.innerText = count; 
    countEl.textContent = count; 
}



 
function save()
{

    let countStr = count + " - ";
    // saveEl.innerText += countStr;
    saveEl.textContent += countStr;
    count = 0;                          //after clicked save the count will become 0
    countEl.textContent = count;
    
    
}

 