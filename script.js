document.addEventListener("DOMContentLoaded", function() {
  // write your javascript code below.
  // console.log("the page has loaded");

  // console.log(givenNumber);

  // DRIVING AGE
  // var age;
  // var redo = true;

  // while (redo) {
  //   age = parseInt(prompt("How many years have you been alive?"));
  //     if (age < 16) {
  //       alert("YOU CAN'T DRIVE!!");
  //       redo = false;
  //     }
  //     else {
  //       alert("HERE'S THE KEY TO MY FERRARI!")
  //       redo = false;
  //     }
  // }

  // HAPPY SCALE
  // var happyRating;
  // var redo = true;

  // while (redo) {
  //   happyRating = parseInt(prompt("How happy are you on a scale of 1 to 10?"));
  //     if (happyRating <= 5) {
  //       alert("TOUGH TIMES DO COME, BUT THEY DO NOT COME TO STAY!");
  //       redo = false;
  //     }
  //     else {
  //       alert("KEEP ON ROCKIN IT!")
  //       redo = false;
  //     }
  // }

  // CHRISTMAS?
  // var celebratesChristmas;
  // var redo = true;

  // while (redo) {
  //   celebratesChristmas = prompt("Do you celebrate Christmas?");
  //     if (celebratesChristmas == "Yes") {
  //       alert("MERRY CHRISTMAS!!");
  //       redo = false;
  //     }
  //     else {
  //       alert("Happy Holidays!")
  //       redo = false;
  //     }
  // }

  // TACOS
  // var tacoChoice;
  // var redo = true;

  // while (redo) {
  //   tacoChoice = prompt("Which taco do you want, chicken or steak?");
  //     if ((tacoChoice == "chicken") || (tacoChoice == "Chicken")) {
  //       alert("Chicken tacos are the best!");
  //       redo = false;
  //     }
  //     else if ((tacoChoice == "steak") || (tacoChoice == "Steak")) {
  //       alert("Steak tacos are the best!");
  //       redo = false;
  //     }
  //     else {
  //       alert("That item is not on the menu, pal!")
  //       redo = false;
  //     }
  // }

  // NCAA Championship
  // var winnerChoice;
  // var redo = true;

  // while (redo) {
  //   winnerChoice = prompt("Which team will win the CFP? Alabama, Clemson, Georgia, or Oklahoma?");
  //     if ((winnerChoice == "Clemson") || (winnerChoice == "clemson")) {
  //       alert("BOOOOOOO!");
  //       redo = false;
  //     }
  //     else if ((winnerChoice == "Georgia") || (winnerChoice == "georgia")) {
  //       alert("SEC is the real deal in College Football!");
  //       redo = false;
  //     }
  //     else if ((winnerChoice == "Oklahoma") || (winnerChoice == "oklahoma")) {
  //       alert("Heisman to the Patriots! Baker is a baller!");
  //       redo = false;
  //     }
  //     else if ((winnerChoice == "Alabama") || (winnerChoice == "alabama")) {
  //       alert("ROOOOLLLL TIDE!! LET'S GO BAMA!! Nick Saban is the Tom Brady of College Football Coaches!");
  //       redo = false;
  //     }
  //     else {
  //       alert("Make sure you select one of the top 4 teams as prompted!")
  //       redo = false;
  //     }
  // }

  // THIRSTY?/HUNGRY?
  var hungry = prompt("Are you hungry?");
  var thirsty = prompt("Are you thirsty?");
  var redo = true;

  while (redo) {
      if ((hungry == "Yes") && (thirsty == "Yes")) {
        alert("Here's some cookies and milk");
        redo = false;
      }
      else if ((hungry == "Yes") && (thirsty == "No")) {
        alert("Here's a cookie!");
        redo = false;
      }
      else if ((hungry == "No") && (thirsty == "Yes")) {
        alert("Here's some milk!");
        redo = false;
      }
      else if ((hungry == "No") && (thirsty == "No")) {
        alert("GO AWAY THEN!");
        redo = false;
      }
      else {
        alert("Please enter valid responses to see what you shall receive to satisfy your needs!")
        redo = false;
      }
  }

});