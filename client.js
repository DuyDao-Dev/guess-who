console.log('Here are all the available people:', people);

$(document).ready(function(){
$('body').on('click', 'div', findMatch)
appendPerson(); 
randomPerson();
})

let namePicked;
function randomPerson(){
  let min = 0;
 let max = people.length -1;
 let answer =  Math.floor(Math.random() * (1 + max - min) + min);
 namePicked = people[answer].name
  return namePicked;
}
// console.log(randomPerson);
// //need handler with if (match == number) alert You guessed right! else, You've guessed wrong! Try again!
function appendPerson (){
  for (const person of people) {
   $('body').append(`
<div data-id=${person.name}>
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of"${person.name}">
        </div>`)
  }
}

function findMatch(){
  console.log();
  let clickedName = $(this).data('id');
  if (clickedName == namePicked){
    alert(`You've got a match!`)
  }
  else alert(`You've chose wrong! Try again!`)
}