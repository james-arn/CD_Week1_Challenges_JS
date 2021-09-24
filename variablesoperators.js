//activity 1
let name = "Bob";
let age = 28;
let favourtiecolour = "orange"
console.log(`Hi, my name is ${name} and I am ${age}. My favourite colour is ${favourtiecolour}.`)

name = "Jayne"
age = 120
favourtiecolour = "pink"
console.log(`Hi, my name is ${name} and I am ${age}. My favourite colour is ${favourtiecolour}.`)

//activity 2
let breakfast = "Cereal"
let lunch = "Vodka"
let dinner = "Paintstripper"
console.log(`For today - breakfast: ${breakfast}. For lunch: ${lunch}. For dinner: ${dinner}.`);

breakfast = "paper"
lunch = "scissors"
dinner = "stone"
console.log(`For tomorrow - breakfast: ${breakfast}. For lunch: ${lunch}. For dinner: ${dinner}.`);

// activity 3 
// define days
let Birthday = new Date(2021, 11, 10);
let Today = new Date();
//Calculate difference between days
let result = Math.floor((Birthday - Today) / (1000*60*60*24))
//Set current year or the next year if you already had birthday this year
Birthday.setFullYear(Today.getFullYear());
if (Today > Birthday) {
  Birthday.setFullYear(Today.getFullYear() + 1);
}
console.log (result);

//activity 4 
//Create & assign variables
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";   
// Insert variables onto board
console.log(`  |   |  `)
console.log(`${space1} | ${space2} | ${space3}`)
console.log(`  |   |  `)
console.log(`----------`)
console.log(`  |   |  `)
console.log(`${space4} | ${space5} | ${space6}`)
console.log(`  |   |  `)
console.log(`----------`)
console.log(`  |   |  `)
console.log(`${space7} | ${space8} | ${space9}`)
console.log(`  |   |  `)

// Tuesday PM Activity 1 - racist pub simulator
let age = 20;
let country = "Italy"
if(age > 17 && country == "UK") {
    console.log("Yes I can serve you")
} else {
console.log("get out my pub")
}

//Activity 2

let topping = "cheese";

switch(topping){
    case "Extra Cheese":
    case "Onion":
    case "Peppers":
console.log(`${topping} is an important ingredient for my pizza:`);
break;
case "Sweetcorn":
case "Chicken":
    console.log(`I don't mind having ${topping} on my pizza:`);
break;
case "Gravel":
case "Spit":
console.log(`${topping} should not be on a pizza.`);
break;
    default:
        console.log("I'm not sure about that one!");
}

//activity 3
let password = "secret"
if (password.length < 8) {
    console.log("Your password is too short")
} else {
    console.log(password)
}

// Activity 3 stretch
let Num = 10
if (Num % 3 == 0 || Num % 5 == 0) {
    console.log("This number is divisible by 3 or 5.")
} else {
    console.log("This number is NOT divisible by 3 or 5")
}

// Activity 4 
let num = 10
if 
(num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz")
} else if (num % 5 == 0) {
    console.log("buzz")
} else if (num % 3 == 0) {
    console.log("fizz")
    }   else {
        console.log(num)
    }

//Activity 5
let palindrome = "lol";
let palinSplit = palindrome.split("");
let palinReverse = palinSplit.reverse("");
let palinJoin = palinReverse.join("");
if
(palindrome == palinJoin) {
    console.log("Palindrome!")
} else {
    console.log("Not a Palindrome!")
}

//Activity 6
let time = 10
let timeAtCommute = [8-9, 5-6]
let timeAtWork = 9-5
let timeAtHome = [00-9, 6-00]
if 
(time == timeAtWork) {
    console.log("I'm at work.")
} else if
    (time == timeAtCommute) {
    console.log("I'm commuting.")
} else {
    console.log("I'm at home.")
}

// Activity 7
let string = "ksefsehfflawjldwjiadw";
let stringSplit = string.split("")
console.log(stringSplit)
let stringReverse = stringSplit.reverse("")
console.log(stringReverse.indexOf("a", "e", "i", "o", "u"))

// activity 8 - create an if statement that checks if last letter same as first.
// If yes, true, if no false

let word = "word"
let firstLetter = word[0];
let lastLetter = word[word.length - 1]
if (firstLetter == lastLetter){
    console.log("True")
} else {
    console.log("False")
}

//Activity 9 - if statements
let num1 = 2
let num2 = 5
if 
((num1 + num2) % 2 == 0){
    console.log(num1 + num2)
} else {
    console.log(num1 * num2)
}