
let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchaseError()
{
    console.log("the purchase button is clicked");
    errorParagraph.textContent = "something went wrong , please try again.";
}