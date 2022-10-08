let totalAtemps = 5;
let attemps = 0;
let totalWon = 0;
let totalLost = 0;


const form = document.querySelector("form");

const cardBody =  document.querySelector(".card-bodys");

const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");

const lostWonMessage = document.createElement("p")

const resultTexts = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    attemps++;
    
    if (attemps == 6){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attemps < 6){
        checkResult(guessingNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAtemps - attemps}`;
    }

    guessingNumber.value = "";
    
});

function checkResult(guessingNumber){
    // console.log(guessingNumber);
    const randomNumber = getRandomdomnumber(5);
    // console.log(randomNumber);


    if(guessingNumber == randomNumber) {
        resultTexts.innerHTML = `You have Won <h1>Won</h1>`
        totalWon++;

    }else{
        resultTexts.innerHTML = `You have lost random Number is:  <h1>${randomNumber}</h1>`
        totalLost++;
    }

    
    lostWonMessage.innerHTML = `Won: ${totalWon} Time, Lost: ${totalLost} Time`

    lostWonMessage.classList.add("text-style");
    cardBody.appendChild(lostWonMessage)

}


function getRandomdomnumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
