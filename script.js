// let txt = "Wilson-3";
// let counter = txt.length;
// let i = 0
// function typeWritter() {
//     if (i <= counter) {
//         console.log(txt.charAt(i))
//         i++
//     } else {
//         clearInterval(interval)
//     }
// }

// let interval = setInterval(typeWritter, 1000);

// ------------------------------

let secondes = 0;
let minutes = 0
function timeOnPage() {
        // console.log("There's" + secondes + " seconds that you's here !");
        secondes ++
        if (secondes !== 0 && secondes%60 === 0){
            minutes++
            // console.log("There's" + minutes + " minutes that you's here !");
        }
    }

setInterval(timeOnPage, 1000);

// -------------------------------

let mole = document.createElement("button");
mole.classList.add("moleToShot")

let counter = 0
let scoreP = document.getElementById("score");

function score() {
    counter++
    scoreP.innerHTML = "";
    scoreP.append(counter);
    displayMole();
}
mole.addEventListener('click', () => score())

function displayMole() {
    let random = (Math.ceil(Math.random()*(12)));
    let div = document.getElementById("case"+random);
    div.append(mole);
    
}
setInterval(displayMole, 2000);
 


