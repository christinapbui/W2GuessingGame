// 1. function for computer to pick random number
let computerNum = Math.floor(Math.random()*100)+1
let history = [];
let guessesRemaining = 4;
let guessCount = 0;
//array to create a loop?: let guessCount = [0,1,2,3,4,5]
let remainingAttempts = guessesRemaining--;

// this is the computer's num, which will only show up in console
console.log(computerNum)

// 2. when user clicks the "guess" button, it will fire the guess function
function guess(){
    // 3. this guessNumber function will grab the value that the user typed
    let userNum = document.getElementById("userGuess").value
    let resultMessage = '' // save the result message
    // 4. compare guessed number with the computer's number
    // 5. if the computer's number > user's number, then show "too low"
    if(computerNum > userNum && userNum > 0){
        resultMessage = "Your guess is too low";
    }else if(computerNum > userNum && userNum <= 0){
        resultMessage = "Your guess is too low";
        alert("Your number cannot be below 1! Try again.")
    // 6. if the computer's number < user's number, then show "too high"
    }else if(computerNum < userNum && userNum < 100){
        resultMessage = "Your guess is too high"
    }else if(computerNum < userNum && userNum > 100){
        resultMessage = "Your guess is too high"
        alert("Your number exceeds 100! Try again.")
    // 7. if computer's number === user's number, then say "correct"
    }else if(computerNum == userNum){
        resultMessage = "Correct!"
    }
    document.getElementById("guessesRemainingArea").innerHTML = `Guesses Remaining: ${remainingAttempts--}`
    // a. make the chance feature (only 5 chances to guess)

    // 7.5 keep the history
    history.push(userNum)

    // 8. show the result to the user
    document.getElementById("resultArea").innerHTML = `${resultMessage}`
    // 9. also show the history
    document.getElementById("historyArea").innerHTML = `History: ${history}`

}
if(remainingAttempts <= 0){
    resultMessage = "Sorry, reset to try again."
}

let time = 10 // time start from 30 sec
let myTime; // timer will be assign to this variable

function timecounting() {
    myTime = setInterval(() => {
        time -= 0.5
        document.getElementById('timeCount').innerHTML = time
    }, 1000)// every 1 second, it will add 1 into time variable (the computer uses millisecond so 1000 is 1 second)
}
document.getElementById("timeCount").innerHTML = `Time Left: ${timecounting()}` // fire the timecounting function!!

if(timecounting() <= 0){
    resultMessage = "Sorry, your time ran out."
}
return;

//while(timecounti