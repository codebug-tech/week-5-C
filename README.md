# IF ELSE STATEMENTS

```JavaScript
if(condition){
  // do this;
} else {
  // do this;
};
```

##### Setup
- Open `index.html` in Google Chrome
- Open the developers tools console. See the steps below if you forget how to get there:
  - Right click on your webpage in chrome
  - Choose "Inspect"
  - Make sure you on viewing the "Console"
- Look in the `script.js` file. 
  - Add a line in the `script.js` file that says `console.log('Test!')`
- Refresh your page in Chrome. You should see the word Test! in the developer tools console. This means that everything is set up correctly.
- Delete the `console.log('Test!')` now that we know everything is working

#### Let's go
> You will be writing some JavaScript if/else statements to control the response to the users.

##### DRIVING AGE
-  Write a [`prompt()`](https://www.w3schools.com/jsref/met_win_prompt.asp) to ask the user for their age.
- Save the `prompt()` as a variable called `age`
- Write an if/else statement:
  - **IF** the age is less than 16 use `alert()` to tell the user "YOU CAN'T DRIVE!!"
  - **ELSE** use `alert()` to tell the user "HERE'S THE KEY TO MY FERRARI!"
- Check to make sure your code works.
- If everything works, comment out your code.

##### HAPPY SCALE
- Write a `prompt()` to ask the user to rate their happiness on a scale of 1 to 10.
- Save the `prompt()` as a variable called `happyRating`
- Write an if/else statement:
  - If the `happyRating` is less than or equal to 5, use `alert()` to give the user some inspirational words.
  - Otherwise, tell the user how happy you are that they are having a good day.
- Check to make sure your code works.
- If everything works, comment out your code.

##### CHRISTMAS?
- Ask the user if they celebrate Christmas.
- Save their response as a variable called `celebratesChristmas`
- If the celebrate Christmas. Tell them, "MERRY CHRISTMAS!!" otherwise, say "Happy Holidays!"
- Check to make sure your code works.
- If everything works, comment out your code.


##### TACOS
- Ask the user which taco they want: chicken or steak.
- Save the response in a variable.
- **This one is different! Do you see why?** We will need to use an if/else if/else statement now. 
- Write an if/else if/else statement
  - **IF** the user says chicken, tell them the chicken tacos are the best.
  - **ELSE IF** the user says steak, tell them the steak tacos are the best.
  - **ELSE** tell the user their item isn't on the menu.
- Check to make sure your code works.
- If everything works, comment out your code.

##### WHO WILL WIN THE NCAA CHAMPIONSHIP?
- Ask the user who will win the NCAA championship (Clemson, Okalahoma, Georgia, or Alabama).
- Save the response in a variable
- Write an if/else if/else statement
  - If the user says Clemson, respond accordingly
  - Else if the user says Oklahoma, respond accordingly
  - Else if the user says Georgia, respond accordingly
  - Else if the user says Alabama, respond accordingly
  - Else (if) the user picks and invalid option, respond accordingly
- Check to make sure your code works.
- If everything works, comment out your code.


##### THIRSTY?/HUNGRY?
- Ask the user if they are hungry.
- Save the response as a variable.
- Ask the user if they are thirsty.
- Save the response as a variable.
- The if/else if/else statements:
>(*hint* you will be using the `&&` and `||` symbols for this one.)
  - If the user is hungry and thirsty, give them a cookie and milk. 
  - If the user is hungry but not thirsty, give them a cookie
  - If the user is not hungry but is thirsty, give them milk
  - If the user is not hungry and not thirsty, tell them to go away.
  - Else tell the user they entered an invalid response.


