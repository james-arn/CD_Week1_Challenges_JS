// example 1 in lecture
let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeisGrinding = false;
    } else {
        console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
    }
    }
pressGrindBeans();

// example 2 in lecture
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5))

// activity 1
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1))
    }
}
console.log(factorial(33));

//activity 2
let orderCount = 0;
const takeOrder = (toppingone, toppingtwo) => {
    orderCount++;
    console.log(`Order #${orderCount}: Pizza with ${toppingone} and ${toppingtwo}`);
    
}
takeOrder("Pineapple", "Onion");
takeOrder("apple", "BBQ")
takeOrder("Tomato", "Pepper")

//activity 3 - cash machine ching chang money comes. No loss mechanic yet

let balance = 100
let pinCheck = 1234
let gambleChoice = "yes"
let rouletteChoice = Math.floor(Math.random)
if (rouletteChoice = 1) {
    rouletteChoice = "Correct"
} else {
    rouletteChoice = "Wrong"
} 

const cashWithdrawal = (pin, amount,) => {
    if (pin != pinCheck) {
        console.log("Incorrect pin number. Please try again")
    }
    else if (amount > balance) {
        console.log(`The amount of ${amount} exceeds your balance of ${balance}. Please try a different amount.`)
    } else if ((gambleChoice = "yes") && (rouletteChoice == "Correct")) {
console.log(`Congratulations! You've doubled your money and your balance is now ${amount*2}!`)
     } else {
        console.log (`Withdrawing ${amount}...`)
    }
}
cashWithdrawal(1234, 10, "yes");