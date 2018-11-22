/*
players must guess a number between min and max
player gets a certain amount of guesses
notify player of correct answer if loose
let player choose to play again
*/

let min = 1, max = 10, winningNum = getRandomNum(min,max), guessesLeft = 3;

//UI Elelments
  const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessInput = document.querySelector('#guess-input'),
        guessBtn = document.querySelector('#guess-btn'),
        message = document.querySelector('.message');


        //Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        //reload the page
        window.location.reload();
    }
    console.log(1);
});
 

//listen for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);
   console.log(guess);

   //validate input
   if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please eneter a number between ${min} and ${max}`, 'red');
   }

   //check if won / Game over won
   if(guess === winningNum){
  gameOver(true, `${winningNum} is correct , You Win!`);
   }else{
       //if they lose we subtract 1 from guesses left
       guessesLeft -= 1;

    if(guessesLeft === 0){
        //game over lost
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    }else{
         //change border color
         guessInput.style.borderColor = 'red';

         //clear input
         guessInput.value = '';

        //game continues -- answer was wrong
        setMessage(`${guess} is not correct,  ${guessesLeft} guesses left!`, 'red');
    }
   }

});

function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg;
}

function getRandomNum(min, max){
   return Math.floor(Math.random() * (max -min + 1) + min);
}

function gameOver(won, msg){

    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = color;

  //disable input
  guessInput.disabled = true;

  //change the color
  guessInput.style.borderColor = 'green';
  message.style.color = color;
  //set message
  setMessage(msg);


  //play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';  //add class

  //add listener to a parent since it loaded after the page loaded


}




/* Person constructor*/

function Person(name, dob){
    this.name = name;
    this.dob = dob;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const agedate = new Date(diff);
        return Math.abs(agedate.getUTCFullYear() - 1970);
    }
}

// const person1 = new Person('brad');
// const person2 = new Person('Jim');
// console.log(person2);

const p1 = new Person('Brad', '9-10-1981');
console.log(p1.calculateAge());