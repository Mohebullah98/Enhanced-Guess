let validinput =false, maxValue;
let array = new Array();
function chooseMax(){ //prompt for max number and check if valid
    while(!validinput){
    maxValue = window.prompt("Please pick a maximum value:");
       if(maxValue!=NaN &&maxValue>0) {
       validinput=true;
       Math.round(maxValue); //round decimal entries
       }
   }
   return maxValue;
}
function generaterandomNumber(val){
    let number = Math.floor(Math.random()*val+1); //Random number between 1 and Max Value
    return number;
}

let number = generaterandomNumber(chooseMax()); //generate number once upon load so user can keep guessing for same number
function alreadyGuessed(num){
    if(array.includes(num)) return true;
    else return false;
}
function guess(){
    let div = document.querySelector(".container");
    let incorrect = false; guessed = false;
    let value = document.getElementById("guessval").value;
    if(alreadyGuessed(value)){
        let newNode = document.createElement("p");
        newNode.innerHTML="That's already been guessed!";
        div.appendChild(newNode);
        guessed = true; 
    }
    if(isNaN(+value)|| +value>+maxValue ||+value <1){ // check to see if input is valid (should compare value and maxValue as numbers)
        let newNode = document.createElement("p");
        if(isNaN(+value)){
        newNode.innerHTML="That is not a Number!";
        }
        else newNode.innerHTML ="That number is not in range, try again."
        div.appendChild(newNode);
        incorrect=true;
    }
    if(value==number){ //guessed correct number
        array.push(value);
        let newNode = document.createElement("p");
        newNode.innerHTML=`You Got it! It took you ${array.length} tries and your guesses were ${array}`;
        div.appendChild(newNode);
    }
    else if(value>number &&!incorrect&&!guessed){ //recommend higher
        array.push(value); //add guesses to array
        let newNode = document.createElement("p");
        newNode.innerHTML="No, try a lower number.";
        div.appendChild(newNode);
    }
    else if(value<number&&!incorrect&&!guessed){ //recommend lower
        array.push(value);
        let newNode = document.createElement("p");
        newNode.innerHTML="No, try a higher number.";
        div.appendChild(newNode);
    }
}