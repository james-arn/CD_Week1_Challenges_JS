//example 1
const person = {
    name: "James",
    age: 28
}
console.log(person.name)
console.log(person.age)
person.songs = ["good song 1", "song 2"];
console.log(person.songs);

// example 2
let offer = "none";
let time = 1200;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
      "Cappucino",
      "Latte",
      "Filter Coffee",
      "Tea",
      "Hot Chocolate"
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",

  openCafe(){
    if (hasSpecialOffers){}
    return "Time for a special offer!";
}
}
closeCafe(){
    return "We are closed, come back tomorrow";
}

console.log(cafe.openCafe());
console.log(cafe.closeCafe());

// example 3 alarm
let alarmMessage = "";
let day = "Monday";

const alarmClock = {
  weekendAlarm: "No alarm needed",
  weekdayAlarm: "Get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
  alarmMessage = alarmClock.weekendAlarm;
  console.log(`Hello Chris: ${alarmMessage}.`)
} else {
  alarmMessage = alarmClock.weekdayAlarm;
  console.log(`Hello Chris: ${alarmMessage}.`)
}

//activity 1
const person = {
    name: "James",
    age: 28,
    
sayHi(){
    return(`Hello, my name is ${person.name}`)
}
}
console.log(person.sayHi());
console.log(person.drink());

//activity 2
const pet = {
    name: "Bob",
    typeOfPet: "Budgie",
    age: "2",
    colour: "Yellow"
}
pet.eat = `${pet.name} is eating`;
pet.drink = `${pet.name} is drinking`;

console.log(pet.eat)
console.log(pet.drink)

//activity 3

const coffeeShop = {
    branch: "Manchester",
    drinksWithPrices: [
        ["Latte", "Cappuccino", "Tap Water"],
        [2.00, 2.50, 5.00],
    ],
    foodWithPrices: [
        ["Sludge", "Salad"],
        [10.00, 1.00],
    ],

    order(){
        return(`Your ${coffeeShop.branch} coffee shop order is: 
        Drinks: ${coffeeShop.drinksOrdered}, ${coffeeShop.drinksWithPrices[1][0]}
        Food: ${coffeeShop.foodOrdered}, ${coffeeShop.foodWithPrices[1][0]}
        Total cost: (${coffeeShop.drinksWithPrices[1][0]} + ${coffeeShop.foodWithPrices[1][0]})
        Thanks for your custom.`)
    }
}

coffeeShop.drinksOrdered = "Latte"
coffeeShop.foodOrdered = "Sludge"
console.log(coffeeShop.order())