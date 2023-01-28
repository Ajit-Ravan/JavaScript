const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {            //adding event listener click and function when someone click the button the function is called
    myLeads.push(inputEl.value);                            //store the input text value to the myLeads array 
    inputEl.value="";                                     //after clicking on button the the given input value is cleared from the input rectangle
    console.log(myLeads);
    renderLeads();
})


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
      // ulEl.innerHTML += " <li>"+ myLeads[i] +"</li>";      // use innerHtml in the place of textContent so it will not print the html tags along with array elements `
      //listItems += "<li> <a target= '_blank' href='"+ myLeads[i]+"'>" + myLeads[i] + "</a></li>";            //passing list + values to the listItem string
      //instead of this we can use template string using
      //CONVERT NORMAL STRING TO THE TEMPLATE STRING USING BACKSTICK ` `  SO WE CAN WRITE HTML CODE AS WE WRITE IN HTML PAGE
        listItems += ` 
        <li>
            <a target= '_blank' href='${myLeads[i]}'>
             ${myLeads[i]}</a>
        </li>
          `;
        
        
        
        
      //we can also use createElement and append like this
      //   const li = document.createElement("li"); //this is creating list element like this ......<li> </li>
      //   li.textContent = myLeads[i]; //set textContent of li as array elements
      //   ulEl.append(li); //append the li to the ul list
    }
 
    ulEl.innerHTML = listItems;        //set all listItems in ul list
}
