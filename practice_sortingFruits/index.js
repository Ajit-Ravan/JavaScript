let shelf = ["🍊", "🍅", "🍊", "🍊", "🍅", "🍅", "🍅"];

let appleEl = document.getElementById("apple-el");
let orangeEl = document.getElementById("orange-el");

let appleShelf = [];
let orangeShelf = [];

function sortFun(){
    for (let i = 0; i < shelf.length; i++) {
        if (shelf[i] === "🍅") {
            appleEl.textContent += "🍅";
        } else {
            orangeEl.textContent += "🍊";
        }
    }
}

sortFun();

