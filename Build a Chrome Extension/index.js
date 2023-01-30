//chrome://extensions/

const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));  //getting array from localStorage

//checking if leadsFromLocalStorage is truthy then set myLeads to its value and cal renderLeads()

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render();
}

//   //given tab url render to the page 
// const tab = [{ url: "https://www.linkedin.com/in/ajit09/" }]; //WE DONT NEED THIS HARDCODED VARIBALE BECAUSE WE WILL PASS TAB VARIABLE THROUGH CHROME API

tabBtn.addEventListener("click", function () {
  //GRAB THE URL OF THE CURRENT TAB USIGN CHROME API
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {        //active means active tab and currentwindow means current open window of browser
    // console.log(tab[0].url);           //tab[0] is object and tab[0].url get the values in the tab array

    myLeads.push(tabs[0].url); //save the url in the myLead array
    //save the myLeads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })
  


});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // ulEl.innerHTML += " <li>"+ myLeads[i] +"</li>";      // use innerHtml in the place of textContent so it will not print the html tags along with array elements `
    //listItems += "<li> <a target= '_blank' href='"+ myLeads[i]+"'>" + myLeads[i] + "</a></li>";            //passing list + values to the listItem string
    //instead of this we can use template string using
    //CONVERT NORMAL STRING TO THE TEMPLATE STRING USING BACKSTICK ` `  SO WE CAN WRITE HTML CODE AS WE WRITE IN HTML PAGE
    listItems += ` 
        <li>
            <a target= '_blank' href='${leads[i]}'>
             ${leads[i]}</a>
        </li>
          `;

    //we can also use createElement and append like this
    //   const li = document.createElement("li"); //this is creating list element like this ......<li> </li>
    //   li.textContent = myLeads[i]; //set textContent of li as array elements
    //   ulEl.append(li); //append the li to the ul list
  }

  ulEl.innerHTML = listItems; //set all listItems in ul list
}

//add event listener for doubleclick
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();   //clearing the local storage 
  myLeads = []             //we have to assign new myLeads array beacause the localStorage are cleared
  render(myLeads);            //because we have to add the new values in the  myLeads array
});

inputBtn.addEventListener("click", function () {            //adding event listener click and function when someone click the button the function is called
    myLeads.push(inputEl.value);                            //store the input text value to the myLeads array 
    inputEl.value="";                                     //after clicking on button the the given input value is cleared from the input rectangle
  localStorage.setItem("myLeads", JSON.stringify(myLeads));     //storing the array in the localStorage
  render(myLeads);
  
  console.log(localStorage.getItem("myLeads"));
})




