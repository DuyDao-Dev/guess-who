var people = [
  {
    name: 'Dev',
    githubUsername: 'devjanaprime'
  },
  {
    name: 'Dane',
    githubUsername: 'DoctorHowser'
  },
  {
    name: 'Mary',
    githubUsername: 'mbmosman'
  },
  {
    name: 'Kris',
    githubUsername: 'kdszafranski'
  },
  {
    name: 'Edan',
    githubUsername: 'eschwartz'
  },
  {
    name: 'Casie',
    githubUsername: 'cassandradanger'
  },
  {
    name: 'Chris',
    githubUsername: 'christopher-black'
  },
];


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