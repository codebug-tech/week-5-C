document.addEventListener("DOMContentLoaded", function() {
  // write your javascript code below.
  // console.log("the page has loaded!");
// var givenNumber= prompt("Give me a number");
// // console.log(givenNumber);
// // console.log(typeof givenNumber)
// if(givenNumber < 4){
//   alert("this number is less than four");
// } else if (givenNumber >= 4){
//   alert("it's not less than four");
// }
// // else if (check that the datatype is an integer){
// //   alert("hey,that's not a number!");
// // }
// var age = prompt("What is your age?");
// console.log(age);
// if (age < 16){
//   alert("YOU CAN'T DRIVE!!")
// } else if (age > 16) {
//   alert("HERE'S THE KEY TO MY FERRARI")
// }
// var happyRating = prompt("Rate your Happiness on a Scale from 1 to 10");
// if (happyRating <= 5) {
//   alert("Cheer up buttercup");
// } else if (happyRating >= 5) {
//   alert("I am very happy you are having a great day");
// }
// var celebratesChristmas = prompt ("Do you celebrate Christmas?");
// if (celebratesChristmas == "yes") {
//   alert( "MERRY CHRISTMAS!!");
// } else if (celebratesChristmas == "no") {
//   alert( "Happy Holidays!");
// }
// var tacoChoice = prompt("Do you want chicken or steak tacos?")
// if (tacoChoice == "chicken") {
//   alert("chicken tacos are the best");
// } else if (tacoChoice == "steak") {
//   alert("steak tacos are the best");
// } else {
//   alert("Your item is not on the menu");
//   }
// var ncaaChamp = prompt ("Who will win the NCAA championship?");
// if (ncaaChamp == "Clemson") {
//   alert ("No way jose!");
// } else if (ncaaChamp == "Georgia") {
//   alert  ("Hell yeah baby!");
// } else if (ncaaChamp == "Oklahoma") {
//   alert ("Hell to the no!");
// } else if (ncaaChamp == "Alabama") {
//   alert ("Nick Saban sucks!");
// } else {
//   alert ("Your team sucks too much to make it to the playoffs!");
// }
var thirsty = prompt ("Are you thirsty?");
var hungry = prompt ("Are you hungry?");
if (thirsty == "yes" && hungry == "yes") {
  alert ("Here is a cookie and milk");
} else if (hungry == "yes" || thirsty == "no") {
  alert ("Here is a cookie");
} else if (hungry == "no" || thirsty == "yes") {
    alert ("Here is milk");
} else if (hungry == "no" && thirsty == "no") {
  alert ("Go away");
} else {
  alert ("Your response in invalid");
}

});