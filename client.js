console.log('Here are all the available people:', people);

$(document)ready(onReady){
  //need a listener
  $().on('click',){
    //run randomNumber first and then runPerson handler to see if it matches.
  }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//need handler with if (match == number) alert You guessed right! else, You've guessed wrong! Try again!
function pickPerson (){
  if (){
    alert(`You guessed right!`);
  }
  alert(`You've guessed wrong! Try again!`);
}