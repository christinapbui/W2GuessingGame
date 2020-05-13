// 1. function for computer to pick random number
let computerNum = Math.floor(Math.random()*100)+1
let history = [];
let guessesRemaining = 5;
let guessCount = 0;
remainingAttempts = guessesRemaining--;

console.log(computerNum)

// 2. when user clicks the "guess" button, it will fire the guess function
function guess(){
    // 3. this guessNumber function will grab the value that the user typed
    let userNum = document.getElementById("userGuess").value
    let resultMessage = '' // save the result message
    //let guessesRemainingMessage = '' // numberOfGuesses < 5 //document.getElementById("userGuess").value;
    // 4. compare guessed number with the computer's number
    // 5. if the computer's number > user's number, then show "too low"
    if(computerNum > userNum && userNum > 0){
        resultMessage = "Your guess is too low";
        //guessesRemainingMessage = guessesRemaining - 1;
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
    // 7.5 keep the history
    history.push(userNum)

    //show history? CHECK HERE
    // if(guessesRemaining > 0){
    //     console.log("Guesses Remaining: ",remainingGuesses);
    //    // document.getElementById("guessesRemainingArea").innerHTML = `Guesses Remaining: ${guessesRemainingMessage}`
    // }else if(guessesRemaining = 0){
    //     console.log("You have no more guesses left! Reset to try again.")
    // }

    // 8. show the result to the user
    document.getElementById("resultArea").innerHTML = `${resultMessage}`
    // 9. also show the history
    document.getElementById("historyArea").innerHTML = `History: ${history}`
    // show number of guesses remaining -- NOT CHECKED YET
    //document.getElementById("guessesRemainingArea").innerHTML = `Guesses Remaining: ${guessesRemaining}`
    // for (let i = 0;i<5;i++){
    //     console.log("guessesRemaining")
    // }
    
    // if(document.getElementById("guesses").innerHTML = `Guesses Remaining: ${guessesRemaining}`){

    // }

    // a. make the chance feature (only 5 chances to guess)
    // for(let i=5;i>=0;i--)
    //     console.log("You have ",guessesRemainingMessage," guesses left.")
}


// b. reset feature (when user clicks the reset button, it will start over)
function reset(){
    document.getElementById("reset").onclick = function() {
        document.getElementById("number").value = "";
    }
}
// c. if user wins or loses, the guess button will be disabled (cannot click)

// d. add timer feature (if you cannot finish the game within 20 sec, the game will be done--you lose)
// let time = 0 // time start from 0
// let myTime; // timer will be assign to this variable
// function timecounting() {
//     myTime = setInterval(() => {
//         time += 1
//         document.getElementById('timecount').innerHTML = time
//     }, 1000)// every 1 second, it will add 1 into time variable (the computer uses millisecond so 1000 is 1 second)
// }
// timecounting()// fire the timecounting function!!