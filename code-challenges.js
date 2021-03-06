// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.
const divisibleByThree = (num) => {
	return ( num%3 === 0 ? `${num} is divible by three` : `${num} is not divisible by three`)
}

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


console.log(divisibleByThree(num1))
console.log(divisibleByThree(num2))
console.log(divisibleByThree(num3))



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const upperCaseNouns = (arr) => {
	return arr.map(function(string){
		return string.charAt(0).toUpperCase() + string.substring(1);
	})
}

console.log(upperCaseNouns(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//filter through the numbers and then use sort to orger it by
const numsOnly = (arr) => {
	let nums = arr.filter(element => typeof element === "number").sort((a,b) => a - b);
	return nums;
}
console.log(numsOnly(mixedDataArray));



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3
const firstVowelIndex = (string) => {
	let vowels = "aeiou";
	for(let i = 0; i < string.length; i++){
		if(vowels.includes(string[i]))
			return i;
	}
}

console.log(firstVowelIndex(vowelTester1));
console.log(firstVowelIndex(vowelTester2));


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, exp, num2) => {
	if(exp === "+") return num1+num2;
	else if(exp === "-") return num1 - num2;
	else if(exp === "*") return num1 * num2;
	else {
		if(num2 === 0) return "Can't divide by 0"
		else return num1 / num2;
	}
}



// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
