// Lecture example 1
let coffeeOrder = [
    "Alex - Cortado",
    "Ben- Cortado",
    "Charlie - Whatever's new",
];
coffeeOrder.push("Chris - Mocha")
console.log(coffeeOrder);

// Activity 1
let favouriteSongs = [
    "I feel it",
    "spilled my coffee" ,
    "I lived", ];
    favouriteSongs.unshift("ruin my life", "My Way")
    favouriteSongs.pop()
    console.log(favouriteSongs)

    //Activity 2
    let shoppingList = ["apple", "orange", "bananna",]
    shoppingList.splice(1)
    console.log(shoppingList)

// For Loops
let favDrinks = [
    "Coke",
    "Fanta",
    "Tonic",
    "Red Bull"
];
for(let i = 0; i < favDrinks.length; i++){
console.log(favDrinks[i]);
}

//Activity 1
let favouriteFilms = ["Jaws", "Jaws 2", "Jaws 3", "Jaws 4", "Jaws 5"];
favouriteFilms.push("Jaws 6", "Jaws 7")

for(let i = 0; i < favouriteFilms.length; i++){
    console.log(favouriteFilms)
}

// //Activity 2
// let randomNumber
for (let i = 0; i <= 6; i++){
    randomNumber = Math.floor(Math.random()*50-1+1);
    console.log(randomNumber)
}

//Activity 3
for (let i = 9; i >= 0; i--){
console.log(i)
}

//Activity 4 use for loop to show each film in the array
let films = ["shawshank", "shrek", "Ghostbusters", "shrek 2"];
for (let i = 0; i <= films.length-1; i++){
    // console.log(films[i])
}
// use an if statement to check if 3rd film in the array is ghostbusters.
if (films[2] == "Ghostbusters"){
console.log("Yay it's Ghostbusters.")
}
else {
console.log("Boo! We want Ghostbusters.")
}

//Activity 5
let num
for (let i = 0; i < 6; i++){ 
    num = (Math.floor(Math.random()*30));
    console.log(num)
    if (num % 7 == 0) {
        console.log(`${num} is divisible by 7`)
    } else {
        console.log(`${num} is not divisible by 7`)
}
}

//activity 6
let bobsFollowers = ["Dave", "Dan", "Jayne", "Jackie"]
let hannahsFollowers = ["Dave", "Paul", "Jayne", "Steve"]
for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < hannahsFollowers.length; j++){
if (bobsFollowers[i] == hannahsFollowers[j]) {
    console.log(bobsFollowers[i])
}}}

// Activity 7 do...while loop
For Loops
let favDrinks = [
    "Coke",
    "Fanta",
    "Tonic",
    "Red Bull"
];
for(let i = 0; i < favDrinks.length; i++){
console.log(favDrinks[i]);
}

while loop

//do while loop
let count = 0;
do {
    count++;
    console.log("Count is " + count);
} while (count < 10);

