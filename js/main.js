// Load challenges from localStorage or use default examples
function loadChallenges() {
  const saved = localStorage.getItem("codeChallenges");
  if (saved) {
    return JSON.parse(saved);
  }
  // 365 day templates for 2025
  return [
    {
      day: 1,
      date: "Jan 1, 2025",
      code: `// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2 = 9(1+4+4 = 9)

//P: only ints? 
//R: Returns a number that takes all arr elements, squares them and adds them
//E: [1,2,2] -> 9
//   [2,4,4] -> 4+16+16 = 36
//   [0,5,5] -> 0+25+25 = 50
//P: make a funciton that takes in an array. Loop through the array and square each element then add them all up.

function completeSquare(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + Math.pow(arr[i], 2)
    }
    return sum
}


`,
    },
    {
      day: 2,
      date: "Jan 2, 2025",
      code: `// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

//P: takes in a string, always strings
//R: expects "name" + plays banjo or name + does not play banjo
//E: Robert plays banjo
//   Sergio does not play banjo
//P: create a function that takes in a str. Use and if statement to see if name starts with an R or r. i just realized i have to split and join.

function areYouPlayingBanjo(name){
    if(name[0] == 'r' || name[0] == 'R')
        return name + " plays the banjo"
    else
        return name + " does not play the banjo"
}

console.log(areYouPlayingBanjo('Andrew'), 'Andrew does not play the banjo')
console.log(areYouPlayingBanjo('Robert'), 'Robert plays the banjo')

`,
    },
    {
      day: 3,
      date: "Jan 3, 2025",
      code: `//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//P: some value is param, but it cant be string
//R: returns the value *50 and +6
//E: 2 -> 106
//   4 -> 206
//P:  make a funciton that takes in a number. check for not a number and if true return "Error". multiply it by 50 and add 6 return it. 

function problem(x){
    if(typeof x != 'number')
        return "Error"
    else{
        return x*50 +6
    }
}

console.log(problem(2), 106)
console.log(problem(4), 206)

`,
    },
    {
      day: 4,
      date: "Jan 4, 2025",
      code: `// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// */

function solution(str){
    return str.split("").reverse().join("") 
   }

   console.log(solution("Hello"))


`,
    },
    {
      day: 5,
      date: "Jan 5, 2025",
      code: `// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".



//TERNARY; VERY COOL
function hoopCountTernary(n){
    return (n>=10) ? "Great now move on to the tricks" : "do some more practice"
}
//NORM
function hoopCount (n) {
    if (n>=10)
      return "Great, now move on to tricks"
    else
      return "Keep at it until you get it"  
  }

console.log(hoopCount(14), "Great, now move on to tricks")
console.log(hoopCount(9), "do some more practice")

console.log(hoopCountTernary(11))

`,
    },
    {
      day: 6,
      date: "Jan 6, 2025",
      code: `// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
    let countPositives = 0
    let sumNegatives = 0
    
    if (!input || input.length === 0) return []

    for(let i = 0; i < input.length; i++){
      if (input[i] > 0){
        countPositives++
      }
      else
        sumNegatives = sumNegatives + input[i]
    }
    
    return [countPositives, sumNegatives]
    
  }

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

`,
    },
    {
      day: 7,
      date: "Jan 7, 2025",
      code: `// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function () {
  return this.split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
};

const str = "hello world";
console.log(str.toJadenCase(), "Hello World");


`,
    },
    {
      day: 8,
      date: "Jan 8, 2025",
      code: `// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes

//     The number can be negative already, in which case no change is required.
//     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//P: number can already be negative? but we are looking for positives to make negative.
//R: return a negative number. if 0 return 0 if already negative do nothing
//E: 1 -> -1
//   2 -> -2
//   -1 -> -2
//   0 -> 0
//P: create a function that takes in an int. if > 0 multiply by -1 to make negative.

function makeNegative(num){
    if(num > 0)
        num = num * -1

    return num
}

console.log(makeNegative(1))

`,
    },
    {
      day: 9,
      date: "Jan 9, 2025",
      code: `// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//P: takes in two integers
//R: returns an array of all the integers between the two inputed. Including the ones input
//E: 1,3 -> [,1,2,3]
//   6,12 -> [6,7,8,9,10,11,12]
//P: create a funciton that takes in 2 ingegers while int1 is > int2 map a new array with all those numbers inside it and such

function between(a, b){
    const arr = []
    while(a<=b){
        arr.push(a)
        a++
    }
    return arr
}

console.log(between(1,100))



`,
    },
    {
      day: 10,
      date: "Jan 10, 2025",
      code: `// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//P: we will recieve a bool aka true or false but not a string 
//R: return a string "true" if true or a sting "false" if false
//E: true "true"
//   false "false"
//P: create a function that takes in a bool(true or false), if true return "true"

function booleanToString(b){
    return (b === true) ? "true" : "false"
}

//ez


`,
    },
    {
      day: 11,
      date: "Jan 11, 2025",
      code: `// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//P: two integers.
//R: returns a string of binary "010101"
//E: 1,1 1+1 = 2 so return "10"
//   5,9 5+9 = 14 so return "1110"
//P: create a function that takes in two numbers. declare variable sum, sum = a+b. then to string to get integer value in  base 2

function addBinary(a,b){
    let sum = a+b
    return sum.toString(2)
}

console.log(addBinary(5,9), "1110")


`,
    },
    {
      day: 12,
      date: "Jan 12, 2025",
      code: `// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//P; find and replace. Input is a string of 'A''T''C''G' does length matter?
//R: returns the complenet of the inputed string
//E: "CG" -> "GC"
//   "ATTGC" --> "TAACG"
//P: create a function that takes in a string of ATCG. Replace A with T and G with C and vice versa.

function dnaStrand(dna){
    let dnaArr = dna.split("")
    for(let i = 0; i < dnaArr.length; i++){
        switch(dnaArr[i]){
            case 'A':
                dnaArr[i] = 'T'
            break;
            case 'T':
                dnaArr[i] = 'A'
            break;
            case 'C':
                dnaArr[i] = 'G'
            break;
            case 'G':
                dnaArr[i] = 'C'
            break;
        }
    }
    return dnaArr.join("")
}
console.log(dnaStrand("ATTGC"), "TAACG")



`,
    },
    {
      day: 13,
      date: "Jan 13, 2025",
      code: `// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//P: Expects an array of ints with all the ints except for 1 guy. always odd is strange
//R: returns the number thats different
//E: [3,4,3,3,3] returns 4
//   [1,1,1,1,1,1,10] returns 10
//P: create a function that takes in an array. loop through it and create if statements to check if [i] is the same as [i+1]


function stray(numbers) {
    let sorted = numbers.sort()
        if(sorted[0]!= sorted[1])
            return sorted[0]
        else
            return sorted[sorted.length-1]

}

console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3)
`,
    },
    {
      day: 14,
      date: "Jan 14, 2025",
      code: `// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//P: expects a sting with a space separating two words
//R: returns a 2 worded string
//E: "andrew schwarte" -> "schwarte andrew"
//P: create a funciton that takes in a string. split the string using " " space delimiter, reverse it, and join it.

function nameShuffler(str){
    let reversed = str.split(" ").reverse().join(" ")
    return reversed
}

console.log(nameShuffler("andrew schwarte"), "schwarte andrew")

`,
    },
    {
      day: 15,
      date: "Jan 15, 2025",
      code: `// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

//P: interger as an input, round to the next one
//R: returns an integer multiple of 5
//E: 5->5
//   6->10
//   99->100
//P: create a function that takes in an int. test to see if % 5 = 0, if true return it, if false do more logic. let me think... if 12%5 is 2

function roundToNext5(n){
    while(n%5!=0){
        n++
    }
    return n
}

console.log(roundToNext5(6),10)

`,
    },
    {
      day: 16,
      date: "Jan 16, 2025",
      code: `
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//too easy for prep but well do it anyway
//P: takes in an age between 0 and 21 or more
//R: return a string of drink + something
//E: 
//P: create a function that takes in an age. do a bunch of if statments

function peopleWithAgeDrink(old) {
    if(old < 14)
        return "drink toddy"
    else if(old < 18)
        return "drink coke"
    else if(old < 21)
            return "drink beer"
    else
        return "drink whisky"
}

console.log(peopleWithAgeDrink(21))

`,
    },
    {
      day: 17,
      date: "Jan 17, 2025",
      code: `// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


//P: an array passed in at least 4 ints. 
//R: returns 1 int. the sum of the lowest two
//E: [1,2,3,4] returns 3
//P: create a function that takes in an array. create a variable for sum. sort the array numerically.

function sumTwoSmallestNumbers(numbers){
    numbers.sort(function(a,b){return a - b})
    sum = numbers[0] + numbers[1]
    return sum
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]), 7)

//tough one. I had to look up how to sort numerically becasue sort method sort() sorts alphabetically. so an array [19, 5, 42, 2, 77] would return [19,2,43,5,77]. get it?

`,
    },
    {
      day: 18,
      date: "Jan 18, 2025",
      code: `// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//P: takes in a list of strings in this format ['a', 'b', 'c']
//R: returns an array with with format n: string per element.
//E: ["pizza", "chocolate", "burger"] -> ["1: pizza", "2: chocolate", "3: burger"]
//P: create a function that takes in an array. Probably need to do some map business and use like n + 1 as delimiter or so but idrk...


// function number(array){
//     let prepended = []
//     for(let i = 0; i < array.length; i++){
//         prepended.push
//     }
//     return prepended
// }

// console.log(number(["a", "b", "c"]))

//couldve used map but decided to go with for loop and push. need more practice with map the syntax isnt clicking for me yet.

`,
    },
    {
      day: 19,
      date: "Jan 19, 2025",
      code: `// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: Always integers? Are we going to get other characters? Ever an empty arr?
//R: Return a new array with each value double
//E: if we are given [2,3,4] should return [4,6,8]
//   if we are given [4,5,6] should reutn [8,10,12]
//   if we are given [2,22] should return [4,44]
//P: make a function that takes in a array
//   map through the array and multiply each element by 2

function doubled(arr){
    return arr.map(e=>e*2)
}

doubled([1,2,3])
console.log(doubled([2,3,4]),[4,6,8])
`,
    },
    {
      day: 20,
      date: "Jan 20, 2025",
      code: `// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P: sum of elements is even or odd. 
//R: return a string "odd" or "even"
//E: [1,2,3] sum is 6 so "even"
//   [1,2] sum is 3 so "odd"
//P: create a function that takes in an array. sum = 0if array is empty retun even becuase [0] is even. sum the array and then do some modulus logic stuff. return even or odd

function oddOrEven(array){
    let sum = 0
    for(let i = 0; i< array.length; i++){
        sum = sum + array[i]
    }
    if (sum % 2 == 0)
        return "even"
    else
        return "odd"
}



`,
    },
    {
      day: 21,
      date: "Jan 21, 2025",
      code: `// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
// Examples ( Input --> Output )

// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

//P: integer n such that sqrt(n) is also an integer. Return -1 if not perfect square.
//R: return the next perfect square, the one that comes immeidtaley after, or return -1
//E: 25 -> 36
//   81 -> 100
//   20 -> -1
//P: create a function that takes in an integer. Check to see if the square root of the integer is chill. if not return -1. if it is chill, then 
 




function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let next =0 
    if(Math.sqrt(sq) < 0 || Math.sqrt(sq) % 1 != 0)
    return -1;
    else 
        next = (Math.sqrt(sq) + 1) 
        next = next * next
        return next
  }
  

  console.log(findNextSquare(25), 36)

`,
    },
    {
      day: 22,
      date: "Jan 22, 2025",
      code: `// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"


//P: see wikipedia... really!? Two arguments are strings, case insensitive so going to be using toLower.
//R: return true or false depending if it is an anagram (true) or not (false).
//E: (foefet, toffee), true
//   (Buckethead, DeathCubek) true
//   (andrew, luis) false
//P: create a function that takes in two strings. toLower the arguments. Check if they are of equal length. Anagram logic.


function isAnagram(test, original){
    let testLower = test.toLowerCase()
    let originalLower = original.toLowerCase()
    
    if(testLower.length != originalLower.length)
        return false
    let testLowerArr = testLower.split("")
    let originalLowerArr = originalLower.split("")
    testLowerArr.sort()
    originalLowerArr.sort()
    let sortedTest = testLowerArr.join("")
    let sortedOriginal = originalLowerArr.join("")

    if(sortedTest === sortedOriginal){
        return true
    }else
        return false

}

console.log(isAnagram("andrew", "werdna"))

//this could have been a lot better but i tried...

`,
    },
    {
      day: 23,
      date: "Jan 23, 2025",
      code: `/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

P: takes an array of ints. always ints and array length always >= 2. 
R: returns the two indices of the numbers that when sumed together give the target
E: ([1,2], 3) returns [0,1]
   ([4,6,7,9,10], 13) returns [1,2] becasue 6 at index 1 and 7 at index 2
P: create a function that takes in an array and an int target. 
*/


function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
       for(let j = i + 1; j < numbers.length; j++){
        if (numbers[i] + numbers[j] === target) 
            return [i, j]
       }
    }
}

console.log(twoSum([4,6,7,9,10], 13), [1,2])

`,
    },
    {
      day: 24,
      date: "Jan 24, 2025",
      code: `// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a,b){
    let arr = []
    let sum = 0

    if(a<=b)
        while(a<=b){
        arr.push(a)
        a++
    }else
        while(b<=a){
            arr.push(b)
            b++
        }
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        }
    return sum

}

console.log(getSum(5,1), 15)

//kinda tricky but we got there in the end

`,
    },
    {
      day: 25,
      date: "Jan 25, 2025",
      code: `// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

/*looks fun lets give it a go

P: eyes : ; required
   nose - ~ optional
   mouth D ) required
   arr as an argument with ajacent characters that are smiley faces
R: returns a number. number of **valid** smiley faces in the array
E: [:)] should return 1
   [:),:-),:~D. ;D. :}, :D] should return 5
   [':)', ';(', ';}', ':-D'] shoudl return 2
P: alrrright here we go. create a function that takes in an array of strings > 1. i need a way to check the strings at each element in the array. something like if(the string at arr[i=0] starts with a : or ends with a ) or includes a ~ or something like that.
*/

function countSmileys(arr){
  
    let temp = []
    let count = 0
  
  for(let i = 0; i < arr.length;i++){
    
    temp.push(arr[i])
    temp = temp.toString()
    temp = temp.split('')
    if(temp.length < 3 && (temp[0] === ';' || temp[0] === ':') && (temp[1] === ')' || temp[1] === 'D')){
        count++
        temp.length = 0

    }else if(temp.length === 3 && (temp[0] === ';' || temp[0] === ':') && (temp[1] === '-' || temp[1] === '~') && (temp[2] === ')' || temp[2] === 'D')){
        count++
        temp.length = 0
    }else
        temp.length = 0
}
return count
}

console.log(countSmileys([';D', ':(', ':)', ';D']), 3)

`,
    },
    {
      day: 26,
      date: "Jan 26, 2025",
      code: `// Day 26 - Jan 26, 2025
// Add your code here

`,
    },
    {
      day: 27,
      date: "Jan 27, 2025",
      code: `// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 
/*
P: how do i know what 3 numbers is a valid triangle? so if the two smaller numbers sumed is larger than the largest number, than it can be a triangle i see
R: returns true or false depending on if 3 params could make a triangle.
E: 
P: create a function that takes in 3 numbers: a,b,c. find the largest of the three. if A > b && A > c -> A = largest. sum the others and compare 
*/

function isTriangle(a,b,c){
    if(a <= 0 || b <= 0 || c<= 0)
        return false
    if((a >= b && a >= c) && (a < (b+c)))
        return true
    else if((b >= a && b >= c) && (b < (a+c)))
        return true
    else if((c >= a && c >= b) && (c < (a+b)))
        return true
    else
        return false
}

console.log(isTriangle(1,2,2))

`,
    },
    {
      day: 28,
      date: "Jan 28, 2025",
      code: `// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).
/*

P: # of days. the two cases are 7 or more days and 3 or more days
R: returns total amount
E: 2 days = $80 --> 40x2
   3 days = $100 --> 40x3 = 120 - 20(discount) = 100
   7 days = $230 --> 40x7 = 280 - 50(discount) = 230
 P: create a function that takes in a number of days. Do some comparisons for the sweet deal. return the amount
*/

function rentalCarCost(d){
    let total = d * 40;
    if(d>=3 && d<7)
        total -= 20
    else if(d>=7)
        total -=50
    
    return total
}

console.log(rentalCarCost(3))


`,
    },
    {
      day: 29,
      date: "Jan 29, 2025",
      code: `// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
/*
P: Create a funciton that takes in all 4 of principle, interest, tax, and desired. The princeiple is how much Mr. Scrooge wants to invest. Interest is a decimal, as is tax. Tax is only applied to what is made on that year. see example
R: returns the number of years until desired amount is achieved
E: start with $1000. 0.05 interest means it goes to 1050. then taxed .18 but not the whole thing, only on the amount made. Scrooge made $50 that year so tax .18 of 50 which is 9. Amount after year 1 is 1041.
P: create a funciton with 4 arguments, P, I, T, D.
*/

function calculateYears(principal, interest, tax, desired){
    let years = 1
    let interestForYear = (principal * interest) //50
    let taxForYear = (interestForYear * tax) //9
    let total = (interestForYear - taxForYear) + principal
    if(desired == principal)
        return 0
    while(total < desired){
        interestForYear = total * interest //52.05
        taxForYear = (interestForYear * tax) //9.369
        total = (interestForYear - taxForYear) + total
        years++
    }
    return years
}

console.log(calculateYears(1000.00, 0.05, 0.18, 1100.00))


`,
    },
    {
      day: 30,
      date: "Jan 30, 2025",
      code: `// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
/* 

P: takes in an int
R: returns an array of powers of two until n
E: 
P: create a function that takes in an int. create an array from 0 to n. iterate through it and math.pow,2*/

function powersOfTwo(n){
    let arr = []
    for(let i = 0; i <= n; i++){
        arr.push(Math.pow(2,i))
    }
    return arr
}
console.log(powersOfTwo(2))

`,
    },
    {
      day: 31,
      date: "Jan 31, 2025",
      code: `function grow(x){
    let result = 1
    result = x.reduce((accumulator, currentValue) => accumulator * currentValue)
    return result
}

console.log(grow([5,5,5]))

`,
    },
    {
      day: 32,
      date: "Feb 1, 2025",
      code: `// A square of squares

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task

// Given an integral number, determine if it's a square number:

//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples

// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false


function isSquare(n){
    let root = Math.sqrt(n)
    if(n === 0)
      return true
    else if(n % root === 0)
      return true;
    else 
      return false
  }

  console.log(isSquare(64))

`,
    },
    {
      day: 33,
      date: "Feb 2, 2025",
      code: `// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 -> 8^1 + 9^2 -> 8 +81 -> 89

// The next number in having this property is 135

// See this property again: 135
// Task

// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples

// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

// 90, 100 --> []

// Enjoy it!!
/*

P: hmm. we are taking in a range of digits. Something like 1 to 100. We need to output all the numbers that satisfy the condition. 
R: Returns an array of all numbers in the range that satisfy the condition.
E: Input: 1,10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9] all one digit numbers are included.
   Input: 50,100 -> [89]
   input: 20-200 -> [89,135]
P: create a function that takes in two integers as a range. create a list from the entire range
*/

function sumDigPow(a, b){
    let arr = []
    let result = []
    let digit = []
    let final = []
    let powered
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    for(let j = 0; j < arr.length; j++){
        digit = arr[j].toString().split('').map(Number)
        for(let k = 0; k < digit.length; k++){
            powered = Math.pow(digit[k], k+1)
            result.push(powered)
        }
        sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        if(sum === arr[j])
            final.push(arr[j])
        result.length = 0
    }
    return final
}
console.log(sumDigPow(89,100))

//doozy

`,
    },
    {
      day: 34,
      date: "Feb 3, 2025",
      code: `// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //...
    let lowerCase = string.toLowerCase()
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    for(let letter of letters){
    if(!lowerCase.includes(letter))
        return false
    }
    return true
  }
  console.log(isPangram("hello"))


`,
    },
    {
      day: 35,
      date: "Feb 4, 2025",
      code: `function isSingleton(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] === str[i+1])
            count++
    }
    if(count === str.length-1)
        return true
    else 
        return false
}

console.log(isSingleton('ssss'))




`,
    },
    {
      day: 36,
      date: "Feb 5, 2025",
      code: `//f(x) = |x-3| + 3x -1

function f(x){
    let absoluteValue = Math.abs(x - 3)
    let right = (3 * x) - 1
    let result = absoluteValue + right 
    return result
}

/* SCHEME
(define (f x)
  (let* ((absoluteValue (abs (- x 3)))
         (right (- (* 3 x) 1))
         (result (+ absoluteValue right)))
    result))
*/

/* LISP
(defun f (x)
  (let* ((absoluteValue (abs (- x 3)))
         (right (- (* 3 x) 1))
         (result (+ absoluteValue right)))
    result))
*/

function factorial(n){
    if(n === 0)
        return 1
    return n * factorial(n-1)
}
console.log(factorial(5))

function fib(n){
    let result
    if(n <= 1)
        return n
    return fib(n-1) + fib(n-2)
}



`,
    },
    {
      day: 37,
      date: "Feb 6, 2025",
      code: `// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
/*
P: takes in 2 strings. str and end,
R: returns true or false
E: ('andrew', 'rew'), true
   ('matthew123', '123'), true
   ('1234', '5'), false
P: create a function that takes in a str and an ending. probably using char at and count how long strings are.
*/ 

function solution(str, ending){
    let strRev = str.split('').reverse()
    let endingRev = ending.split('').reverse()
    if (endingRev.length === 0)
        return true
    for(let i = 0; i < endingRev.length; i++){
        if(endingRev[i] != strRev[i])
            return false
        else if(i === endingRev.length -1 &&  endingRev[i] === strRev[i])
            return true
    }
}

console.log(solution("andrew", "mathrew"))

//wow look at this

function solutionEz(str, ending){
    return str.endsWith(ending);
  }

`,
    },
    {
      day: 38,
      date: "Feb 7, 2025",
      code: `// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//P: takes in 1 integer
//R: returns an array
//E: n=5 --> [5,4,3,2,1]
//P: create a function that takes in an int. create an array from 1 to n. for loop and push. then reverse

function reverseSeq(n){
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr.reverse()
}

console.log(reverseSeq(5))

`,
    },
    {
      day: 39,
      date: "Feb 8, 2025",
      code: `//------------------------1.
function getVolume(radius){
    volume = 4/3 * Math.PI * Math.pow(radius, 3)
    return volume
}

console.log(getVolume(3))

//-----------------------3.
function pop(arr){
    arr.length = arr.length - 1
    return arr
}

console.log(pop([1,2,3,4,]))

//-----------------------4.

function numberOfZeroes(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0)
          count++
    }
    return count
}

console.log(numberOfZeroes([1,2,3,4,0,0,0,0,3,3,5,6,7]))

//----------------------6.

function reverse(lst){
    let reversed = lst.split('').reverse().join('')
    return reversed
}
console.log(reverse(['asd']))

//----------------------7.

function quadratic(a,b,c){

}


`,
    },
    {
      day: 40,
      date: "Feb 9, 2025",
      code: `// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// Examples:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    let sArr = s.split('')
    let even
    let middle = sArr.length / 2
    middle = Math.floor(middle)
    if(sArr.length % 2 != 0)
      return sArr[middle]
    else 
      return
      
}

console.log(getMiddle(""))

`,
    },
    {
      day: 41,
      date: "Feb 10, 2025",
      code: `// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

function gimme (triplet) {
    let fixed = triplet
    sorted = triplet.sort()
    let middle = sorted[1]
    // for(let i = 0; i < fixed.length; i++){
    //     if(fixed[i] === middle)
    //         return i
    // }
    return fixed
}

console.log(gimme([2, 3, 1]))

`,
    },
    {
      day: 42,
      date: "Feb 11, 2025",
      code: `// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
    let arr = []
    let str = String(num)
    for(let i = 0; i < str.length;i++){
        arr.push(Number(str[i]))
    }
    for(let i = 0; i < arr.length;i++){
        arr[i] = arr[i] * arr[i]
    }
    let result = arr.join('')
    return Number(result)
 }

squareDigits(9119)

`,
    },
    {
      day: 43,
      date: "Feb 12, 2025",
      code: `// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
    let arr = []
    let str = String(num)
    for(let i = 0; i < str.length;i++){
        arr.push(Number(str[i]))
    }
    for(let i = 0; i < arr.length;i++){
        arr[i] = arr[i] * arr[i]
    }
    let result = arr.join('')
    return Number(result)
 }

squareDigits(9119)
`,
    },
    {
      day: 44,
      date: "Feb 13, 2025",
      code: `// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

/*
P: we get a string of characters
R: returns a string that contains chars from a and b. Only 1 from each tho! and the longest possible. And in order!
E: a = "aaabbbcccddd" -> "abcd"
P: create a function that takes in 1 or 2 strings. find a way to combine cancate both strings. I have an idea. then loop sort the string in alphabetical order. Then find duplicates.
*/

function longest(a, b) {
  let c = "";
  let sorted;
  let result = [];
  if (b != null) c = a + b;
  else c = a;
  sorted = c.split("").sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] != sorted[i + 1]) result.push(sorted[i]);
  }
  return result.join("");
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");


`,
    },
    {
      day: 45,
      date: "Feb 14, 2025",
      code: `// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] 

// 'b***i***t***c***o***i***n'

function twoSort(s) {
    let sorted
    let first
    sorted = s.sort()
    first = s[0]
    return first.split('').join('***')
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] )

`,
    },
    {
      day: 46,
      date: "Feb 15, 2025",
      code: `// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

/*
P: takes in a list of strings in an []
R: returns an array with the geese removed.. wtf are geese. nvm i got it these are the geese -> 
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
E: ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] returns ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
P: create a function tha ttakes in a list of strings aka []. if array contains ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"] take them out. inclides() is gonna be it here
*/

function gooseFilter(birds){
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(bird => !geese.includes(bird));
}

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])

`,
    },
    {
      day: 47,
      date: "Feb 16, 2025",
      code: `// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

/*
P: takes in an array of hunk junk but one "needle".
R: returns "found the needle at position {x}" whatever that may be.
E: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
P: create a function that takes in an array. indexOf?
*/

function findNeedle(haystack){
    let n = (haystack.indexOf("needle"))
    return 
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])

`,
    },
    {
      day: 48,
      date: "Feb 17, 2025",
      code: `// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

// Note: Zero should be left as it is.
// // 

/*
P: given a number
R: returns a number but without ending zeroes
E:  1450   -> 145
 960000 -> 96
 1050   -> 105
 -1050  -> -105
 0      -> 0   0s should be left at zero
P: create a function that takes in a number then pop some zeroes
*/

function noBoringZeros(n){
    let result
    if (n  === 0)
        return 0
    arr = n.toString().split('')
    while(arr[arr.length-1] === '0')
        arr.pop()
    return Number(arr.join(""))
}

noBoringZeros(1450)

`,
    },
    {
      day: 49,
      date: "Feb 18, 2025",
      code: `// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    switch(number) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return  'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
      default:
        return 'Unknown number';
    }
  }

  

`,
    },
    {
      day: 50,
      date: "Feb 19, 2025",
      code: `// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
  }

`,
    },
    {
      day: 51,
      date: "Feb 20, 2025",
      code: `// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    if(nums === null) {
      return [];
    }
    for(let i = 0; i < nums.length; i++) {
      if( nums[i] > nums[i + 1]) {
        let newNum = nums[i]
        nums[i] = nums[i + 1];
        nums[i + 1] = newNum
        solution(nums);
      }
    }
    return nums;
  }

`,
    },
    {
      day: 52,
      date: "Feb 21, 2025",
      code: `// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
    let caps = [];
      for(let i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) 
        caps.push(i);
    }
    return caps;
  };

  

`,
    },
    {
      day: 53,
      date: "Feb 22, 2025",
      code: `// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return Number(inputString[0]);
  }

`,
    },
    {
      day: 54,
      date: "Feb 23, 2025",
      code: `// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    return 180-(a+b);
  }

`,
    },
    {
      day: 55,
      date: "Feb 24, 2025",
      code: `// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = data => {
    let getOpenOrSenior = [];
    for(i=0; i<data.length; i++){
      if(data[i][0]>=55 && data[i][1]>7){
        getOpenOrSenior.push("Senior");
      }else{
        getOpenOrSenior.push("Open");
      }
    }
    return getOpenOrSenior;
  }

`,
    },
    {
      day: 56,
      date: "Feb 25, 2025",
      code: `// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).
// Examples

// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

function countBy(x, n) {
    let z = []
    for (let i = 1; i <= n; i++) {
      z.push(x* i);
    }
    return z
  }

`,
    },
    {
      day: 57,
      date: "Feb 26, 2025",
      code: `// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []

// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

//use filter??

function friend(friends){
    return friends.filter(value => value.length === 4);
  }

  


`,
    },
    {
      day: 58,
      date: "Feb 27, 2025",
      code: `// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

`,
    },
    {
      day: 59,
      date: "Feb 28, 2025",
      code: `// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

`,
    },
    {
      day: 60,
      date: "Mar 1, 2025",
      code: `// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// Examples

// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
    let diamond = ''
    if(n % 2 == 0 || n < 0)
        return null
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(1 * i - 1);
    diamond += spaces + stars + '\n';
  }
  for (let i = n - 1; i >= 1; i--) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(1 * i - 1);
    diamond += spaces + stars + '\n';
  }

  return diamond;
}


`,
    },
    {
      day: 61,
      date: "Mar 2, 2025",
      code: `// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example

// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

/*

P: we are given a list of numbers
R: returns  alist of numbers from numbers[0] to numbers[number.length-1]
E: 
P: create a function that takes in a list of numbers and returns a new list from min to max.

*/

function pipeFix(numbers){
  let min = numbers[0]
  let max = numbers[numbers.length-1]
  let result = []
  for(let i = min; i <=max;i++){
    result.push(i)
  }
  return result;
}

`,
    },
    {
      day: 62,
      date: "Mar 3, 2025",
      code: `// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

function greet (name, owner) {
    if(name == owner)
        return  'Hello boss'
    else
        return 'Hello guest'
  }

`,
    },
    {
      day: 63,
      date: "Mar 4, 2025",
      code: `// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

/* 
P: were given a string of words
R: returns the length of the shortest word
E: bitcoin take over the world maybe who knows perhaps -> 3 
P: 

*/

function findShort(s){
    let minLength = Infinity
    let split = s.split(' ')
    for(let i = 0; i < split.length;i++){
        if(split[i].length < minLength)
            minLength = split[i].length
    }
    return minLength
}

findShort('bitcoin take over the world maybe who knows perhaps')
`,
    },
    {
      day: 64,
      date: "Mar 5, 2025",
      code: `// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number){
    number = Math.abs(number)
    let strArr = String([number]).split('')
    let numArr = []
    for(let i = 0; i < strArr.length;i++){
     numArr.push(Number(strArr[i]))
    }
    return numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

}

sumDigits(10)

`,
    },
    {
      day: 65,
      date: "Mar 6, 2025",
      code: `// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let arr = str.toLowerCase().split('').sort()
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === arr[i+1])
            return false
    }
    return true
}

isIsogram("aba")

`,
    },
    {
      day: 66,
      date: "Mar 7, 2025",
      code: `// Exclusive "or" (xor) Logical Operator
// Overview

// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

// Task

// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

//too easy so i threw in two more examples

function xor(a, b){
    if(a === true && b === true)
        return false
    else if(a === true || b === true)
        return true
    else
        return false
}

// function xor(a,b){
//     return (a!=b)
// }

// function xor(a,b){
//     return a!=b ? true:false
// }

`,
    },
    {
      day: 67,
      date: "Mar 8, 2025",
      code: `// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
 let arr = name.toUpperCase().split(' ')
 return 
}

`,
    },
    {
      day: 68,
      date: "Mar 9, 2025",
      code: `// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


function toJadenCase(str){
    let arr = str.split(' ')
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr.join(' ')
}

toJadenCase("How can mirrors be real if our eyes aren't real")
`,
    },
    {
      day: 69,
      date: "Mar 10, 2025",
      code: `// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

function getChar(c) {
    return String.fromCharCode(c)
}

getChar(59)

`,
    },
    {
      day: 70,
      date: "Mar 11, 2025",
      code: `// Warmup-1 --

// sleepIn

// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

// Examples

//     sleepIn(true, true) → true
//     sleepIn(true, false) → false
//     sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
  if (weekday != true || vacation === true) return true;
  else return false;
}


`,
    },
    {
      day: 71,
      date: "Mar 12, 2025",
      code: `// Warmup-1 --

// monkeyTrouble

// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

// Examples

//     monkeyTrouble(true, true) → true
//     monkeyTrouble(false, false) → true
//     monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
  if (
    (aSmile === true && bSmile === true) ||
    (aSmile === false && bSmile === false)
  )
    return true;
  else return false;
}


`,
    },
    {
      day: 72,
      date: "Mar 13, 2025",
      code: `// Warmup-1 --

// sumDouble

// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// Examples

//     sumDouble(1, 2) → 3
//     sumDouble(3, 2) → 5
//     sumDouble(2, 2) → 8

function sumDouble(a, b) {
  if (a === b) return (a + b) * 2;
  else return a + b;
}


`,
    },
    {
      day: 73,
      date: "Mar 14, 2025",
      code: `// Warmup-1 --

// diff21

// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// Examples

//     diff21(19) → 2
//     diff21(10) → 11
//     diff21(21) → 0

function diff21(n) {
  if (n > 21) return (n - 21) * 2;
  else if (n <= 21) return (n - 21) / -1;
}


`,
    },
    {
      day: 74,
      date: "Mar 15, 2025",
      code: `// Warmup-1 --

// parrotTrouble

// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

// Examples

//     parrotTrouble(true, 6) → true
//     parrotTrouble(true, 7) → false
//     parrotTrouble(false, 6) → false

function parrotTrouble(talking, hour) {
  if (talking === true && (hour < 7 || hour > 20)) return true;
  else return false;
}


`,
    },
    {
      day: 75,
      date: "Mar 16, 2025",
      code: `// Warmup-1 --

// makes10

// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

// Examples

//     makes10(9, 10) → true
//     makes10(9, 9) → false
//     makes10(1, 9) → true

function makes10(a, b) {
  if (a === 10 || b === 10 || a + b === 10) return true;
  else return false;
}


`,
    },
    {
      day: 76,
      date: "Mar 17, 2025",
      code: `// Warmup-1 --

// nearHundred

// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

// Examples

//     nearHundred(93) → true
//     nearHundred(90) → true
//     nearHundred(89) → false

function nearHundred(n) {
  if (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10) return true;
  else return false;
}


`,
    },
    {
      day: 77,
      date: "Mar 18, 2025",
      code: `// Warmup-1 --

// posNeg

// Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

// Examples

//     posNeg(1, -1, false) → true
//     posNeg(-1, 1, false) → true
//     posNeg(-4, -5, true) → true

function posNeg(a, b, negative) {
  if (negative === true && a < 0 && b < 0) return true;
  else if (negative != true && a < 0 && b > 0) return true;
  else if (negative != true && a > 0 && b < 0) return true;
  else return false;
}


`,
    },
    {
      day: 78,
      date: "Mar 19, 2025",
      code: `// Warmup-1 --

// notString

// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

// Examples

//     notString('candy') → not candy
//     notString('x') → not x
//     notString('not bad') → not bad

function notString(str) {
  if (str.slice(0, 3) != "not") return "not " + str;
  else return str;
}


`,
    },
    {
      day: 79,
      date: "Mar 20, 2025",
      code: `// Warmup-1 --

// missingChar

// Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

// Examples

//     missingChar('kitten', 1) → ktten
//     missingChar('kitten', 0) → itten
//     missingChar('kitten', 4) → kittn

function missingChar(str, n) {
  return str.slice(0, n) + str.slice(n + 1);
}


`,
    },
    {
      day: 80,
      date: "Mar 21, 2025",
      code: `// Warmup-1 --

// frontBack

// Given a string, return a new string where the first and last chars have been exchanged.

// Examples

//     frontBack('code') → eodc
//     frontBack('a') → a
//     frontBack('ab') → ba

function frontBack(str) {
  if (str.length < 2) return str;
  let middle = str.slice(1, str.length - 1);
  return str[str.length - 1] + middle + str[0];
}


`,
    },
    {
      day: 81,
      date: "Mar 22, 2025",
      code: `// Warmup-1 --

// front3

// Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

// Examples

//     front3('Java') → JavJavJav
//     front3('Chocolate') → ChoChoCho
//     front3('abc') → abcabcabc

function front3(str) {
  if (str.length <= 3) return str + str + str;
  else return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3);
}


`,
    },
    {
      day: 82,
      date: "Mar 23, 2025",
      code: `// Warmup-1 --

// backAround

// Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.

// Examples

//     backAround('cat') → tcatt
//     backAround('Hello') → oHelloo
//     backAround('a') → aaa

function backAround(str) {
  let last = str[str.length - 1];
  return last + str + last;
}


`,
    },
    {
      day: 83,
      date: "Mar 24, 2025",
      code: `// Warmup-1 --

// or35

// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

// Examples

//     or35(3) → true
//     or35(10) → true
//     or35(8) → false

function or35(n) {
  if (n < 0) return false;
  else if (n % 3 === 0 || n % 5 === 0) return true;
  else return false;
}


`,
    },
    {
      day: 84,
      date: "Mar 25, 2025",
      code: `// Warmup-1 --

// front22

// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.

// Examples

//     front22('kitten') → kikittenki
//     front22('Ha') → HaHaHa
//     front22('abc') → ababcab

function front22(str) {
  if (str.length < 2) return str + str + str;
  let first2 = str[0] + str[1];
  return first2 + str + first2;
}

`,
    },
    {
      day: 85,
      date: "Mar 26, 2025",
      code: `// Warmup-1 --

// startHi

// Given a string, return true if the string starts with 'hi'and false otherwise.

// Examples

//     startHi('hi there') → true
//     startHi('hi') → true
//     startHi('hello hi') → false

function startHi(str) {
  if (str[0] + str[1] === "hi") return true;
  else return false;
}


`,
    },
    {
      day: 86,
      date: "Mar 27, 2025",
      code: `// Warmup-1 --

// icyHot

// Given two temperatures, return true if one is less than 0 and the other is greater than 100.

// Examples

//     icyHot(120, -1) → true
//     icyHot(-1, 120) → true
//     icyHot(2, 120) → false

function icyHot(temp1, temp2) {
  if ((temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)) return true;
  else return false;
}


`,
    },
    {
      day: 87,
      date: "Mar 28, 2025",
      code: `// Warmup-1 --

// in1020

// Given 2 int values, return true if either of them is in the range 10..20 inclusive.

// Examples

//     in1020(12, 99) → true
//     in1020(21, 12) → true
//     in1020(8, 99) → false

function in1020(a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) return true;
  else return false;
}


`,
    },
    {
      day: 88,
      date: "Mar 29, 2025",
      code: `// Warmup-1 --

// in1020

// Given 2 int values, return true if either of them is in the range 10..20 inclusive.

// Examples

//     in1020(12, 99) → true
//     in1020(21, 12) → true
//     in1020(8, 99) → false

function in1020(a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) return true;
  else return false;
}


`,
    },
    {
      day: 89,
      date: "Mar 30, 2025",
      code: `// Warmup-1 --

// hasTeen

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

// Examples

//     hasTeen(13, 20, 10) → true
//     hasTeen(20, 19, 10) → true
//     hasTeen(20, 10, 13) → true

function hasTeen(a, b, c) {
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19))
    return true;
  else return false;
}


`,
    },
    {
      day: 90,
      date: "Mar 31, 2025",
      code: `// Warmup-1 --

// loneTeen

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

// Examples

//     loneTeen(13, 99) → true
//     loneTeen(21, 19) → true
//     loneTeen(13, 13) → false

function loneTeen(a, b) {
  if (a >= 13 && a <= 19 && (b <= 12 || b >= 20)) return true;
  else if (b >= 13 && b <= 19 && (a <= 12 || a >= 20)) return true;
  else return false;
}


`,
    },
    {
      day: 91,
      date: "Apr 1, 2025",
      code: `// Warmup-1 --

// delDel

// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

// Examples

//     delDel('adelbc') → abc
//     delDel('adelHello') → aHello
//     delDel('abcdel') → abcdel

function delDel(str) {
  if (str.slice(1, 4) === "del") return str[0] + str.slice(4, str.length);
  else return str;
}


`,
    },
    {
      day: 92,
      date: "Apr 2, 2025",
      code: `// Warmup-1 --

// mixStart

// Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.

// Examples

//     mixStart('mix snacks') → true
//     mixStart('pix snacks') → true
//     mixStart('piz snacks') → false

function mixStart(str) {
  if (str.slice(1, 3) == "ix") return true;
  else return false;
}


`,
    },
    {
      day: 93,
      date: "Apr 3, 2025",
      code: `// Warmup-1 --

// startOz

// Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

// Examples

//     startOz('ozymandias') → oz
//     startOz('bzoo') → z
//     startOz('oxx') → o

function startOz(str) {
  if (str[0] + str[1] === "oz") return "oz";
  else if (str[0] === "o") return "o";
  else if (str[1] === "z") return "z";
  else return "";
}


`,
    },
    {
      day: 94,
      date: "Apr 4, 2025",
      code: `// Warmup-1 --

// intMax

// Given three int values, a b c, return the largest.

// Examples

//     intMax(1, 2, 3) → 3
//     intMax(1, 3, 2) → 3
//     intMax(3, 2, 1) → 3

function intMax(a, b, c) {
  let arr = [a, b, c];
  arr = arr.sort((a, b) => a - b);
  return arr[2];
}


`,
    },
    {
      day: 95,
      date: "Apr 5, 2025",
      code: `// Warmup-1 --

// close10

// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

// Examples

//     close10(8, 13) → 8
//     close10(13, 8) → 8
//     close10(13, 7) → 0

function close10(a, b) {
  if (Math.abs(a - 10) === Math.abs(b - 10)) return 0;
  else if (Math.abs(a - 10) < Math.abs(b - 10)) return a;
  else return b;
}

`,
    },
    {
      day: 96,
      date: "Apr 6, 2025",
      code: `// Warmup-1 --

// in3050

// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

// Examples

//     in3050(30, 31) → true
//     in3050(30, 41) → false
//     in3050(40, 50) → true

function in3050(a, b) {
  if (a <= 40 && a >= 30 && b <= 40 && b >= 30) return true;
  else if (a <= 50 && a >= 40 && b <= 50 && b >= 40) return true;
  else return false;
}


`,
    },
    {
      day: 97,
      date: "Apr 7, 2025",
      code: `// Warmup-1 --

// max1020

// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// Examples

//     max1020(11, 19) → 19
//     max1020(19, 11) → 19
//     max1020(11, 9) → 11

function max1020(a, b) {
  if (a >= 10 && a <= 20 && b >= 10 && b < 20)
    if (a > b) return a;
    else return b;
  if (a >= 10 && a <= 20) return a;
  else if (b >= 10 && b <= 20) return b;
  else return 0;
}

`,
    },
    {
      day: 98,
      date: "Apr 8, 2025",
      code: `// Warmup-1 --

// stringE

// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

//     stringE('Hello') → true
//     stringE('Heelle') → true
//     stringE('Heelele') → false

function stringE(str) {
  let count = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) if (arr[i] === "e") count++;
  if (count >= 1 && count <= 3) return true;
  else return false;
}


`,
    },
    {
      day: 99,
      date: "Apr 9, 2025",
      code: `// Warmup-1 --

// lastDigit

// Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

// Examples

//     lastDigit(7, 17) → true
//     lastDigit(6, 17) → false
//     lastDigit(3, 113) → true

function lastDigit(a, b, c) {
  if (a % 10 === b % 10) return true;
  else return false;
}


`,
    },
    {
      day: 100,
      date: "Apr 10, 2025",
      code: `// Warmup-1 --

// endUp

// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

// Examples

//     endUp('Hello') → HeLLO
//     endUp('hi there') → hi thERE
//     endUp('hi') → HI

function endUp(str) {
  if (str.length < 3) return str.toUpperCase();
  let lastThree = str.slice(str.length - 3, str.length);
  let beginning = str.slice(0, str.length - 3);
  lastThree = lastThree.toUpperCase();
  return beginning + lastThree;
}


`,
    },
    {
      day: 101,
      date: "Apr 11, 2025",
      code: `// Warmup-1 --

// everyNth

// Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

// Examples

//     everyNth('Miracle', 2) → Mrce
//     everyNth('abcdefg', 2) → aceg
//     everyNth('abcdefg', 3) → adg

function everyNth(str, n) {
  let arr = str.split("");
  let newArr = [];
  for (let i = n; i < arr.length; i = i + n) {
    newArr.push(arr[i]);
  }
  return str[0] + newArr.join("");
}


`,
    },
    {
      day: 102,
      date: "Apr 12, 2025",
      code: `// Warmup-2 --

// stringTimes

// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

// Examples

//     stringTimes('Hi', 2) → HiHi
//     stringTimes('Hi', 3) → HiHiHi
//     stringTimes('Hi', 1) → Hi

function stringTimes(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}


`,
    },
    {
      day: 103,
      date: "Apr 13, 2025",
      code: `// Warmup-2 --

// frontTimes

// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.

// Examples

//     frontTimes('Chocolate', 2) → ChoCho
//     frontTimes('Chocolate', 3) → ChoChoCho
//     frontTimes('Abc', 3) → AbcAbcAbc

function frontTimes(str, n) {
  let firstThree = str.slice(0, 3);
  let result = "";
  for (let i = 0; i < n; i++) {
    result += firstThree;
  }
  return result;
}


`,
    },
    {
      day: 104,
      date: "Apr 14, 2025",
      code: `// Warmup-2 --

// countXX

// Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

// Examples

//     countXX('abcxx') → 1
//     countXX('xxx') → 2
//     countXX('xxxx') → 3

function countXX(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x" && str[i + 1] == "x") count++;
  }
  return count;
}


`,
    },
    {
      day: 105,
      date: "Apr 15, 2025",
      code: `// Warmup-2 --

// doubleX

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

//     doubleX('axxbb') → true
//     doubleX('axaxax') → false
//     doubleX('xxxxx') → true

function doubleX(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x")
      if (str[i + 1] === "x") return true;
      else return false;
  }
  return false;
}


`,
    },
    {
      day: 106,
      date: "Apr 16, 2025",
      code: `// Warmup-2 --

// stringBits

// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// Examples

//     stringBits('Hello') → Hlo
//     stringBits('Hi') → H
//     stringBits('Heeololeo') → Hello

function stringBits(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 2) newStr += str[i];

  return newStr;
}


`,
    },
    {
      day: 107,
      date: "Apr 17, 2025",
      code: `// Warmup-2 --

// stringSplosion

// Given a non-empty string like "Code" return a string like "CCoCodCode"

function stringSplosion(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) newStr.push(str.slice(0, i + 1));
  return newStr.join("");
}


`,
    },
    {
      day: 108,
      date: "Apr 18, 2025",
      code: `// Warmup-2 --

// last2

// Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

// Examples

//     last2('hixxhi') → 1
//     last2('xaxxaxaxx') → 1
//     last2('axxaaxx') → 1

function last2(str) {
  let count = 0;
  let withoutLast = str.slice(str[0], str.length - 1);
  let lastTwo = str.slice(str.length - 2, str.length);
  for (let i = 0; i < str.length; i++) {
    if (lastTwo === withoutLast[i] + withoutLast[i + 1]) count++;
  }
  return count;
}


`,
    },
    {
      day: 109,
      date: "Apr 19, 2025",
      code: `// Warmup-2 --

// arrayCount9

// Given an array of ints, return the number of 9's in the array.

// Examples

//     arrayCount9([1,2,9]) → 1
//     arrayCount9([1,9,9]) → 2
//     arrayCount9([1,9,9,3,9]) → 3

function arrayCount9(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 9) count++;
  }
  return count;
}


`,
    },
    {
      day: 110,
      date: "Apr 20, 2025",
      code: `// Warmup-2 --

// arrayFront9

// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

// Examples

//     arrayFront9([1,2,9,3,4]) → true
//     arrayFront9([1,2,3,4,9]) → false
//     arrayFront9([1,2,3,4,5]) → false

function arrayFront9(nums) {
  for (let i = 0; i < 4; i++) {
    if (nums[i] == 9) return true;
  }
  return false;
}


`,
    },
    {
      day: 111,
      date: "Apr 21, 2025",
      code: `// // Warmup-2 --

// array123

// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

function array123(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) return true;
  }
  return false;
}


`,
    },
    {
      day: 112,
      date: "Apr 22, 2025",
      code: `// Warmup-2 --

// stringMatch

// Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.

// Examples

//     stringMatch('xxcaazz', 'xxbaaz') → 3
//     stringMatch('abc', 'abc') → 2
//     stringMatch('abc', 'axc') → 0

function stringMatch(a, b) {
  let count = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] + a[i + 1] === b[i] + b[i + 1]) count++;
  }
  return count;
}


`,
    },
    {
      day: 113,
      date: "Apr 23, 2025",
      code: `// Warmup-2 --

// stringX

// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

// Examples

//     stringX('xxHxix') → xHix
//     stringX('abxxxcd') → abcd
//     stringX('xabxxxcdx') → xabcdx

function stringX(str) {
  let newStr = "";
  if (str.length == 0) return "";
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] != "x") newStr = newStr + str[i];
  }
  return str[0] + newStr + str[str.length - 1];
}


`,
    },
    {
      day: 114,
      date: "Apr 24, 2025",
      code: `// Warmup-2 --

// altPairs

// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// Examples

//     altPairs('kitten') → kien
//     altPairs('Chocolate') → Chole
//     altPairs('CodingHorror') → Congrr

function altPairs(str) {
  str.split("");
  let newArr = [];
  for (let i = 0; i < str.length; i += 4) {
    newArr.push(str[i]);
    newArr.push(str[i + 1]);
  }
  return newArr.join("");
}

`,
    },
    {
      day: 115,
      date: "Apr 25, 2025",
      code: `// Warmup-2 --

// stringYak

// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

// Examples

//     stringYak('yakpak') → pak
//     stringYak('pakyak') → pak
//     stringYak('yak123ya') → 123ya

function stringYak(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "y" && str[i + 2] === "k") {
      i += 2;
    } else {
      result += str[i];
    }
  }

  return result;
}


`,
    },
    {
      day: 116,
      date: "Apr 26, 2025",
      code: `// Warmup-2 --

// array667

// Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

// Examples

//     array667([6,6,2]) → 1
//     array667([6,6,2,6]) → 1
//     array667([6,7,2,6]) → 1

function array667(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 6 && (nums[i + 1] == 6 || nums[i + 1] == 7)) count++;
  }
  return count;
}


`,
    },
    {
      day: 117,
      date: "Apr 27, 2025",
      code: `// Warmup-2 --

// noTriples

// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

// Examples

//     noTriples([1,1,2,2,1]) → true
//     noTriples([1,1,2,2,2,1]) → false
//     noTriples([1,1,2,2,2,1]) → false

function noTriples(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i + 1] == nums[i + 2]) return false;
  }
  return true;
}


`,
    },
    {
      day: 118,
      date: "Apr 28, 2025",
      code: `// Warmup-2 --

// has271

// Given an array of ints, return true if it contains a 2, 7, 1 pattern -- a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

// Examples

//     has271([1,2,7,1]) → true
//     has271([1,2,8,1]) → false
//     has271([2,7,1]) → true

function has271(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] == nums[i] + 5 && nums[i + 2] == nums[i] - 1) return true;
  }
  return false;
}


`,
    },
    {
      day: 119,
      date: "Apr 29, 2025",
      code: `// String-1 --

// helloName

// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

// Examples

//     helloName('Bob') → Hello Bob!
//     helloName('Alice') → Hello Alice!
//     helloName('X') → Hello X!

function helloName(name) {
  return "Hello + name"
}


`,
    },
    {
      day: 120,
      date: "Apr 30, 2025",
      code: `// String-1 --

// makeAbba

// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Examples

//     makeAbba('Hi', 'Bye') → HiByeByeHi
//     makeAbba('Yo', 'Alice') → YoAliceAliceYo
//     makeAbba('What', 'Up') → WhatUpUpWhat

function makeAbba(a, b) {
  return a+b+b+a;
}


`,
    },
    {
      day: 121,
      date: "May 1, 2025",
      code: `// String-1 --

// makeTags

// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

// Examples

//     makeTags('i', 'Yay') → Yay
//     makeTags('i', 'Hello') → Hello
//     makeTags('cite', 'Yay') → Yay

function makeTags(tag, word) {
  return 
}


`,
    },
    {
      day: 122,
      date: "May 2, 2025",
      code: `// String-1 --

// makeOutWord

// Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

// Examples

//     makeOutWord('<<>>', 'Yay') → <>
//     makeOutWord('<<>>', 'WooHoo') → <>
//     makeOutWord('[[]]', 'word') → [[word]]

function makeOutWord(out, word) {
  return out.substring(0, 2) + word + out.substring(2, 4);
}


`,
    },
    {
      day: 123,
      date: "May 3, 2025",
      code: `// String-1 --

// extraEnd

// Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

// Examples

//     extraEnd('Hello') → lololo
//     extraEnd('ab') → ababab
//     extraEnd('Hi') → HiHiHi

function extraEnd(str) {
  let lastTwo = str.substring(str.length - 2, str.length);
  return lastTwo + lastTwo + lastTwo;
}


`,
    },
    {
      day: 124,
      date: "May 4, 2025",
      code: `// String-1 --

// firstTwo

// Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

// Examples

//     firstTwo('Hello') → He
//     firstTwo('abcdefg') → ab
//     firstTwo('ab') → ab

function firstTwo(str) {
  if (str.length < 2) return str;
  return str[0] + str[1];
}


`,
    },
    {
      day: 125,
      date: "May 5, 2025",
      code: `// String-1 --

// firstHalf

// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples

//     firstHalf('WooHoo') → WooHoo
//     firstHalf('HelloThere') → HelloThere
//     firstHalf('abcdefg') → abcdefg

function firstHalf(str) {
  return str.substring(0, str.length / 2);
}


`,
    },
    {
      day: 126,
      date: "May 6, 2025",
      code: `// String-1 --

// withoutEnd

// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

// Examples

//     withoutEnd('Hello') → ell
//     withoutEnd('java') → av
//     withoutEnd('coding') → odin

function withoutEnd(str) {
  return str.substring(1, str.length - 1);
}


`,
    },
    {
      day: 127,
      date: "May 7, 2025",
      code: `// String-1 --

// comboString

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

// Examples

//     comboString('Hello', 'hi') → hiHellohi
//     comboString('Hi', 'Hello') → HiHelloHi
//     comboString('aaa', 'b') → baaab

function comboString(a, b) {
  if (a.length < b.length) return a + b + a;
  else return b + a + b;
}


`,
    },
    {
      day: 128,
      date: "May 8, 2025",
      code: `// String-1 --

// nonStart

// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

//     nonStart('Hello', 'There') → ellohere
//     nonStart('java', 'code') → avaode
//     nonStart('shotl', 'java') → hotlava

function nonStart(a, b) {
  return a.substring(1, a.length) + b.substring(1, b.length);
}


`,
    },
    {
      day: 129,
      date: "May 9, 2025",
      code: `// String-1 --

// left2

// Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

// Examples

//     left2('Hello') → lloHe
//     left2('java') → vaja
//     left2('Hi') → Hi

function left2(str) {
  return str.substring(2, str.length) + str[0] + str[1];
}


`,
    },
    {
      day: 130,
      date: "May 10, 2025",
      code: `// String-1 --

// right2

// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

// Examples

//     right2('Hello') → loHel
//     right2('java') → vaja
//     right2('Hi') → Hi

function right2(str) {
  let lastTwo = str.substring(str.length - 2, str.length);
  return lastTwo + str.substring(0, str.length - 2);
}


`,
    },
    {
      day: 131,
      date: "May 11, 2025",
      code: `// String-1 --

// theEnd

// Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

// Examples

//     theEnd('Hello', true) → H
//     theEnd('Hello', false) → o
//     theEnd('oh', true) → o

function theEnd(str, front) {
  if (front == true) {
    return str[0];
  } else return str[str.length - 1];
}


`,
    },
    {
      day: 132,
      date: "May 12, 2025",
      code: `// String-1 --

// withoutEnd2

// Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

// Examples

//     withoutEnd2('Hello') → ell
//     withoutEnd2('abc') → b
//     withoutEnd2('ab') →

function withoutEnd2(str) {
  if (str.length <= 2) return "";
  return str.substring(1, str.length - 1);
}


`,
    },
    {
      day: 133,
      date: "May 13, 2025",
      code: `// String-1 --

// middleTwo

// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

// Examples

//     middleTwo('string') →
//     middleTwo('code') →
//     middleTwo('Practice') →

function middleTwo(str) {
  return str.substring(str.length / 2 - 1, str.length / 2 + 1);
}


`,
    },
    {
      day: 134,
      date: "May 14, 2025",
      code: `// String-1 --

// endsLy

// Given a string, return true if it ends in "ly".

// Examples

//     endsLy('oddly') → true
//     endsLy('y') → false
//     endsLy('oddl') → false

function endsLy(str) {
  if (str[str.length - 2] === "l" && str[str.length - 1] === "y") return true;
  else return false;
}

`,
    },
    {
      day: 135,
      date: "May 15, 2025",
      code: `// String-1 --

// nTwice

// Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

// Examples

//     nTwice('hello', 2) → helo
//     nTwice('Chocolate', 3) → Choate
//     nTwice('Chocolate', 1) → Ce

function nTwice(str, n) {
  return str.substring(0, n) + str.substring(str.length - n, str.length);
}


`,
    },
    {
      day: 136,
      date: "May 16, 2025",
      code: `// String-1 --

// twoChar

// Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

// Examples

//     twoChar('java', 0) → ja
//     twoChar('java', 2) → va
//     twoChar('java', 3) → ja

function twoChar(str, index) {
  return index > str.length - 2 || index < 0
    ? str[0] + str[1]
    : str.substring(index, index + 2);
}


`,
    },
    {
      day: 137,
      date: "May 17, 2025",
      code: `// String-1 --

// middleThree

// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

// Examples

//     middleThree('Candy') → and
//     middleThree('and') → and
//     middleThree('solving') → lvi

function middleThree(str) {
  return str.substring(str.length / 2 - 1, str.length / 2 + 2);
}

`,
    },
    {
      day: 138,
      date: "May 18, 2025",
      code: `// String-1 --

// hasBad

// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

//     hasBad('badxx') → true
//     hasBad('xbadxx') → true
//     hasBad('xxbadxx') → false

function hasBad(str) {
  for (let i = 0; i < 2; i++) {
    if (str[i] + str[i + 1] + str[i + 2] == "bad") return true;
  }
  return false;
}


`,
    },
    {
      day: 139,
      date: "May 19, 2025",
      code: `// String-1 --

// atFirst

// Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

// Examples

//     atFirst('hello') → he
//     atFirst('hi') → hi
//     atFirst('h') → h@

function atFirst(str) {
  if (str.length == 0) {
    return "@@";
  }
  return str.length < 2 ? str[0] + "@" : str.substring(0, 2);
}


`,
    },
    {
      day: 140,
      date: "May 20, 2025",
      code: `// String-1 --

// lastChars

// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// Examples

//     lastChars('last', 'chars') → ls
//     lastChars('yo', 'java') → ya
//     lastChars('hi', '') → h@

function lastChars(a, b) {
  if (a.length < 1 && b.length < 1) return "@@";
  else if (a.length < 1) return "@" + b[b.length - 1];
  else if (b.length < 1) return a[0] + "@";

  return a[0] + b[b.length - 1];
}


`,
    },
    {
      day: 141,
      date: "May 21, 2025",
      code: `// String-1 --

// conCat

// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

// Examples

//     conCat('abc', 'cat') → abcat
//     conCat('dog', 'cat') → dogcat
//     conCat('abc', '') → abc

function conCat(a, b) {
  if (a[a.length - 1] == b[0]) return a.substring(0, a.length - 1) + b;
  else return a + b;
}


`,
    },
    {
      day: 142,
      date: "May 22, 2025",
      code: `// String-1 --

// lastTwo

// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

// Examples

//     lastTwo('coding') → codign
//     lastTwo('cat') → cta
//     lastTwo('ab') → ba

function lastTwo(str) {
  if (str.length <= 1) return str;
  let temp = str[str.length - 1];

  return str.substring(0, str.length - 2) + temp + str[str.length - 2];
}


`,
    },
    {
      day: 143,
      date: "May 23, 2025",
      code: `// String-1 --

// seeColor

// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// Examples

//     seeColor('redxx') → red
//     seeColor('xxred') →
//     seeColor('blueTimes') → blue

function seeColor(str) {
  if (str.startsWith("blue")) return "blue";
  else if (str.startsWith("red")) return "red";
  else return "";
}


`,
    },
    {
      day: 144,
      date: "May 24, 2025",
      code: `// String-1 --

// frontAgain

// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// Examples

//     frontAgain('edited') → true
//     frontAgain('edit') → false
//     frontAgain('ed') → true

function frontAgain(str) {
  if (str.length <= 1) return false;
  else
    return str.substring(0, 2) == str.substring(str.length - 2, str.length)
      ? true
      : false;
}


`,
    },
    {
      day: 145,
      date: "May 25, 2025",
      code: `// String-1 --

// minCat

// Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

// Examples

//     minCat('Hello', 'Hi') → loHi
//     minCat('Hello', 'java') → ellojava
//     minCat('java', 'Hello') → javaello

function minCat(a, b) {
  if (a.length > b.length)
    return a.substring(a.length - b.length, a.length) + b;
  else return a + b.substring(b.length - a.length, b.length);
}

`,
    },
    {
      day: 146,
      date: "May 26, 2025",
      code: `// String-1 --

// extraFront

// Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

// Examples

//     extraFront('Hello') → HeHeHe
//     extraFront('ab') → ababab
//     extraFront('H') → HHH

function extraFront(str) {
  if (str.length < 2) return str + str + str;
  let firstTwo = str[0] + str[1];
  return firstTwo + firstTwo + firstTwo;
}


`,
    },
    {
      day: 147,
      date: "May 27, 2025",
      code: `// String-1 --

// without2

// Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

// Examples

//     without2('HelloHe') → lloHe
//     without2('HelloHi') → HelloHi
//     without2('Hi') →

function without2(str) {
  if (str[0] + str[1] == str[str.length - 2] + str[str.length - 1])
    return str.substring(2, str.length);
  else return str;
}


`,
    },
    {
      day: 148,
      date: "May 28, 2025",
      code: `// String-1 --

// deFront

// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

// Examples

//     deFront('Hello') → llo
//     deFront('java') → va
//     deFront('away') → aay

function deFront(str) {
  if (str[0] == "a" && str[1] != "b") return "a" + str.substring(2, str.length);
  else if (str[0] != "a" && str[1] == "b") return str.substring(1, str.length);
  else if (str[0] == "a" && str[1] == "b") return str;
  else return str.substring(2, str.length);
}


`,
    },
    {
      day: 149,
      date: "May 29, 2025",
      code: `// String-1 --

// startWord

// Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

// Examples

//     startWord('hippo', 'hi') → hi
//     startWord('hippo', 'xip') → hip
//     startWord('hippo', 'i') → h

function startWord(str, word) {
  if (str.substring(1, word.length) == word.substring(1, word.length))
    return str.substring(0, word.length);
  else return "";
}


`,
    },
    {
      day: 150,
      date: "May 30, 2025",
      code: `// String-1 --

// withoutX

// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

// Examples

//     withoutX('xHix') → Hi
//     withoutX('xHi') → Hi
//     withoutX('Hxix') → Hxi

function withoutX(str) {
  if (str.length == 1) return "";
  if (str.startsWith("x") && str.endsWith("x"))
    return str.substring(1, str.length - 1);
  else if (str.startsWith("x")) return str.substring(1, str.length);
  else if (str.endsWith("x")) return str.substring(0, str.length - 1);
  else return str;
}


`,
    },
    {
      day: 151,
      date: "May 31, 2025",
      code: `// String-1 --

// withoutX2

// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

// Examples

//     withoutX2('xHi') → Hi
//     withoutX2('Hxi') → Hi
//     withoutX2('Hi') → Hi

function withoutX2(str) {
  if (str.startsWith("x") && str[1] != "x") return str.substring(1, str.length);
  else if (str[0] != "x" && str[1] == "x")
    return str[0] + str.substring(2, str.length);
  else if (str[0] == "x" && str[1] == "x") return str.substring(2, str.length);
  else return str;
}


`,
    },
    {
      day: 152,
      date: "Jun 1, 2025",
      code: `/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";

  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  for (let i = 0; i < symbols.length; i++) {
    let symbol = symbols[i][0];
    let value = symbols[i][1];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};


`,
    },
    {
      day: 153,
      date: "Jun 2, 2025",
      code: `// String-2 --

// doubleChar

// Given a string, return a string where for every char in the original, there are two chars.

// Examples

//     doubleChar('The') → TThhee
//     doubleChar('AAbb') → AAAAbbbb
//     doubleChar('Hi-There') → HHii--TThheerree

function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}


`,
    },
    {
      day: 154,
      date: "Jun 3, 2025",
      code: `// String-2 --

// countHi

// Return the number of times that the string "hi" appears anywhere in the given string.

// Examples

//     countHi('abc hi ho') → 1
//     countHi('ABChi hi') → 2
//     countHi('hihi') → 2

function countHi(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "h" && str[i + 1] == "i") count++;
  }
  return count;
}


`,
    },
    {
      day: 155,
      date: "Jun 4, 2025",
      code: `// String-2 --

// catDog

// Return true if the string "cat" and "dog" appear the same number of times in the given string.

// Examples

//     catDog('catdog') → true
//     catDog('catcat') → false
//     catDog('1cat1cadodog') → true

function catDog(str) {
  let catCount = 0;
  let dogCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) == "cat") catCount++;

    if (str.substring(i, i + 3) == "dog") dogCount++;
  }
  return catCount == dogCount;
}


`,
    },
    {
      day: 156,
      date: "Jun 5, 2025",
      code: `// String-2 --

// countCode

// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

// Examples

//     countCode('aaacodebbb') → 1
//     countCode('codexxcode') → 2
//     countCode('cozexxcope') → 2

function countCode(str) {
  let codeCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 2) == "co" && str[i + 3] == "e") codeCount++;
  }
  return codeCount;
}


`,
    },
    {
      day: 157,
      date: "Jun 6, 2025",
      code: `// String-2 --

// endOther

// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

// Examples

//     endOther('Hiabc', 'abc') → true
//     endOther('AbC', 'HiaBc') → true
//     endOther('abc', 'abXabc') → true

function endOther(a, b) {
  let aLower = a.toLowerCase();
  let bLower = b.toLowerCase();

  if (aLower.substring(aLower.length - bLower.length) == bLower) return true;

  if (bLower.substring(bLower.length - aLower.length) == aLower) return true;

  return false;
}


`,
    },
    {
      day: 158,
      date: "Jun 7, 2025",
      code: `// String-2 --

// xyzThere

// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

// Examples

//     xyzThere('abcxyz') → true
//     xyzThere('abc.xyz') → false
//     xyzThere('xyz.abc') → true

function xyzThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) == "xyz" && str[i - 1] != ".") return true;
  }
  return false;
}


`,
    },
    {
      day: 159,
      date: "Jun 8, 2025",
      code: `// String-2 --

// xyzThere

// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

// Examples

//     xyzThere('abcxyz') → true
//     xyzThere('abc.xyz') → false
//     xyzThere('xyz.abc') → true

function xyzThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) == "xyz" && str[i - 1] != ".") return true;
  }
  return false;
}


`,
    },
    {
      day: 160,
      date: "Jun 9, 2025",
      code: `// String-2 --

// bobThere

// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

// Examples

//     bobThere('abcbob') → true
//     bobThere('b9b') → true
//     bobThere('bac') → false

function bobThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "b" && str[i + 2] == "b") return true;
  }
  return false;
}


`,
    },
    {
      day: 161,
      date: "Jun 10, 2025",
      code: `// String-2 --

// xyBalance

// We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

// Examples

//     xyBalance('aaxbby') → true
//     xyBalance('aaxbb') → false
//     xyBalance('yaaxbb') → false

function xyBalance(str) {
  let balanced = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      for (let j = i; j < str.length; j++) {
        if (str[j] == "y") {
          balanced = true;
          break;
        } else balanced = false;
      }
    }
  }
  return balanced;
}


`,
    },
    {
      day: 162,
      date: "Jun 11, 2025",
      code: `// String-2 --

// mixString

// Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

// Examples

//     mixString('abc', 'xyz') → axbycz
//     mixString('Hi', 'There') → HTihere
//     mixString('xxxx', 'There') → xTxhxexre

function mixString(a, b) {
  let newStr = "";
  if (b > a) {
    for (let i = 0; i < b.length; i++) {
      if (i < a.length) newStr += a[i] + b[i];
      else newStr += b[i];
    }
  }
  if (a > b) {
    for (let i = 0; i < a.length; i++) {
      if (i < b.length) newStr += a[i] + b[i];
      else newStr += a[i];
    }
  }
  return newStr;
}


`,
    },
    {
      day: 163,
      date: "Jun 12, 2025",
      code: `// String-2 --

// repeatEnd

// Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

// Examples

//     repeatEnd('Hello', 3) → llollollo
//     repeatEnd('Hello', 2) → lolo
//     repeatEnd('Hello', 1) → o

function repeatEnd(str, n) {
  let ending = str.slice(str.length - n, str.length);
  let result = "";
  for (let i = 0; i < n; i++) result += ending;
  return result;
}


`,
    },
    {
      day: 164,
      date: "Jun 13, 2025",
      code: `// String-2 --

// repeatFront

// Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

// Examples

//     repeatFront('Chocolate', 4) → ChocChoChC
//     repeatFront('Chocolate', 3) → ChoChC
//     repeatFront('Ice Cream', 2) → IcI

function repeatFront(str, n) {
  let front = str.slice(0, n);
  let result = "";
  for (let i = 0; i < n; i++) {
    result += front;
    front = front.substring(0, front.length - 1);
  }
  return result;
}

`,
    },
    {
      day: 165,
      date: "Jun 14, 2025",
      code: `// String-2 --

// repeatSeparator

// Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

// Examples

//     repeatSeparator('Word', 'X', 3) → WordXWordXWord
//     repeatSeparator('This', 'And', 2) → ThisAndThis
//     repeatSeparator('This', 'And', 1) → This

function repeatSeparator(word, sep, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += word + sep;
  }
  return result.substring(0, result.length - sep.length);
}


`,
    },
    {
      day: 166,
      date: "Jun 15, 2025",
      code: `// String-2 --

// prefixAgain

// Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

// Examples

//     prefixAgain('abXYabc', 1) → true
//     prefixAgain('abXYabc', 2) → true
//     prefixAgain('abXYabc', 3) → false

function prefixAgain(str, n) {
  let prefix = str.slice(0, n);
  let flag = false;

  for (let i = n; i < str.length; i++) {
    if (str.slice(i, i + n) == prefix) flag = true;
  }
  return flag;
}


`,
    },
    {
      day: 167,
      date: "Jun 16, 2025",
      code: `// String-2 --

// xyzMiddle

// Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

// Examples

//     xyzMiddle('AAxyzBB') → true
//     xyzMiddle('AxyzBB') → true
//     xyzMiddle('AxyzBBB') → false

function xyzMiddle(str) {
  for (let i = 0; i <= str.length - 3; i++) {
    if (str.substring(i, i + 3) == "xyz") {
      let left = i;
      let right = str.length - (i + 3);

      if (Math.abs(left - right) <= 1) {
        return true;
      }
    }
  }
  return false;
}


`,
    },
    {
      day: 168,
      date: "Jun 17, 2025",
      code: `// String-2 --

// getSandwich

// A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

// Examples

//     getSandwich('breadjambread') → jam
//     getSandwich('xxbreadjambreadyy') → jam
//     getSandwich('xxbreadyy') →

function getSandwich(str) {
  let first = str.indexOf("bread");
  let last = str.lastIndexOf("bread");

  if (first == -1 || first == last) return "";

  return str.substring(first + 5, last);
}


`,
    },
    {
      day: 169,
      date: "Jun 18, 2025",
      code: `// String-2 --

// sameStarChar

// Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

// Examples

//     sameStarChar('xy*yzz') → true
//     sameStarChar('xy*zzz') → false
//     sameStarChar('*xa*az') → true

function sameStarChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "*") {
      if (i > 0 && i < str.length - 1) {
        if (str[i - 1] != str[i + 1]) {
          return false;
        }
      }
    }
  }
  return true;
}


`,
    },
    {
      day: 170,
      date: "Jun 19, 2025",
      code: `// String-2 --

// oneTwo

// Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

// Examples

//     oneTwo('abc') → bca
//     oneTwo('tca') → cat
//     oneTwo('tcagdo') → catdog

function oneTwo(str) {
  let result = "";

  for (let i = 0; i + 2 < str.length; i += 3) {
    result += str.substring(i + 1, i + 3);
    result += str[i];
  }

  return result;
}


`,
    },
    {
      day: 171,
      date: "Jun 20, 2025",
      code: `// String-2 --

// zipZap

// Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

// Examples

//     zipZap('zipXzap') → zpXzp
//     zipZap('zopzop') → zpzp
//     zipZap('zzzopzop') → zzzpzp

function zipZap(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i + 2 < str.length && str[i] == "z" && str[i + 2] == "p") {
      result += "z";
      result += "p";
      i += 2;
    } else {
      result += str[i];
    }
  }

  return result;
}


`,
    },
    {
      day: 172,
      date: "Jun 21, 2025",
      code: `// String-2 --

// starOut

// Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

// Examples

//     starOut('ab*cd') → ad
//     starOut('ab**cd') → ad
//     starOut('sm*eilly') → silly

function starOut(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "*" ||
      (i > 0 && str[i - 1] == "*") ||
      (i < str.length - 1 && str[i + 1] == "*")
    ) {
      // skip this character
    } else {
      result += str[i];
    }
  }

  return result;
}


`,
    },
    {
      day: 173,
      date: "Jun 22, 2025",
      code: `// String-2 --

// plusOut

// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

// Examples

//     plusOut('12xy34', 'xy') → ++xy++
//     plusOut('12xy34', '1') → 1+++++
//     plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy

function plusOut(str, word) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (
      i + word.length <= str.length &&
      str.substring(i, i + word.length) == word
    ) {
      result += word;
      i += word.length - 1;
    } else {
      result += "+";
    }
  }

  return result;
}


`,
    },
    {
      day: 174,
      date: "Jun 23, 2025",
      code: `// String-2 --

// wordEnds

// Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

// Examples

//     wordEnds('abcXY123XYijk', 'XY') → c13i
//     wordEnds('XY123XY', 'XY') → 13
//     wordEnds('XY1XY', 'XY') → 11

function wordEnds(str, word) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + word.length) == word) {
      if (i > 0) {
        newStr += str[i - 1];
      }

      if (i + word.length < str.length) {
        newStr += str[i + word.length];
      }
    }
  }
  return newStr;
}


`,
    },
    {
      day: 175,
      date: "Jun 24, 2025",
      code: `// String-3 --

// countYZ

// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

// Examples

//     countYZ('fez day') → 2
//     countYZ('day fez') → 2
//     countYZ('day fyyyz') → 2

function countYZ(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "y" || str[i] == "z") {
      if (i == str.length - 1 || !/[a-z]/.test(str[i + 1])) {
        count++;
      }
    }
  }

  return count;
}


`,
    },
    {
      day: 176,
      date: "Jun 25, 2025",
      code: `// String-3 --

// withoutString

// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

// Examples

//     withoutString('Hello there', 'llo') → He there
//     withoutString('Hello there', 'e') → Hllo thr
//     withoutString('Hello there', 'x') → Hello there

function withoutString(base, remove) {
  let result = "";
  let i = 0;
  let lowerBase = base.toLowerCase();
  let lowerRemove = remove.toLowerCase();

  while (i < base.length) {
    if (
      i + remove.length <= base.length &&
      lowerBase.substring(i, i + remove.length) == lowerRemove
    ) {
      i += remove.length; // skip this part
    } else {
      result += base[i];
      i++;
    }
  }

  return result;
}


`,
    },
    {
      day: 177,
      date: "Jun 26, 2025",
      code: `// String-3 --

// equalIsNot

// Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

// Examples

//     equalIsNot('This is not') → false
//     equalIsNot('This is notnot') → true
//     equalIsNot('noisxxnotyynotxisi') → true

function equalIsNot(str) {
  let countIs = 0;
  let countNot = 0;

  for (let i = 0; i < str.length; i++) {
    if (i + 1 < str.length && str.substring(i, i + 2) == "is") {
      countIs++;
    }
    if (i + 2 < str.length && str.substring(i, i + 3) == "not") {
      countNot++;
    }
  }

  return countIs == countNot;
}


`,
    },
    {
      day: 178,
      date: "Jun 27, 2025",
      code: `// String-3 --

// gHappy

// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

// Examples

//     gHappy('xxggxx') → true
//     gHappy('xxgxx') → false
//     gHappy('xxggyygxx') → false

function gHappy(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "g") {
      if (
        !(
          (i > 0 && str[i - 1] == "g") ||
          (i < str.length - 1 && str[i + 1] == "g")
        )
      ) {
        return false;
      }
    }
  }
  return true;
}


`,
    },
    {
      day: 179,
      date: "Jun 28, 2025",
      code: `// String-3 --

// countTriple

// We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

// Examples

//     countTriple('abcXXXabc') → 1
//     countTriple('xxxabyyyycd') → 3
//     countTriple('a') → 0

function countTriple(str) {
  let count = 0;

  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] == str[i + 1] && str[i] == str[i + 2]) {
      count++;
    }
  }

  return count;
}


`,
    },
    {
      day: 180,
      date: "Jun 29, 2025",
      code: `// String-3 --

// sumDigits

// Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

// Examples

//     sumDigits('aa1bc2d3') → 6
//     sumDigits('aa11b33') → 8
//     // sumDigits('Chocolate') → 0

function sumDigits(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      sum += parseInt(str[i]);
    }
  }

  return sum;
}


`,
    },
    {
      day: 181,
      date: "Jun 30, 2025",
      code: `// String-3 --

// sameEnds

// Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".

// Examples

//     sameEnds('abXYab') → true
//     sameEnds('xx') → true
//     sameEnds('xxx') → true

function sameEnds(str) {
  let maxLen = Math.floor(str.length / 2);

  for (let len = 1; len <= maxLen; len++) {
    let start = str.substring(0, len);
    let end = str.substring(str.length - len);
    if (start == end) {
      return true;
    }
  }

  return false;
}


`,
    },
    {
      day: 182,
      date: "Jul 1, 2025",
      code: `// String-3 --

// mirrorEnds

// Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

// Examples

//     mirrorEnds('abXYZba') → ab
//     mirrorEnds('abca') → a
//     // mirrorEnds('aba') → aba

function mirrorEnds(string) {
  let count = 0;
  let result = "";
  for (let i = 0, j = string.length - 1; i < string.length; i++, j--) {
    if (string[i] == string[j]) count++;
    else break;
  }

  return string.substring(0, count);
}


`,
    },
    {
      day: 183,
      date: "Jul 2, 2025",
      code: `// String-3 --

// maxBlock

// Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.

// Examples

//     maxBlock('hoopla') → 2
//     maxBlock('abbCCCddBBBxx') → 3
//     maxBlock('') → 0

function maxBlock(str) {
  if (str.length == 0) return 0;

  let max = 1;
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      count++;
      if (count > max) max = count;
    } else {
      count = 1;
    }
  }

  return max;
}

`,
    },
    {
      day: 184,
      date: "Jul 3, 2025",
      code: `// Logic-1 --

// cigarParty

// When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

// Examples

//     cigarParty(30, false) → false
//     cigarParty(50, false) → true
//     cigarParty(70, true) → true

function cigarParty(cigars, isWeekend) {
  if (isWeekend && cigars >= 40) return true;
  else if (!isWeekend && cigars >= 40 && cigars <= 60) return true;
  else return false;
}


`,
    },
    {
      day: 185,
      date: "Jul 4, 2025",
      code: `// Logic-1 --

// dateFashion

// You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).

// Examples

//     dateFashion(5, 10) → 2
//     dateFashion(5, 2) → 0
//     dateFashion(5, 5) → 1

function dateFashion(you, date) {
  if (you <= 2 || date <= 2) return 0;
  else if (you >= 8 || date >= 8) return 2;
  else return 1;
}


`,
    },
    {
      day: 186,
      date: "Jul 5, 2025",
      code: `// Logic-1 --

// squirrelPlay

// The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

// Examples

//     squirrelPlay(70, false) → true
//     squirrelPlay(95, false) → false
//     squirrelPlay(95, true) → true

function squirrelPlay(temp, isSummer) {
  if (isSummer && temp <= 100 && temp >= 60) return true;
  else if (!isSummer && temp >= 60 && temp <= 90) return true;
  else return false;
}


`,
    },
    {
      day: 187,
      date: "Jul 6, 2025",
      code: `// Logic-1 --

// caughtSpeeding

// You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

// Examples

//     caughtSpeeding(60, false) → 0
//     caughtSpeeding(65, false) → 1
//     caughtSpeeding(65, true) → 0

function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) {
    if (speed <= 65) return 0;
    else if (speed > 65 && speed <= 85) return 1;
    else if (speed > 81) return 2;
  }

  if (speed <= 60) return 0;
  else if (speed > 60 && speed <= 80) return 1;
  else if (speed > 80) return 2;
}


`,
    },
    {
      day: 188,
      date: "Jul 7, 2025",
      code: `// Logic-1 --

// sortaSum

// Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

// Examples

//     sortaSum(3, 4) → 7
//     sortaSum(9, 4) → 20
//     sortaSum(10, 11) → 21

function sortaSum(a, b) {
  let sum = a + b;
  return sum < 20 && sum > 9 ? 20 : sum;
}


`,
    },
    {
      day: 189,
      date: "Jul 8, 2025",
      code: `// Logic-1 --

// alarmClock

// Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

// Examples

//     alarmClock(1, false) → 7:00
//     alarmClock(5, false) → 7:00
//     alarmClock(0, false) → 10:00

function alarmClock(day, vacation) {
  if ((day == 6 || day == 0) && vacation) return "off";
  else if (vacation) return "10:00";
  else if (day == 6 || day == 0) return "10:00";
  else return "7:00";
}


`,
    },
    {
      day: 190,
      date: "Jul 9, 2025",
      code: `// Logic-1 --

// love6

// The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

// Examples

//     love6(6, 4) → true
//     love6(4, 5) → false
//     love6(1, 5) → true

function love6(a, b) {
  let sum = a + b;
  let difference = Math.abs(a - b);
  if (a == 6 || b == 6) return true;
  if (sum == 6 || difference == 6) return true;
  else return false;
}


`,
    },
    {
      day: 191,
      date: "Jul 10, 2025",
      code: `// Logic-1 --

// in1To10

// Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

// Examples

//     in1To10(5, false) → true
//     in1To10(11, false) → false
//     in1To10(11, true) → true

function in1To10(n, outsideMode) {
  if (outsideMode)
    if (n <= 1 || n >= 10) return true;
    else return false;
  if (n >= 1 && n <= 10) return true;
  else return false;
}


`,
    },
    {
      day: 192,
      date: "Jul 11, 2025",
      code: `// Logic-1 --

// specialEleven

// We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator.

// Examples

//     specialEleven(22) → true
//     specialEleven(23) → true
//     specialEleven(24) → false

function specialEleven(n) {
  if (n % 11 == 0 || n % 11 == 1) return true;
  else return false;
}


`,
    },
    {
      day: 193,
      date: "Jul 12, 2025",
      code: `// Logic-1 --

// more20

// Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

// Examples

//     more20(20) → false
//     more20(21) → true
//     more20(22) → true

function more20(n) {
  if (n % 20 == 1 || n % 20 == 2) return true;
  else return false;
}


`,
    },
    {
      day: 194,
      date: "Jul 13, 2025",
      code: `// Logic-1 --

// old35

// Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

// Examples

//     old35(3) → true
//     old35(10) → true
//     old35(15) → false

function old35(n) {
  if (n % 3 == 0 && n % 5 == 0) return false;
  else if (n % 3 == 0) return true;
  else if (n % 5 == 0) return true;
  else return false;
}


`,
    },
    {
      day: 195,
      date: "Jul 14, 2025",
      code: `// Logic-1 --

// less20

// Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

// Examples

//     less20(18) → true
//     less20(19) → true
//     less20(20) → false

function less20(n) {
  if (n % 20 == 18 || n % 20 == 19) return true;
  else return false;
}


`,
    },
    {
      day: 196,
      date: "Jul 15, 2025",
      code: `// Logic-1 --

// nearTen

// Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.

// Examples

//     nearTen(12) → true
//     nearTen(17) → false
//     nearTen(19) → true

function nearTen(num) {
  if (num % 10 <= 2 || num % 10 >= 8) return true;
  else return false;
}


`,
    },
    {
      day: 197,
      date: "Jul 16, 2025",
      code: `// Logic-1 --

// teenSum

// Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

// Examples

//     teenSum(3, 4) → 7
//     teenSum(10, 13) → 19
//     teenSum(13, 2) → 19

function teenSum(a, b) {
  if (a < 20 && a > 12) return 19;
  else if (b < 20 && b > 12) return 19;
  else return a + b;
}


`,
    },
    {
      day: 198,
      date: "Jul 17, 2025",
      code: `// Logic-1 --

// answerCell

// Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

// Examples

//     answerCell(false, false, false) → true
//     answerCell(false, false, true) → false
//     answerCell(true, false, false) → false

function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep == true) return false;
  else if (isMom == true) return true;
  else if (isMorning == true) return false;
  else return true;
}


`,
    },
    {
      day: 199,
      date: "Jul 18, 2025",
      code: `// Logic-1 --

// teaParty

// We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

// Examples

//     teaParty(6, 8) → 1
//     teaParty(3, 8) → 0
//     teaParty(20, 6) → 2

function teaParty(tea, candy) {
  let doubleTea = tea * 2;
  let doubleCandy = candy * 2;
  if (candy < 5 || tea < 5) return 0;
  if (candy >= doubleTea || tea >= doubleCandy) return 2;
  if (tea >= 5 && candy >= 5) return 1;
  else return 0;
}


`,
    },
    {
      day: 200,
      date: "Jul 19, 2025",
      code: `// Logic-1 --

// fizzString

// Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged.

// Examples

//     fizzString('fig') → Fizz
//     fizzString('dib') → Buzz
//     fizzString('fib') → FizzBuzz

function fizzString(str) {
  if (str[str.length - 1] == "b" && str[0] == "f") return "FizzBuzz";
  else if (str[0] == "f") return "Fizz";
  else if (str[str.length - 1] == "b") return "Buzz";
  else return str;
}


`,
    },
    {
      day: 201,
      date: "Jul 20, 2025",
      code: `// Logic-1 --

// fizzString2

// Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly into another?

// Examples

//     fizzString2(1) → 1!
//     fizzString2(2) → 2!
//     fizzString2(3) → Fizz!

function fizzString2(n) {
  if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz!";
  else if (n % 3 == 0) return "Fizz!";
  else if (n % 5 == 0) return "Buzz!";
  else return n + "!";
}


`,
    },
    {
      day: 202,
      date: "Jul 21, 2025",
      code: `// Logic-1 --

// twoAsOne

// Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

// Examples

//     twoAsOne(1, 2, 3) → true
//     twoAsOne(3, 1, 2) → true
//     twoAsOne(3, 2, 2) → false

function twoAsOne(a, b, c) {
  let arr = [a, b, c];
  let sorted = arr.sort((a, b) => a - b);

  if (Math.abs(sorted[0]) + Math.abs(sorted[1]) == sorted[2]) return true;
  else return false;
}


`,
    },
    {
      day: 203,
      date: "Jul 22, 2025",
      code: `// Logic-1 --

// inOrder

// Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

// Examples

//     inOrder(1, 2, 4, false) → true
//     inOrder(1, 2, 1, false) → false
//     inOrder(1, 1, 2, true) → true

function inOrder(a, b, c, bOk) {
  if (bOk == true && c > b) return true;
  else if (b > a && c > b) return true;
  else return false;
}


`,
    },
    {
      day: 204,
      date: "Jul 23, 2025",
      code: `// Logic-1 --

// inOrderEqual

// Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

// Examples

//     inOrderEqual(2, 5, 11, false) → true
//     inOrderEqual(5, 7, 6, false) → false
//     inOrderEqual(5, 5, 7, true) → true

function inOrderEqual(a, b, c, equalOk) {
  if (equalOk == true && a <= b && b <= c) return true;
  else if (a < b && b < c) return true;
  else return false;
}


`,
    },
    {
      day: 205,
      date: "Jul 24, 2025",
      code: `// Logic-1 --

// lessBy10

// Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

// Examples

//     lessBy10(1, 7, 11) → true
//     lessBy10(1, 7, 10) → false
//     lessBy10(11, 1, 7) → true

function lessBy10(a, b, c) {
  let arr = [a, b, c];
  let sorted = arr.sort((a, b) => a - b);

  if (sorted[0] + 10 <= sorted[1] || sorted[0] + 10 <= sorted[2]) return true;
  else return false;
}


`,
    },
    {
      day: 206,
      date: "Jul 25, 2025",
      code: `// Logic-1 --

// withoutDoubles

// Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

// Examples

//     withoutDoubles(2, 3, true) → 5
//     withoutDoubles(3, 3, true) → 7
//     withoutDoubles(3, 3, false) → 6

function withoutDoubles(die1, die2, noDoubles) {
  if (noDoubles == true && die1 == die2) return die1 == 6 ? 7 : die1 * 2 + 1;
  else return die1 + die2;
}


`,
    },
    {
      day: 207,
      date: "Jul 26, 2025",
      code: `// Logic-1 --

// maxMod5

// Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

// Examples

//     maxMod5(2, 3) → 3
//     maxMod5(6, 2) → 6
//     maxMod5(3, 2) → 3

function maxMod5(a, b) {
  if (a == b) return 0;
  else if (a % 5 == b % 5) return a < b ? a : b;
  else return a < b ? b : a;
}


`,
    },
    {
      day: 208,
      date: "Jul 27, 2025",
      code: `// Logic-1 --

// redTicket

// You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

// Examples

//     redTicket(2, 2, 2) → 10
//     redTicket(2, 2, 1) → 0
//     redTicket(0, 0, 0) → 5

function redTicket(a, b, c) {
  if (a + b + c == 6) return 10;
  else if (a == b && b == c) return 5;
  else if (a != b && a != c) return 1;
  else return 0;
}


`,
    },
    {
      day: 209,
      date: "Jul 28, 2025",
      code: `// Logic-1 --

// greenTicket

// You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.

// Examples

//     greenTicket(1, 2, 3) → 0
//     greenTicket(2, 2, 2) → 20
//     greenTicket(1, 1, 2) → 10

function greenTicket(a, b, c) {
  if (a != b && a != c && b != c) return 0;
  else if (a == b && b == c) return 20;
  else return 10;
}


`,
    },
    {
      day: 210,
      date: "Jul 29, 2025",
      code: `// Logic-1 --

// blueTicket

// You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.

// Examples

//     blueTicket(9, 1, 0) → 10
//     blueTicket(9, 2, 0) → 0
//     blueTicket(6, 1, 4) → 10

function blueTicket(a, b, c) {
  let ab = a + b;
  let bc = b + c;
  let ac = a + c;

  if (ab == 10 || bc == 10 || ac == 10) return 10;
  else if (ab == bc + 10 || ab == ac + 10) return 5;
  else return 0;
}


`,
    },
    {
      day: 211,
      date: "Jul 30, 2025",
      code: `// Logic-1 --

// shareDigit

// Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

// Examples

//     shareDigit(12, 23) → true
//     shareDigit(12, 43) → false
//     shareDigit(12, 44) → false

function shareDigit(a, b) {
  if (
    a % 10 == b % 10 ||
    Math.floor(a / 10) == Math.floor(b / 10) ||
    Math.floor(a / 10) == b % 10 ||
    a % 10 == Math.floor(b / 10)
  )
    return true;
  else return false;
}


`,
    },
    {
      day: 212,
      date: "Jul 31, 2025",
      code: `// Logic-1 --

// sumLimit

// Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of the string.)

// Examples

//     sumLimit(2, 3) → 5
//     sumLimit(8, 3) → 8
//     sumLimit(8, 1) → 9

function sumLimit(a, b) {
  let aString = String(a);
  let bString = String(b);
  let sum = a + b;
  let sumString = String(sum);

  if (sumString.length == aString.length) return sum;
  else if (sumString.length > aString.length) return a;
}


`,
    },
    {
      day: 213,
      date: "Aug 1, 2025",
      code: `// String-3 --

// sumNumbers

// Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

// Examples

//     sumNumbers('abc123xyz') → 123
//     sumNumbers('aa11b33') → 44
//     sumNumbers('7 11') → 18

function sumNumbers(str) {
  let sum = 0;
  let num = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      num += str[i]; // build the current number
    } else {
      if (num != "") {
        sum += parseInt(num);
        num = "";
      }
    }
  }

  // add the last number if the string ends with digits
  if (num != "") {
    sum += parseInt(num);
  }

  return sum;
}


`,
    },
    {
      day: 214,
      date: "Aug 2, 2025",
      code: `// Logic-2 --

// makeBricks

// We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

// Examples

//     makeBricks(3, 1, 8) → true
//     makeBricks(3, 1, 9) → false
//     makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal) {
  let buildable = false;

  if (goal % 5 > small) return false;
  else if (big == 0 && small < goal) return false;
  else if (big * 5 + small < goal) return false;
  else return true;
}


`,
    },
    {
      day: 215,
      date: "Aug 3, 2025",
      code: `// Logic-2 --

// loneSum

// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

// Examples

//     loneSum(1, 2, 3) → 6
//     loneSum(3, 2, 3) → 2
//     loneSum(3, 3, 3) → 0

function loneSum(a, b, c) {
  if (a == b && a == c) return 0;
  else if (a == b) return c;
  else if (b == c) return a;
  else if (a == c) return b;
  else if (a == b && a == c) return 0;
  else return a + b + c;
}


`,
    },
    {
      day: 216,
      date: "Aug 4, 2025",
      code: `// Logic-2 --

// luckySum

// Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

// Examples

//     luckySum(1, 2, 3) → 6
//     luckySum(1, 2, 13) → 3
//     luckySum(1, 13, 3) → 1

function luckySum(a, b, c) {
  let arr = [a, b, c];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 13) break;
    else newArr.push(arr[i]);
  }
  return newArr.length > 1
    ? newArr.reduce((a, b) => a + b, 0)
    : Number(newArr.join(""));
}


`,
    },
    {
      day: 217,
      date: "Aug 5, 2025",
      code: `// Logic-2 --

// noTeenSum

// Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().

// Examples

//     noTeenSum(1, 2, 3) → 6
//     noTeenSum(2, 13, 1) → 3
//     noTeenSum(2, 1, 14) → 3

function noTeenSum(a, b, c) {
  let arr = [a, b, c];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 13 && arr[i] <= 19) {
      if (arr[i] == 15 || arr[i] == 16) continue;
      else arr[i] = 0;
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}


`,
    },
    {
      day: 218,
      date: "Aug 6, 2025",
      code: `// Logic-2 --

// roundSum

// For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

// Examples

//     roundSum(16, 17, 18) → 60
//     roundSum(12, 13, 14) → 30
//     roundSum(6, 4, 4) → 10

function roundSum(a, b, c) {
  let arr = [a, b, c];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 >= 5) arr[i] = arr[i] + (10 - (arr[i] % 10));
    else arr[i] = arr[i] - (arr[i] % 10);
  }
  return arr.reduce((a, b) => a + b, 0);
}


`,
    },
    {
      day: 219,
      date: "Aug 7, 2025",
      code: `// Logic-2 --

// closeFar

// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

// Examples

//     closeFar(1, 2, 10) → true
//     closeFar(1, 2, 3) → false
//     closeFar(4, 1, 3) → true

function closeFar(a, b, c) {
  if (Math.abs(a - b) <= 1 && Math.abs(a - c) > 1 && Math.abs(c - b) > 1)
    return true;
  else if (Math.abs(a - c) <= 1 && Math.abs(a - b) > 1 && Math.abs(b - c) > 1)
    return true;
  else return false;
}


`,
    },
    {
      day: 220,
      date: "Aug 8, 2025",
      code: `// Logic-2 --

// blackjack

// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

// Examples

//     blackjack(19, 21) → 21
//     blackjack(21, 19) → 21
//     blackjack(19, 22) → 19

function blackjack(a, b) {
  if (a > 21 && b > 21) return 0;
  else if (a > b && a <= 21) return a;
  else if (b > a && b <= 21) return b;
  else if (a > 21) return b;
  else return a;
}


`,
    },
    {
      day: 221,
      date: "Aug 9, 2025",
      code: `// Logic-2 --

// evenlySpaced

// Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

// Examples

//     evenlySpaced(2, 4, 6) → true
//     evenlySpaced(4, 6, 2) → true
//     evenlySpaced(4, 6, 3) → false

function evenlySpaced(a, b, c) {
  let arr = [a, b, c];
  let sorted = arr.sort((a, b) => a - b);

  if (sorted[2] - sorted[1] == arr[1] - arr[0]) return true;
  else return false;
}


`,
    },
    {
      day: 222,
      date: "Aug 10, 2025",
      code: `// Logic-2 --

// makeChocolate

// We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

// Examples

//     makeChocolate(4, 1, 9) → 4
//     makeChocolate(4, 1, 10) → -1
//     makeChocolate(4, 1, 7) → 2

function makeChocolate(small, big, goal) {
  let bigUsed = Math.min(Math.floor(goal / 5), big);

  let remaining = goal - bigUsed * 5;

  if (remaining <= small) {
    return remaining;
  } else {
    return -1;
  }
}


`,
    },
    {
      day: 223,
      date: "Aug 11, 2025",
      code: `// Array-1 --

// firstLast6

// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

// Examples

//     firstLast6([1, 2, 6]) → true
//     firstLast6([6, 1, 2, 3]) → true
//     firstLast6([13, 6, 1, 2, 3]) → false

function firstLast6(nums) {
  if (nums[0] == 6 || nums[nums.length - 1] == 6) return true;
  else return false;
}


`,
    },
    {
      day: 224,
      date: "Aug 12, 2025",
      code: `// Array-1 --

// sameFirstLast

// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

// Examples

//     sameFirstLast([1, 2, 3]) → false
//     sameFirstLast([1, 2, 3, 1]) → true
//     sameFirstLast([1, 2, 1]) → true

function sameFirstLast(nums) {
  if (nums.length > 0 && nums[0] == nums[nums.length - 1]) return true;
  else return false;
}


`,
    },
    {
      day: 225,
      date: "Aug 13, 2025",
      code: `// Array-1 --

// makePi

// Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

// Examples

//     makePi() → 3,1,4

function makePi() {
  return [3, 1, 4];
}

//a real brain buster...


`,
    },
    {
      day: 226,
      date: "Aug 14, 2025",
      code: `// Array-1 --

// commonEnd

// Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

// Examples

//     commonEnd([1, 2, 3], [7, 3]) → true
//     commonEnd([1, 2, 3], [7, 3, 2]) → false
//     commonEnd([1, 2, 3], [1, 3]) → true

function commonEnd(a, b) {
  if (a[0] == b[0]) return true;
  else if (a[a.length - 1] == b[b.length - 1]) return true;
  else return false;
}


`,
    },
    {
      day: 227,
      date: "Aug 15, 2025",
      code: `// Array-1 --

// sum3

// Given an array of ints length 3, return the sum of all the elements.

// Examples

//     sum3([1, 2, 3]) → 6
//     sum3([5, 11, 2]) → 18
//     sum3([7, 0, 0]) → 7

function sum3(nums) {
  return nums.reduce((a, b) => a + b, 0);
}

`,
    },
    {
      day: 228,
      date: "Aug 16, 2025",
      code: `// Array-1 --

// rotateLeft3

// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

// Examples

//     rotateLeft3([1, 2, 3]) → 2,3,1
//     rotateLeft3([5, 11, 9]) → 11,9,5
//     rotateLeft3([7, 0, 0]) → 0,0,7

function rotateLeft3(nums) {
  nums.push(nums[0]);
  nums.splice(0, 1);
  return nums;
}

`,
    },
    {
      day: 229,
      date: "Aug 17, 2025",
      code: `// Array-1 --

// reverse3

// Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

// Examples

//     reverse3([1, 2, 3]) → 3,2,1
//     reverse3([5, 11, 9]) → 9,11,5
//     reverse3([7, 0, 0]) → 0,0,7

function reverse3(nums) {
  return nums.reverse();
}


`,
    },
    {
      day: 230,
      date: "Aug 18, 2025",
      code: `// Array-1 --

// maxEnd3

// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

// Examples

//     maxEnd3([1, 2, 3]) → 3,3,3
//     maxEnd3([11, 5, 9]) → 11,11,11
//     maxEnd3([2, 11, 3]) → 3,3,3

function maxEnd3(nums) {
  if (nums[0] > nums[nums.length - 1]) return [nums[0], nums[0], nums[0]];
  else
    return [
      nums[nums.length - 1],
      nums[nums.length - 1],
      nums[nums.length - 1],
    ];
}


`,
    },
    {
      day: 231,
      date: "Aug 19, 2025",
      code: `// Array-1 --

// sum2

// Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

// Examples

//     sum2([1, 2, 3]) → 3
//     sum2([1, 1]) → 2
//     sum2([1, 1, 1, 1]) → 2

function sum2(nums) {
  if (nums.length > 1) return nums[0] + nums[1];
  else if (nums.length == 1) return nums[0];
  else return 0;
}


`,
    },
    {
      day: 232,
      date: "Aug 20, 2025",
      code: `// Array-1 --

// middleWay

// Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

// Examples

//     middleWay([1, 2, 3], [4, 5, 6]) → 2,5
//     middleWay([7, 7, 7], [3, 8, 0]) → 7,8
//     middleWay([5, 2, 9], [1, 4, 5]) → 2,4

function middleWay(a, b) {
  return [a[1], b[1]];
}


`,
    },
    {
      day: 233,
      date: "Aug 21, 2025",
      code: `// Array-1 --

// makeEnds

// Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

// Examples

//     makeEnds([1, 2, 3]) → 1,3
//     makeEnds([1, 2, 3, 4]) → 1,4
//     makeEnds([7, 4, 6, 2]) → 7,2

function makeEnds(nums) {
  return [nums[0], nums[nums.length - 1]];
}


`,
    },
    {
      day: 234,
      date: "Aug 22, 2025",
      code: `// Array-1 --

// has23

// Given an int array length 2, return true if it contains a 2 or a 3.

// Examples

//     has23([2, 5]) → true
//     has23([4, 3]) → true
//     has23([4, 5]) → false

function has23(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 || nums[i] == 3) return true;
  }
  return false;
}

`,
    },
    {
      day: 235,
      date: "Aug 23, 2025",
      code: `// Array-1 --

// no23

// Given an int array length 2, return true if it does not contain a 2 or 3.

// Examples

//     no23([4, 5]) → true
//     no23([4, 2]) → false
//     no23([3, 5]) → false

function no23(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 || nums[i] == 3) return false;
  }
  return true;
}


`,
    },
    {
      day: 236,
      date: "Aug 24, 2025",
      code: `// Array-1 --

// makeLast

// Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more.

// Examples

//     makeLast([4, 5, 6]) → 0,0,0,0,0,6
//     makeLast([1, 2]) → 0,0,0,2
//     makeLast([3]) → 0,3

function makeLast(nums) {
  let double = nums.length * 2;
  let newArr = [];
  for (let i = 0; i < double; i++) {
    newArr.push(0);
  }
  newArr[newArr.length - 1] = nums[nums.length - 1];
  return newArr;
}


`,
    },
    {
      day: 237,
      date: "Aug 25, 2025",
      code: `// Array-1 --

// double23

// Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

// Examples

//     double23([2, 2]) → true
//     double23([3, 3]) → true
//     double23([2, 3]) → false

function double23(nums) {
  let twoCount = 0;
  let threeCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2) twoCount++;
    else if (nums[i] == 3) threeCount++;
  }

  return twoCount == 2 || threeCount == 2;
}


`,
    },
    {
      day: 238,
      date: "Aug 26, 2025",
      code: `// Array-1 --

// fix23

// Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

// Examples

//     fix23([1, 2, 3]) → 1,2,0
//     fix23([2, 3, 5]) → 2,0,5
//     fix23([1, 2, 1]) → 1,2,1

function fix23(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 && nums[i + 1] == 3) nums[i + 1] = 0;
  }
  return nums;
}


`,
    },
    {
      day: 239,
      date: "Aug 27, 2025",
      code: `// Array-1 --

// start1

// Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

// Examples

//     start1([1, 2, 3], [1, 3]) → 2
//     start1([7, 2, 3], [1]) → 1
//     start1([1, 2], []) → 1

function start1(a, b) {
  let oneCount = 0;

  if (a[0] == 1) oneCount++;
  if (b[0] == 1) oneCount++;

  return oneCount;
}


`,
    },
    {
      day: 240,
      date: "Aug 28, 2025",
      code: `// Array-1 --

// biggerTwo

// Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

// Examples

//     biggerTwo([1, 2], [3, 4]) → 3,4
//     biggerTwo([3, 4], [1, 2]) → 3,4
//     biggerTwo([1, 1], [1, 2]) → 1,2

function biggerTwo(a, b) {
  let sumA = a.reduce((a, b) => a + b, 0);
  let sumB = b.reduce((a, b) => a + b, 0);

  if (sumA >= sumB) return a;
  else return b;
}


`,
    },
    {
      day: 241,
      date: "Aug 29, 2025",
      code: `// Array-1 --

// makeMiddle

// Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

// Examples

//     makeMiddle([1, 2, 3, 4]) → 2,3
//     makeMiddle([7, 1, 2, 3, 4, 9]) → 2,3
//     makeMiddle([1, 2]) → 1,2

function makeMiddle(nums) {
  return nums.slice(nums.length / 2 - 1, nums.length / 2 + 1);
}


`,
    },
    {
      day: 242,
      date: "Aug 30, 2025",
      code: `// Array-1 --

// plusTwo

// Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

// Examples

//     plusTwo([1, 2], [3, 4]) → 1,2,3,4
//     plusTwo([4, 4], [2, 2]) → 4,4,2,2
//     plusTwo([9, 2], [3, 4]) → 9,2,3,4

function plusTwo(a, b) {
  let result = [];
  for (let i = 0; i < 2; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < 2; i++) {
    result.push(b[i]);
  }
  return result;
}


`,
    },
    {
      day: 243,
      date: "Aug 31, 2025",
      code: `// Array-1 --

// swapEnds

// Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

// Examples

//     swapEnds([1, 2, 3, 4]) → 4,2,3,1
//     swapEnds([1, 2, 3]) → 3,2,1
//     swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8

function swapEnds(nums) {
  let temp;

  temp = nums[0];
  nums[0] = nums[nums.length - 1];
  nums[nums.length - 1] = temp;

  return nums;
}

`,
    },
    {
      day: 244,
      date: "Sep 1, 2025",
      code: `// Array-1 --

// midThree

// Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

// Examples

//     midThree([1, 2, 3, 4, 5]) → 2,3,4
//     midThree([8, 6, 7, 5, 3, 0, 9]) → 7,5,3
//     midThree([1, 2, 3]) → 1,2,3

function midThree(nums) {
  return [
    nums[Math.floor(nums.length / 2 - 1)],
    nums[Math.floor(nums.length / 2)],
    nums[Math.ceil(nums.length / 2)],
  ];
}


`,
    },
    {
      day: 245,
      date: "Sep 2, 2025",
      code: `// Array-1 --

// maxTriple

// Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

// Examples

//     maxTriple([1, 2, 3]) → 3
//     maxTriple([1, 5, 3]) → 5
//     maxTriple([5, 2, 3]) → 5

function maxTriple(nums) {
  let checking = [
    nums[0],
    nums[Math.floor(nums.length / 2)],
    nums[nums.length - 1],
  ];

  checking = checking.sort((a, b) => a - b);
  return checking[2];
}


`,
    },
    {
      day: 246,
      date: "Sep 3, 2025",
      code: `// Array-1 --

// frontPiece

// Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

// Examples

//     frontPiece([1, 2, 3]) → 1,2
//     frontPiece([1, 2]) → 1,2
//     frontPiece([1]) → 1

function frontPiece(nums) {
  if (nums.length <= 2) return nums;
  else return [nums[0], nums[1]];
}


`,
    },
    {
      day: 247,
      date: "Sep 4, 2025",
      code: `// Array-1 --

// unlucky1

// We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

// Examples

//     unlucky1([1, 3, 4, 5]) → true
//     unlucky1([2, 1, 3, 4, 5]) → true
//     unlucky1([1, 1, 1]) → false

function unlucky1(nums) {
  for (let i = 0; i < 2; i++) {
    if (nums[i] == 1 && nums[i + 1] == 3) return true;
  }
  for (let i = nums.length - 2; i < nums.length; i++) {
    if (nums[i] == 1 && nums[i + 1] == 3) return true;
  }
  return false;
}


`,
    },
    {
      day: 248,
      date: "Sep 5, 2025",
      code: `// Array-1 --

// make2

// Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

// Examples

//     make2([4, 5], [1, 2, 3]) → 4,5
//     make2([4], [1, 2, 3]) → 4,1
//     make2([], [1, 2]) → 1,2

function make2(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    result.push(b[i]);
  }

  return [result[0], result[1]];
}


`,
    },
    {
      day: 249,
      date: "Sep 6, 2025",
      code: `// Array-1 --

// front11

// Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

// Examples

//     front11([1, 2, 3], [7, 9, 8]) → 1,7
//     front11([1], [2]) → 1,2
//     front11([1, 7], []) → 1

function front11(a, b) {
  if (b.length == 0 && a.length == 0) return [];
  else if (a.length == 0) return [b[0]];
  else if (b.length == 0) return [a[0]];
  else return [a[0], b[0]];
}


`,
    },
    {
      day: 250,
      date: "Sep 7, 2025",
      code: `// Array-2 --

// findLowestIndex

// Return the index of the minimum value in an array. The input array will have at least one element in it.

// Examples

//     findLowestIndex([99, 98, 97, 96, 95]) → 4
//     findLowestIndex([2, 2, 0]) → 2
//     findLowestIndex([1, 3, 5]) → 0

function findLowestIndex(nums) {
  let lowest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < lowest) lowest = nums[i];
  }
  return nums.indexOf(lowest);
}


`,
    },
    {
      day: 251,
      date: "Sep 8, 2025",
      code: `// Array-2 --

// countEvens

// Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// Examples

//     countEvens([2, 1, 2, 3, 4]) → 3
//     countEvens([2, 2, 0]) → 3
//     countEvens([1, 3, 5]) → 0

function countEvens(nums) {
  let evens = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) evens++;
  }
  return evens;
}


`,
    },
    {
      day: 252,
      date: "Sep 9, 2025",
      code: `// Array-2 --

// bigDiff

// Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

// Examples

//     bigDiff([10, 3, 5, 6]) → 7
//     bigDiff([7, 2, 10, 9]) → 8
//     bigDiff([2, 10, 7, 2]) → 8

function bigDiff(nums) {
  let sorted = nums.sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
}

`,
    },
    {
      day: 253,
      date: "Sep 10, 2025",
      code: `// Array-2 --

// centeredAverage

// Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

// Examples

//     centeredAverage([1, 2, 3, 4, 100]) → 3
//     centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5.2
//     centeredAverage([-10, -4, -2, -4, -2, 0]) → -3

function centeredAverage(nums) {
  let newArr = nums.sort((a, b) => a - b);
  let trimed = [];
  for (let i = 1; i < newArr.length - 1; i++) {
    trimed.push(newArr[i]);
  }
  return trimed.reduce((a, b) => a + b) / trimed.length;
}


`,
    },
    {
      day: 254,
      date: "Sep 11, 2025",
      code: `// Array-2 --

// sum13

// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

// Examples

//     sum13([1, 2, 2, 1]) → 6
//     sum13([1, 1]) → 2
//     sum13([1, 2, 2, 1, 13]) → 6

function sum13(nums) {
  let newArr = [];
  if (nums.length == 0) return 0;
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != 13 && nums[i - 1] != 13) newArr.push(nums[i]);
  return newArr.reduce((a, b) => a + b, 0);
}


`,
    },
    {
      day: 255,
      date: "Sep 12, 2025",
      code: `// Array-2 --

// sum67

// Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

// Examples

//     sum67([1, 2, 2]) → 5
//     sum67([1, 2, 2, 6, 99, 99, 7]) → 5
//     sum67([1, 1, 6, 7, 2]) → 4

function sum67(nums) {
  let newArr = [];
  let inside = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 6 && inside == false) newArr.push(nums[i]);
    else inside = true;
    if (nums[i] == 7) inside = false;
  }

  return newArr.reduce((a, b) => a + b, 0);
}


`,
    },
    {
      day: 256,
      date: "Sep 13, 2025",
      code: `// Array-2 --

// has22

// Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

// Examples

//     has22([1, 2, 2]) → true
//     has22([1, 2, 1, 2]) → false
//     has22([2, 1, 2]) → false

function has22(nums) {
  if (nums.length === 0) return false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) return true;
  }
  return false;
}


`,
    },
    {
      day: 257,
      date: "Sep 14, 2025",
      code: `// Array-2 --

// lucky13

// Given an array of ints, return true if the array contains no 1's and no 3's.

// Examples

//     lucky13([0, 2, 4]) → true
//     lucky13([1, 2, 3]) → false
//     lucky13([1, 2, 4]) → false

function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) return false;
    else if (nums[i] === 3) return false;
  }
  return true;
}


`,
    },
    {
      day: 258,
      date: "Sep 15, 2025",
      code: `// Array-2 --

// sum28

// Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

// Examples

//     sum28([2, 3, 2, 2, 4, 2]) → true
//     sum28([2, 3, 2, 2, 4, 2, 2]) → false
//     sum28([1, 2, 3, 4]) → false

function sum28(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2) newArr.push(nums[i]);
  }
  let reduced = newArr.reduce((a, b) => a + b, 0);
  if (reduced == 8) return true;
  else return false;
}


`,
    },
    {
      day: 259,
      date: "Sep 16, 2025",
      code: `// Array-2 --

// more14

// Given an array of ints, return true if the number of 1's is greater than the number of 4's

// Examples

//     more14([1, 4, 1]) → true
//     more14([1, 4, 1, 4]) → false
//     more14([1, 1]) → true

function more14(nums) {
  let oneCount = 0;
  let fourCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) oneCount++;
    else if (nums[i] == 4) fourCount++;
  }

  if (oneCount > fourCount) return true;
  else return false;
}


`,
    },
    {
      day: 260,
      date: "Sep 17, 2025",
      code: `// Array-2 --

// prependSum

// Return a modified version of the input array (nums), where the first two items have been removed and one item – the sum of those two items - is added to the start of the array.

// Examples

//     prependSum([1, 2, 4, 4]) → 3,4,4
//     prependSum([3, 3, 0]) → 6,0
//     prependSum([1, 1, 1, 1, 1]) → 2,1,1,1

function prependSum(nums) {
  let first = nums[0];
  let second = nums[1];

  let sum = first + second;

  let chopped = nums.slice(2, nums.length);

  chopped.unshift(sum);

  return chopped;
}


`,
    },
    {
      day: 261,
      date: "Sep 18, 2025",
      code: `// Array-2 --

// fizzArray

// Given a number n, create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new array is let myArray = [];

// Examples

//     fizzArray(4) → 0,1,2,3
//     fizzArray(1) → 0
//     fizzArray(10) → 0,1,2,3,4,5,6,7,8,9

function fizzArray(n) {
  let newArr = [];
  for (let i = 0; i < n; i++) newArr.push(i);
  return newArr;
}


`,
    },
    {
      day: 262,
      date: "Sep 19, 2025",
      code: `// Array-2 --

// only14

// Given an array of ints, return true if every element is a 1 or a 4.

// Examples

//     only14([1, 4, 1, 4]) → true
//     only14([1, 4, 2, 4]) → false
//     only14([1, 1]) → true

function only14(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 1 && nums[i] != 4) return false;
  }
  return true;
}

`,
    },
    {
      day: 263,
      date: "Sep 20, 2025",
      code: `// Array-2 --

// fizzArray2

// Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String(xxx) will make the String form of most types.

// Examples

//     fizzArray2(4) → 0,1,2,3
//     fizzArray2(10) → 0,1,2,3,4,5,6,7,8,9
//     fizzArray2(2) → 0,1

function fizzArray2(n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(String(i));
  }
  return newArr;
}


`,
    },
    {
      day: 264,
      date: "Sep 21, 2025",
      code: `// Array-2 --

// no14

// Given an array of ints, return true if it contains no 1's or it contains no 4's.

// Examples

//     no14([1, 2, 3]) → true
//     no14([1, 2, 3, 4]) → false
//     no14([2, 3, 4]) → true

function no14(nums) {
  let countFour = 0;
  let countOne = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 4) countFour++;
    else if (nums[i] == 1) countOne++;
  }

  if (countOne > 0 && countFour > 0) return false;
  else return true;
}


`,
    },
    {
      day: 265,
      date: "Sep 22, 2025",
      code: `// Array-2 --

// isEverywhere

// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

// Examples

//     isEverywhere([1, 2, 1, 3], 1) → true
//     isEverywhere([1, 2, 1, 3], 2) → false
//     isEverywhere([1, 2, 1, 3, 4], 1) → false

function isEverywhere(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != val && nums[i + 1] != val) return false;
  }
  return true;
}


`,
    },
    {
      day: 266,
      date: "Sep 23, 2025",
      code: `// Array-2 --

// either24

// Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

// Examples

//     either24([1, 2, 2]) → true
//     either24([4, 4, 1]) → true
//     either24([4, 4, 1, 2, 2]) → false

function either24(nums) {
  let twos;
  let fours;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2) twos = true;
    else if (nums[i] == 4 && nums[i + 1] == 4) fours = true;
  }

  if (twos == true && fours == true) return false;
  else if (twos == true) return true;
  else if (fours == true) return true;
  else return false;
}


`,
    },
    {
      day: 267,
      date: "Sep 24, 2025",
      code: `// Array-2 --

// matchUp

// Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.

// Examples

//     matchUp([1, 2, 3], [2, 3, 10]) → 0
//     matchUp([1, 2, 3], [2, 3, 5]) → 0
//     matchUp([1, 2, 3], [2, 3, 3]) → 0

function matchUp(nums1, nums2) {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    let diff = Math.abs(nums1[i] - nums2[i]);
    if (diff <= 2 && diff !== 0) count++;
  }
  return count;
}


`,
    },
    {
      day: 268,
      date: "Sep 25, 2025",
      code: `// Array-2 --

// has77

// Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

// Examples

//     has77([1, 7, 7]) → true
//     has77([1, 7, 1, 7]) → true
//     has77([1, 7, 1, 1, 7]) → false

function has77(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 7 && nums[i + 1] === 7) return true;
    else if (nums[i] === 7 && nums[i + 2] === 7) return true;
  }
  return false;
}


`,
    },
    {
      day: 269,
      date: "Sep 26, 2025",
      code: `// Array-2 --

// has12

// Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

// Examples

//     has12([1, 3, 2]) → true
//     has12([3, 1, 2]) → true
//     has12([3, 1, 4, 5, 2]) → true

function has12(nums) {
  let one;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) one = true;
    if (one && nums[i] == 2) return true;
  }
  return false;
}


`,
    },
    {
      day: 270,
      date: "Sep 27, 2025",
      code: `// Array-2 --

// modThree

// Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.

// Examples

//     modThree([2, 1, 3, 5]) → true
//     modThree([2, 1, 2, 5]) → false
//     modThree([2, 4, 2, 5]) → true

function modThree(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 === 0) return true;
    if (nums[i] % 2 != 0 && nums[i + 1] % 2 != 0 && nums[i + 2] % 2 != 0)
      return true;
  }
  return false;
}

`,
    },
    {
      day: 271,
      date: "Sep 28, 2025",
      code: `// Array-2 --

// findTheMedian

// Write a method that returns the median value of an array. The input array will never be empty. If the array is odd in length, the median is the value in the centre of the array. If the array is even, the median should be the average of the two middle values. Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.

// Examples

//     findTheMedian([4,9,9,2,1,5]) → 5.5
//     findTheMedian([1, 5, 3, 1 , 5]) → 3
//     findTheMedian([10, 12, 15]) → 12

function findTheMedian(nums) {
  let middleIdx = (nums.length - 1) / 2;
  if (nums.length % 2 === 0) {
    middleIdx = nums.length / 2;
    return (nums[middleIdx - 1] + nums[middleIdx]) / 2;
  } else return nums[middleIdx];
}


`,
    },
    {
      day: 272,
      date: "Sep 29, 2025",
      code: `// Array-2 --

// haveThree

// Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

// Examples

//     haveThree([3, 1, 3, 1, 3]) → true
//     haveThree([3, 1, 3, 3]) → false
//     haveThree([3, 4, 3, 3, 4]) → false

function haveThree(nums) {
  let countThree = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 3 && nums[i + 1] == 3) return false;
    if (nums[i] == 3) countThree++;
  }
  if (countThree == 3) return true;
  else return false;
}


`,
    },
    {
      day: 273,
      date: "Sep 30, 2025",
      code: `// Array-2 --

// twoTwo

// Given an array of ints, return true if every 2 that appears in the array is next to another 2.

// Examples

//     twoTwo([4, 2, 2, 3]) → true
//     twoTwo([2, 2, 4]) → true
//     twoTwo([2, 2, 4, 2]) → false

function twoTwo(nums) {
  let foundPair = false;

  let twoCheck = nums.filter((e) => e == 2);
  if (twoCheck.length == 0) return true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2)
      if (nums[i + 1] == 2) foundPair = true;
      else if (nums[i - 1] != 2) foundPair = false;
  }

  return foundPair;
}


`,
    },
    {
      day: 274,
      date: "Oct 1, 2025",
      code: `// String-3 --

// sameEnds

// Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".

// Examples

//     sameEnds('abXYab') → true
//     sameEnds('xx') → true
//     sameEnds('xxx') → true

function sameEnds(str) {
  let maxLen = Math.floor(str.length / 2);

  for (let len = 1; len <= maxLen; len++) {
    let start = str.substring(0, len);
    let end = str.substring(str.length - len);
    if (start == end) {
      return true;
    }
  }

  return false;
}


`,
    },
    {
      day: 275,
      date: "Oct 2, 2025",
      code: `// String-3 --

// mirrorEnds

// Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

// Examples

//     mirrorEnds('abXYZba') → ab
//     mirrorEnds('abca') → a
//     mirrorEnds('aba') → aba

function mirrorEnds(string) {
  let count = 0;
  let result = "";
  for (let i = 0, j = string.length - 1; i < string.length; i++, j--) {
    if (string[i] == string[j]) count++;
    else break;
  }

  return string.substring(0, count);
}


`,
    },
    {
      day: 276,
      date: "Oct 3, 2025",
      code: `// String-3 --

// maxBlock

// Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.

// Examples

//     maxBlock('hoopla') → 2
//     maxBlock('abbCCCddBBBxx') → 3
//     maxBlock('') → 0

function maxBlock(str) {
  if (str.length == 0) return 0;

  let max = 1;
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      count++;
      if (count > max) max = count;
    } else {
      count = 1;
    }
  }

  return max;
}


`,
    },
    {
      day: 277,
      date: "Oct 4, 2025",
      code: `// String-3 --

// sumNumbers

// Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

// Examples

//     sumNumbers('abc123xyz') → 123
//     sumNumbers('aa11b33') → 44
//     sumNumbers('7 11') → 18

function sumNumbers(str) {
  let sum = 0;
  let num = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      num += str[i]; // build the current number
    } else {
      if (num != "") {
        sum += parseInt(num);
        num = "";
      }
    }
  }

  // add the last number if the string ends with digits
  if (num != "") {
    sum += parseInt(num);
  }

  return sum;
}


`,
    },
    {
      day: 278,
      date: "Oct 5, 2025",
      code: `// String-3 --

// notReplace

// Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)

// Examples

//     notReplace('is test') → is not test
//     notReplace('is-is') → is not-is not
//     notReplace('This is right') → This is not right

function notReplace(str) {
  let result = "";
  let i = 0;

  while (i < str.length) {
    if (
      i + 1 < str.length &&
      str.substring(i, i + 2) == "is" &&
      (i == 0 || !isLetter(str[i - 1])) &&
      (i + 2 == str.length || !isLetter(str[i + 2]))
    ) {
      result += "is not";
      i += 2;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

// helper function like Character.isLetter
function isLetter(c) {
  return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
}


`,
    },
    {
      day: 279,
      date: "Oct 6, 2025",
      code: `// Array-2 --

// tripleUp

// Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.

// Examples

//     tripleUp([1, 4, 5, 6, 2]) → true
//     tripleUp([1, 2, 3]) → true
//     tripleUp([1, 2, 4]) → false

function tripleUp(nums) {
  let check = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1] && nums[i + 1] + 1 == nums[i + 2])
      check = true;
  }
  return check;
}


`,
    },
    {
      day: 280,
      date: "Oct 7, 2025",
      code: `// Array-2 --

// fizzArray3

// Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number. Note that a length-0 array is valid.

// Examples

//     fizzArray3(5, 10) → 5,6,7,8,9
//     fizzArray3(11, 18) → 11,12,13,14,15,16,17
//     fizzArray3(1, 3) → 1,2

function fizzArray3(start, end) {
  let newArr = [];

  for (let i = start; i < end; i++) {
    newArr.push(i);
  }
  return newArr;
}


`,
    },
    {
      day: 281,
      date: "Oct 8, 2025",
      code: `// Array-2 --

// shiftLeft

// Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.

// Examples

//     shiftLeft([6, 2, 5, 3]) → 2,5,3,6
//     shiftLeft([1, 2]) → 2,1
//     shiftLeft([1]) → 1

function shiftLeft(nums) {
  if (nums.length == 0) return [];
  let newArr = nums.slice(1);

  let firstElement = nums[0];

  newArr.push(firstElement);

  return newArr;
}


`,
    },
    {
      day: 282,
      date: "Oct 9, 2025",
      code: `// Array-2 --

// tenRun

// For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

// Examples

//     tenRun([2, 10, 3, 4, 20, 5]) → 2,10,10,10,20,20
//     tenRun([10, 1, 20, 2]) → 10,10,20,20
//     tenRun([10, 1, 9, 20]) → 10,10,10,20

function tenRun(nums) {
  let tenMult = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 == 0) {
      tenMult = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] % 10 != 0) nums[j] = tenMult;
        else break;
      }
    }
  }
  return nums;
}


`,
    },
    {
      day: 283,
      date: "Oct 10, 2025",
      code: `// Array-2 --

// pre4

// Given a non-empty array of ints, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

// Examples

//     pre4([1, 2, 4, 1]) → 1,2
//     pre4([3, 1, 4]) → 3,1
//     pre4([1, 4, 4]) → 1

function pre4(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 4) newArr.push(nums[i]);
    else break;
  }
  return newArr;
}


`,
    },
    {
      day: 284,
      date: "Oct 11, 2025",
      code: `// Array-2 --

// post4

// Given a non-empty array of ints, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

// Examples

//     post4([2, 4, 1, 2]) → 1,2
//     post4([4, 1, 4, 2]) → 2
//     post4([4, 4, 1, 2, 3]) → 1,2,3

function post4(nums) {
  return nums.slice(nums.lastIndexOf(4) + 1);
}


`,
    },
    {
      day: 285,
      date: "Oct 12, 2025",
      code: `// Array-2 --

// notAlone

// We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.

// Examples

//     notAlone([1, 2, 3], 2) → 1,3,3
//     notAlone([1, 2, 3, 2, 5, 2], 2) → 1,3,3,5,5,2
//     notAlone([3, 4], 3) → 3,4

function notAlone(nums, val) {
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === val && nums[i - 1] !== val && nums[i + 1] !== val) {
      nums[i] = Math.max(nums[i - 1], nums[i + 1]);
    }
  }
  return nums;
}


`,
    },
    {
      day: 286,
      date: "Oct 13, 2025",
      code: `// Array-2 --

// zeroFront

// Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

// Examples

//     zeroFront([1, 0, 0, 1]) → 0,0,1,1
//     zeroFront([0, 1, 1, 0, 1]) → 0,0,1,1,1
//     zeroFront([1, 0]) → 0,1

function zeroFront(nums) {
  let result = [];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      result[index] = 0;
      index++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      result[index] = nums[i];
      index++;
    }
  }

  return result;
}


`,
    },
    {
      day: 287,
      date: "Oct 14, 2025",
      code: `// Array-3 --

// maxSpan

// Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)

// Examples

//     maxSpan([1, 2, 1, 1, 3]) → 4
//     maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
//     maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function maxSpan(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= i; j--) {
      if (nums[i] == nums[j]) {
        let span = j - i + 1;
        if (span > max) {
          max = span;
        }
        break;
      }
    }
  }

  return max;
}


`,
    },
    {
      day: 288,
      date: "Oct 15, 2025",
      code: `// Array-3 --

// fix34

// Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.

// Examples

//     fix34([1, 3, 1, 4]) → 1,3,4,1
//     fix34([1, 3, 1, 4, 4, 3, 1]) → 1,3,4,1,1,3,4
//     fix34([3, 2, 2, 4]) → 3,4,2,2

function fix34(nums) {
  let fourIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 3) {
      while (nums[fourIndex] != 4) {
        fourIndex++;
      }

      let temp = nums[i + 1];
      nums[i + 1] = 4;
      nums[fourIndex] = temp;

      fourIndex++;
    }
  }

  return nums;
}


`,
    },
    {
      day: 289,
      date: "Oct 16, 2025",
      code: `// Array-3 --

// fix34

// Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.

// Examples

//     fix34([1, 3, 1, 4]) → 1,3,4,1
//     fix34([1, 3, 1, 4, 4, 3, 1]) → 1,3,4,1,1,3,4
//     fix34([3, 2, 2, 4]) → 3,4,2,2

// (ctrl-enter)

function fix34(nums) {
  let fourIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 3) {
      while (nums[fourIndex] != 4) {
        fourIndex++;
      }

      let temp = nums[i + 1];
      nums[i + 1] = 4;
      nums[fourIndex] = temp;

      fourIndex++;
    }
  }

  return nums;
}


`,
    },
    {
      day: 290,
      date: "Oct 17, 2025",
      code: `// Array-3 --

// fix45

// (This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that is not a 4. In this version, 5's may appear anywhere in the original array.

// Examples

//     fix45([5, 4, 9, 4, 9, 5]) → 9,4,5,4,5,9
//     fix45([1, 4, 1, 5]) → 1,4,5,1
//     fix45([1, 4, 1, 5, 5, 4, 1]) → 1,4,5,1,1,4,5

function fix45(nums) {
  let fiveIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 4) {
      if (nums[i + 1] != 5) {
        while (
          nums[fiveIndex] != 5 ||
          (fiveIndex > 0 && nums[fiveIndex - 1] == 4)
        ) {
          fiveIndex++;
        }

        let temp = nums[i + 1];
        nums[i + 1] = 5;
        nums[fiveIndex] = temp;
      }
    }
  }

  return nums;
}


`,
    },
    {
      day: 291,
      date: "Oct 18, 2025",
      code: `// Array-3 --

// canBalance

// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

// Examples

//     canBalance([1, 1, 1, 2, 1]) → true
//     canBalance([2, 1, 1, 2, 1]) → false
//     canBalance([10, 10]) → true

function canBalance(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let leftSum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    if (leftSum * 2 == total) {
      return true;
    }
  }

  return false;
}


`,
    },
    {
      day: 292,
      date: "Oct 19, 2025",
      code: `// Array-3 --

// linearIn

// Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order.

// Examples

//     linearIn([1, 2, 4, 6], [2, 4]) → true
//     linearIn([1, 2, 4, 6], [2, 3, 4]) → false
//     linearIn([1, 2, 4, 4, 6], [2, 4]) → true

function linearIn(outer, inner) {
  let i = 0;
  let j = 0;

  while (i < outer.length && j < inner.length) {
    if (outer[i] < inner[j]) {
      i++;
    } else if (outer[i] == inner[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  return j == inner.length;
}


`,
    },
    {
      day: 293,
      date: "Oct 20, 2025",
      code: `// Array-3 --

// squareUp

// Given n>=0, create an array length n*n with the following pattern, shown here for n=3 : {0, 0, 1, 0, 2, 1, 3, 2, 1} (spaces added to show the 3 groups).

// Examples

//     squareUp(3) → 0,0,1,0,2,1,3,2,1
//     squareUp(2) → 0,1,2,1
//     squareUp(4) → 0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1

function squareUp(n) {
  let result = new Array(n * n).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result[i * n - j - 1] = j + 1;
    }
  }

  return result;
}


`,
    },
    {
      day: 294,
      date: "Oct 21, 2025",
      code: `// Array-3 --

// seriesUp

// Given n>=0, create an array with the pattern {1, 1, 2, 1, 2, 3, ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.

// Examples

//     seriesUp(3) → 1,1,2,1,2,3
//     seriesUp(4) → 1,1,2,1,2,3,1,2,3,4
//     seriesUp(2) → 1,1,2

function seriesUp(n) {
  let length = (n * (n + 1)) / 2;
  let result = new Array(length);
  let index = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result[index] = j;
      index++;
    }
  }

  return result;
}

`,
    },
    {
      day: 295,
      date: "Oct 22, 2025",
      code: `// Array-3 --

// maxMirror

// We'll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section found in the given array.

// Examples

//     maxMirror([1, 2, 3, 8, 9, 3, 2, 1]) → 3
//     maxMirror([1, 2, 1, 4]) → 3
//     maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2

function maxMirror(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      let length = 0;
      while (
        i + length < nums.length &&
        j - length >= 0 &&
        nums[i + length] == nums[j - length]
      ) {
        length++;
      }
      if (length > max) {
        max = length;
      }
    }
  }

  return max;
}


`,
    },
    {
      day: 296,
      date: "Oct 23, 2025",
      code: `// Array-3 --

// countClumps

// Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.

// Examples

//     countClumps([1, 2, 2, 3, 4, 4]) → 2
//     countClumps([1, 1, 2, 1, 1]) → 2
//     countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(nums) {
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    let val = nums[i];
    let length = 0;
    while (i < nums.length && nums[i] == val) {
      length++;
      i++;
    }
    if (length >= 2) {
      count++;
    }
  }

  return count;
}


`,
    },
    {
      day: 297,
      date: "Oct 24, 2025",
      code: `// Recursion-1 --

// factorial

// Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

// Examples

//     factorial(1) → 1
//     factorial(2) → 2
//     factorial(3) → 6

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}


`,
    },
    {
      day: 298,
      date: "Oct 25, 2025",
      code: `// Recursion-1 --

// bunnyEars

// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

// Examples

//     bunnyEars(0) → 0
//     bunnyEars(1) → 2
//     bunnyEars(2) → 4

function bunnyEars(bunnies) {
  if (bunnies == 0) return 0;
  return 2 + bunnyEars(bunnies - 1);
}


`,
    },
    {
      day: 299,
      date: "Oct 26, 2025",
      code: `// Recursion-1 --

// fibonacci

// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.

// Examples

//     fibonacci(0) → 0
//     fibonacci(1) → 1
//     fibonacci(2) → 1

function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


`,
    },
    {
      day: 300,
      date: "Oct 27, 2025",
      code: `// Recursion-1 --

// bunnyEars2

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

// Examples

//     bunnyEars2(0) → 0
//     bunnyEars2(1) → 2
//     bunnyEars2(2) → 5

function bunnyEars2(bunnies) {
  if (bunnies == 0) return 0;
  if (bunnies % 2 == 1) return 2 + bunnyEars2(bunnies - 1);
  return 3 + bunnyEars2(bunnies - 1);
}


`,
    },
    {
      day: 301,
      date: "Oct 28, 2025",
      code: `// Recursion-1 --

// triangle

// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

// Examples

//     triangle(0) → 0
//     triangle(1) → 1
//     triangle(2) → 3

function triangle(rows) {
  if (rows == 0) return 0;
  return rows + triangle(rows - 1);
}


`,
    },
    {
      day: 302,
      date: "Oct 29, 2025",
      code: `// Recursion-1 --

// sumDigits1

// Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

// Examples

//     sumDigits1(126) → 9
//     sumDigits1(49) → 13
//     sumDigits1(12) → 3

function sumDigits1(n) {
  if (n == 0) return 0;
  return (n % 10) + sumDigits1(Math.floor(n / 10));
}


`,
    },
    {
      day: 303,
      date: "Oct 30, 2025",
      code: `// Recursion-1 --

// count7

// Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

// Examples

//     count7(717) → 2
//     count7(7) → 1
//     count7(123) → 0

function count7(n) {
  if (n == 0) return 0;
  if (n % 10 == 7) return 1 + count7(Math.floor(n / 10));
  return count7(Math.floor(n / 10));
}


`,
    },
    {
      day: 304,
      date: "Oct 31, 2025",
      code: `// Recursion-1 --

// count8

// Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

// Examples

//     count8(8) → 1
//     count8(818) → 2
//     count8(8818) → 4

function count8(n) {
  if (n == 0) return 0;

  let last = n % 10;
  let secondLast = Math.floor((n % 100) / 10);

  if (last == 8) {
    if (secondLast == 8) return 2 + count8(Math.floor(n / 10));
    return 1 + count8(Math.floor(n / 10));
  }

  return count8(Math.floor(n / 10));
}


`,
    },
    {
      day: 305,
      date: "Nov 1, 2025",
      code: `// AP-1 --

// scoresIncreasing

// Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.

// Examples

//     scoresIncreasing([1, 3, 4]) → true
//     scoresIncreasing([1, 3, 2]) → false
//     scoresIncreasing([1, 1, 4]) → true

function scoresIncreasing(scores) {
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < scores[i - 1]) return false;
  }
  return true;
}


`,
    },
    {
      day: 306,
      date: "Nov 2, 2025",
      code: `// AP-1 --

// scores100

// Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.

// Examples

//     scores100([1, 100, 100]) → true
//     scores100([1, 100, 99, 100]) → false
//     scores100([100, 1, 100, 100]) → true

function scores100(scores) {
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] == 100 && scores[i - 1] == 100) return true;
  }
  return false;
}

`,
    },
    {
      day: 307,
      date: "Nov 3, 2025",
      code: `// AP-1 --

// scoresClump

// Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.

// Examples

//     scoresClump([3, 4, 5]) → true
//     scoresClump([3, 4, 6]) → false
//     scoresClump([1, 3, 5, 5]) → true

function scoresClump(scores) {
  for (let i = 0; i < scores.length - 2; i++) {
    let min = Math.min(scores[i], scores[i + 1], scores[i + 2]);
    let max = Math.max(scores[i], scores[i + 1], scores[i + 2]);
    if (max - min <= 2) return true;
  }
  return false;
}


`,
    },
    {
      day: 308,
      date: "Nov 4, 2025",
      code: `// AP-1 --

// scoresAverage

// Given an array of scores, compute the int average of the first half and the second half, and return whichever is larger. We'll say that the second half begins at index length/2. The array length will be at least 2. To practice decomposition, write a separate helper method int average(int[] scores, int start, int end) { which computes the average of the elements between indexes start..end. Call your helper method twice to implement scoresAverage(). Write your helper method after your scoresAverage() method in the JavaBat text area. Normally you would compute averages with doubles, but here we use ints so the expected results are exact.

// Examples

//     scoresAverage([2, 2, 4, 4]) → 4
//     scoresAverage([4, 4, 4, 2, 2, 2]) → 4
//     scoresAverage([3, 4, 5, 1, 2, 3]) → 4

function scoresAverage(scores) {
  function average(arr, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += arr[i];
    }
    return Math.floor(sum / (end - start + 1));
  }

  let mid = Math.floor(scores.length / 2);
  let firstHalf = average(scores, 0, mid - 1);
  let secondHalf = average(scores, mid, scores.length - 1);

  return Math.max(firstHalf, secondHalf);
}


`,
    },
    {
      day: 309,
      date: "Nov 5, 2025",
      code: `// AP-1 --

// wordsCount

// Given an array of strings, return the count of the number of strings with the given length.

// Examples

//     wordsCount(['a', 'bb', 'b', 'ccc'], 1) → 2
//     wordsCount(['a', 'bb', 'b', 'ccc'], 3) → 1
//     wordsCount(['a', 'bb', 'b', 'ccc'], 4) → 0

function wordsCount(words, len) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length == len) count++;
  }
  return count;
}


`,
    },
    {
      day: 310,
      date: "Nov 6, 2025",
      code: `// AP-1 --

// wordsFront

// Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.

// Examples

//     wordsFront(['a', 'b', 'c', 'd'], 1) → a
//     wordsFront(['a', 'b', 'c', 'd'], 2) → a,b
//     wordsFront(['a', 'b', 'c', 'd'], 3) → a,b,c

function wordsFront(words, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(words[i]);
  }
  return result;
}


`,
    },
    {
      day: 311,
      date: "Nov 7, 2025",
      code: `// AP-1 --

// wordsWithoutList

// Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. See wordsWithout() below which is more difficult because it uses arrays.

// Examples

//     wordsWithoutList(['a', 'bb', 'b', 'ccc'], 1) → bb,ccc
//     wordsWithoutList(['a', 'bb', 'b', 'ccc'], 3) → a,bb,b
//     wordsWithoutList(['a', 'bb', 'b', 'ccc'], 4) → a,bb,b,ccc

function wordsWithoutList(words, len) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length != len) result.push(words[i]);
  }
  return result;
}


`,
    },
    {
      day: 312,
      date: "Nov 8, 2025",
      code: `// AP-1 --

// hasOne

// Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit.

// Examples

//     hasOne(10) → true
//     hasOne(22) → false
//     hasOne(220) → false

function hasOne(n) {
  while (n > 0) {
    if (n % 10 == 1) return true;
    n = Math.floor(n / 10);
  }
  return false;
}


`,
    },
    {
      day: 313,
      date: "Nov 9, 2025",
      code: `// AP-1 --

// dividesSelf

// We'll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We'll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit.

// Examples

//     dividesSelf(128) → true
//     dividesSelf(12) → true
//     dividesSelf(120) → false

function dividesSelf(n) {
  let temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    if (digit == 0 || n % digit != 0) return false;
    temp = Math.floor(temp / 10);
  }
  return true;
}


`,
    },
    {
      day: 314,
      date: "Nov 10, 2025",
      code: `// AP-1 --

// copyEvens

// Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers.

// Examples

//     copyEvens([3, 2, 4, 5, 8], 2) → 2,4
//     copyEvens([3, 2, 4, 5, 8], 3) → 2,4,8
//     copyEvens([6, 1, 2, 4, 5, 8], 3) → 6,2,4

// (ctrl-enter)

function copyEvens(nums, count) {
  let result = [];
  for (let i = 0; i < nums.length && result.length < count; i++) {
    if (nums[i] % 2 == 0) result.push(nums[i]);
  }
  return result;
}


`,
    },
    {
      day: 315,
      date: "Nov 11, 2025",
      code: `// AP-1 --

// copyEndy

// We'll say that a positive int n is "endy" if it is in the range 0..10 or 90..100 (inclusive). Given an array of positive ints, return a new array of length "count" containing the first endy numbers from the original array. Decompose out a separate isEndy(int n) method to test if a number is endy. The original array will contain at least "count" endy numbers.

// Examples

//     copyEndy([9, 11, 90, 22, 6], 2) → 9,90
//     copyEndy([9, 11, 90, 22, 6], 3) → 9,90,6
//     copyEndy([12, 1, 1, 13, 0, 20], 2) → 1,1

function copyEndy(nums, count) {
  function isEndy(n) {
    return (n >= 0 && n <= 10) || (n >= 90 && n <= 100);
  }

  let result = [];
  for (let i = 0; i < nums.length && result.length < count; i++) {
    if (isEndy(nums[i])) result.push(nums[i]);
  }

  return result;
}


`,
    },
    {
      day: 316,
      date: "Nov 12, 2025",
      code: `// AP-1 --

// scoreUp

// The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. the "answers" array contains a student's answers, with "?" representing a question left blank. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer.

// Examples

//     scoreUp(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'c']) → 6
//     scoreUp(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'c']) → 11
//     scoreUp(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'b']) → 16

function scoreUp(key, answers) {
  let score = 0;
  for (let i = 0; i < key.length; i++) {
    if (answers[i] == "?") continue;
    if (answers[i] == key[i]) score += 4;
    else score -= 1;
  }
  return score;
}


`,
    },
    {
      day: 317,
      date: "Nov 13, 2025",
      code: `// AP-1 --

// wordsWithout

// Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.

// Examples

//     wordsWithout(['a', 'b', 'c', 'a'], 'a') → b,c
//     wordsWithout(['a', 'b', 'c', 'a'], 'b') → a,c,a
//     wordsWithout(['a', 'b', 'c', 'a'], 'c') → a,b,a

function wordsWithout(words, target) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] != target) count++;
  }

  let result = new Array(count);
  let index = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] != target) {
      result[index] = words[i];
      index++;
    }
  }

  return result;
}


`,
    },
    {
      day: 318,
      date: "Nov 14, 2025",
      code: `// AP-1 --

// scoresSpecial

// Given two arrays, A and B, of non-negative int scores. A "special" score is one which is a multiple of 10, such as 40 or 90. Return the sum of largest special score in A and the largest special score in B. To practice decomposition, write a separate helper method which finds the largest special score in an array. Write your helper method after your scoresSpecial() method in the JavaBat text area.

// Examples

//     scoresSpecial([12, 10, 4], [2, 20, 30]) → 40
//     scoresSpecial([20, 10, 4], [2, 20, 10]) → 40
//     scoresSpecial([12, 11, 4], [2, 20, 31]) → 20

function scoresSpecial(a, b) {
  function largestSpecial(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 10 == 0 && arr[i] > max) max = arr[i];
    }
    return max;
  }

  return largestSpecial(a) + largestSpecial(b);
}


`,
    },
    {
      day: 319,
      date: "Nov 15, 2025",
      code: `// AP-1 --

// sumHeights

// We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1 + 5 = 6. The start end end index will both be valid indexes into the array with start <= end.

// Examples

//     sumHeights([5, 3, 6, 7, 2], 2, 4) → 6
//     sumHeights([5, 3, 6, 7, 2], 0, 1) → 2
//     sumHeights([5, 3, 6, 7, 2], 0, 4) → 11

function sumHeights(heights, start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += Math.abs(heights[i + 1] - heights[i]);
  }
  return sum;
}

`,
    },
    {
      day: 320,
      date: "Nov 16, 2025",
      code: `// AP-1 --

// sumHeights2

// (A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index, however increases in height count double. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1*2 + 5 = 7. The start end end index will both be valid indexes into the array with start <= end.

// Examples

//     sumHeights2([5, 3, 6, 7, 2], 2, 4) → 7
//     sumHeights2([5, 3, 6, 7, 2], 0, 1) → 2
//     sumHeights2([5, 3, 6, 7, 2], 0, 4) → 15

function sumHeights2(heights, start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    let diff = heights[i + 1] - heights[i];
    if (diff > 0) sum += diff * 2;
    else sum += -diff;
  }
  return sum;
}


`,
    },
    {
      day: 321,
      date: "Nov 17, 2025",
      code: `// AP-1 --

// bigHeights

// (A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the number of "big" steps for a walk starting at the start index and ending at the end index. We'll say that step is big if it is 5 or more up or down. The start end end index will both be valid indexes into the array with start <= end.

// Examples

//     bigHeights([5, 3, 6, 7, 2], 2, 4) → 1
//     bigHeights([5, 3, 6, 7, 2], 0, 1) → 0
//     bigHeights([5, 3, 6, 7, 2], 0, 4) → 1

function bigHeights(heights, start, end) {
  let count = 0;
  for (let i = start; i < end; i++) {
    if (Math.abs(heights[i + 1] - heights[i]) >= 5) count++;
  }
  return count;
}


`,
    },
    {
      day: 322,
      date: "Nov 18, 2025",
      code: `// AP-1 --

// userCompare

// We have data for two users, A and B, each with a String name and an int id. The goal is to order the users such as for sorting. Return -1 if A comes before B, 1 if A comes after B, and 0 if they are the same. Order first by the string names, and then by the id numbers if the names are the same. Note: with Strings str1.compareTo(str2) returns an int value which is negative/0/positive to indicate how str1 is ordered to str2 (the value is not limited to -1/0/1). (On the AP, there would be two User objects, but here the code simply takes the two strings and two ints directly. The code logic is the same.)

// Examples

//     userCompare('bb', 1, 'zz', 2) → -1
//     userCompare('bb', 1, 'aa', 2) → 1
//     userCompare('bb', 1, 'bb', 1) → 0

function userCompare(aName, aId, bName, bId) {
  if (aName < bName) return -1;
  if (aName > bName) return 1;

  if (aId < bId) return -1;
  if (aId > bId) return 1;
  return 0;
}


`,
    },
    {
      day: 323,
      date: "Nov 19, 2025",
      code: `// AP-1 --

// mergeTwo

// Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates. Return a new array containing the first N elements from the two arrays. The result array should be in alphabetical order and without duplicates. A and B will both have a length which is N or more. The best "linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical order, copying elements directly to the new array.

// Examples

//     mergeTwo(['a', 'c', 'z'], ['b', 'f', 'z'], 3) → a,b,c
//     mergeTwo(['a', 'c', 'z'], ['c', 'f', 'z'], 3) → a,c,f
//     mergeTwo(['f', 'g', 'z'], ['c', 'f', 'g'], 3) → c,f,g

function mergeTwo(a, b, n) {
  let result = [];
  let i = 0,
    j = 0;

  while (result.length < n) {
    if (i < a.length && (j >= b.length || a[i] < b[j])) {
      if (!result.includes(a[i])) result.push(a[i]);
      i++;
    } else if (j < b.length && (i >= a.length || a[i] > b[j])) {
      if (!result.includes(b[j])) result.push(b[j]);
      j++;
    } else {
      if (!result.includes(a[i])) result.push(a[i]);
      i++;
      j++;
    }
  }

  return result;
}


`,
    },
    {
      day: 324,
      date: "Nov 20, 2025",
      code: `// AP-1 --

// commonTwo

// Start with two arrays of strings, a and b, each in alphabetical order, possibly with duplicates. Return the count of the number of strings which appear in both arrays. The best "linear" solution makes a single pass over both arrays, taking advantage of the fact that they are in alphabetical order.

// Examples

//     commonTwo(['a', 'c', 'x'], ['b', 'c', 'd', 'x']) → 2
//     commonTwo(['a', 'c', 'x'], ['a', 'b', 'c', 'x', 'z']) → 3
//     commonTwo(['a', 'b', 'c'], ['a', 'b', 'c']) → 3

function commonTwo(a, b) {
  let i = 0,
    j = 0;
  let count = 0;
  let prev = null;

  while (i < a.length && j < b.length) {
    if (a[i] === prev) {
      i++;
      continue;
    }
    if (a[i] < b[j]) i++;
    else if (a[i] > b[j]) j++;
    else {
      count++;
      prev = a[i];
      i++;
      j++;
    }
  }

  return count;
}


`,
    },
    {
      day: 325,
      date: "Nov 21, 2025",
      code: `// String-3 --

// notReplace

// Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)

// Examples

//     notReplace('is test') → is not test
//     notReplace('is-is') → is not-is not
//     notReplace('This is right') → This is not right

function notReplace(str) {
  let result = "";
  let i = 0;

  while (i < str.length) {
    if (
      i + 1 < str.length &&
      str.substring(i, i + 2) == "is" &&
      (i == 0 || !isLetter(str[i - 1])) &&
      (i + 2 == str.length || !isLetter(str[i + 2]))
    ) {
      result += "is not";
      i += 2;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

// helper function like Character.isLetter
function isLetter(c) {
  return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
}


`,
    },
    {
      day: 326,
      date: "Nov 22, 2025",
      code: `// Map-1 --

// mapBully

// Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapBully({'a': 'candy', 'b': 'dirt'}) → {'a': '', 'b': 'candy'}
//     mapBully({'a': 'candy'}) → {'a': '', 'b': 'candy'}
//     mapBully({'a': 'candy', 'b': 'carrot', 'c': 'meh'}) → {'a': '', 'b': 'candy', 'c': 'meh'}

function mapBullyMap(map) {
  if (map.has("a")) {
    map.set("b", map.get("a"));
    map.set("a", "");
  }
  return map;
}


`,
    },
    {
      day: 327,
      date: "Nov 23, 2025",
      code: `// Map-1 --

// mapShare

// Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapShare({'a': 'aaa', 'b': 'bbb', 'c': 'ccc'}) → {'a': 'aaa', 'b': 'aaa'}
//     mapShare({'b': 'xyz', 'c': 'ccc'}) → {'b': 'xyz'}
//     mapShare({'a': 'aaa', 'c': 'meh', 'd': 'hi'}) → {'a': 'aaa', 'd': 'hi', 'b': 'aaa'}

function mapShare(someMap) {
  someMap.delete("c");
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  return someMap;
}


`,
    },
    {
      day: 328,
      date: "Nov 24, 2025",
      code: `// Map-1 --

// mapAB

// Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB({'a': 'Hi', 'b': 'There'}) → {'a': 'Hi', 'b': 'There', 'ab': 'HiThere'}
//     mapAB({'a': 'Hi'}) → {'a': 'Hi'}
//     mapAB({'b': 'There'}) → {'b': 'There'}

function mapAB(someMap) {
  if (someMap.has("a") && someMap.has("b"))
    someMap.set("ab", someMap.get("a") + someMap.get("b"));

  return someMap;
}


`,
    },
    {
      day: 329,
      date: "Nov 25, 2025",
      code: `// Map-1 --

// topping1

// Given a map of food keys and topping values, modify and return the map as follows: if the key "ice cream" is present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     topping1({'ice cream': 'peanuts'}) → {'ice cream': 'cherry', 'bread': 'butter'}
//     topping1({}) → {'bread': 'butter'}
//     topping1({'pancake': 'syrup'}) → {'pancake': 'syrup', 'bread': 'butter'}

function topping1(someMap) {
  someMap.set("bread", "butter");
  if (someMap.has("ice cream")) someMap.set("ice cream", "cherry");
  return someMap;
}


`,
    },
    {
      day: 330,
      date: "Nov 26, 2025",
      code: `// Map-1 --

// topping2

// Given a map of food keys and their topping values, modify and return the map as follows: if the key "ice cream" has a value, set that as the value for the key "yogurt" also. If the key "spinach" has a value, change that value to "nuts".

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     topping2({'ice cream': 'cherry'}) → {'ice cream': 'cherry', 'yogurt': 'cherry'}
//     topping2({'spinach': 'dirt', 'ice cream': 'cherry'}) → {'spinach': 'nuts', 'ice cream': 'cherry', 'yogurt': 'cherry'}
//     topping2({'yogurt': 'salt'}) → {'yogurt': 'salt'}

function topping2(someMap) {
  if (someMap.has("ice cream")) someMap.set("yogurt", someMap.get("ice cream"));

  if (someMap.has("spinach")) someMap.set("spinach", "nuts");

  return someMap;
}


`,
    },
    {
      day: 331,
      date: "Nov 27, 2025",
      code: `// Map-1 --

// topping3

// Given a map of food keys and topping values, modify and return the map as follows: if the key "potato" has a value, set that as the value for the key "fries". If the key "salad" has a value, set that as the value for the key "spinach".

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     topping3({'potato': 'ketchup'}) → {'potato': 'ketchup', 'fries': 'ketchup'}
//     topping3({'potato': 'butter'}) → {'potato': 'butter', 'fries': 'butter'}
//     topping3({'salad': 'oil', 'potato': 'ketchup'}) → {'salad': 'oil', 'potato': 'ketchup', 'fries': 'ketchup', 'spinach': 'oil'}

function topping3(someMap) {
  if (someMap.has("potato")) someMap.set("fries", someMap.get("potato"));
  if (someMap.has("salad")) someMap.set("spinach", someMap.get("salad"));
  return someMap;
}


`,
    },
    {
      day: 332,
      date: "Nov 28, 2025",
      code: `// Map-1 --

// mapAB2

// Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB2({'a': 'aaa', 'b': 'aaa', 'c': 'cake'}) → {'c': 'cake'}
//     mapAB2({'a': 'aaa', 'b': 'bbb'}) → {'a': 'aaa', 'b': 'bbb'}
//     mapAB2({'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}) → {'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}

function mapAB2(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a") == someMap.get("b")) {
      someMap.delete("a");
      someMap.delete("b");
    }
  }
  return someMap;
}


`,
    },
    {
      day: 333,
      date: "Nov 29, 2025",
      code: `// Map-1 --

// mapAB3

// Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB3({'a': 'aaa', 'c': 'cake'}) → {'a': 'aaa', 'c': 'cake', 'b': 'aaa'}
//     mapAB3({'b': 'bbb', 'c': 'cake'}) → {'b': 'bbb', 'c': 'cake', 'a': 'bbb'}
//     mapAB3({'a': 'aaa', 'b': 'bbb', 'c': 'cake'}) → {'a': 'aaa', 'b': 'bbb', 'c': 'cake'}

function mapAB3(someMap) {
  if (someMap.has("a") && someMap.has("b") == false) {
    someMap.set("b", someMap.get("a"));
  } else if (someMap.has("b") && someMap.has("a") == false) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}


`,
    },
    {
      day: 334,
      date: "Nov 30, 2025",
      code: `// Map-1 --

// mapAB4

// Modify and return the given map as follows: if the keys "a" and "b" have values that have different lengths, then set "c" to have the longer value. If the values exist and have the same length, change them both to the empty string in the map.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB4({'a': 'aaa', 'b': 'bb', 'c': 'cake'}) → {'a': 'aaa', 'b': 'bb', 'c': 'aaa'}
//     mapAB4({'a': 'aa', 'b': 'bbb', 'c': 'cake'}) → {'a': 'aa', 'b': 'bbb', 'c': 'bbb'}
//     mapAB4({'a': 'aa', 'b': 'bbb'}) → {'a': 'aa', 'b': 'bbb', 'c': 'bbb'}

function mapAB4(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a").length > someMap.get("b").length)
      someMap.set("c", someMap.get("a"));
    else if (someMap.get("a").length < someMap.get("b").length)
      someMap.set("c", someMap.get("b"));
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }

  return someMap;
}


`,
    },
    {
      day: 335,
      date: "Dec 1, 2025",
      code: `//  Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}


`,
    },
    {
      day: 336,
      date: "Dec 2, 2025",
      code: `// 9. Palindrome Number

// Given an integer x, return true if x is a

// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false;

  const str = x.toString();

  const reversed = str.split("").reverse().join("");

  return str === reversed;
}


`,
    },
    {
      day: 337,
      date: "Dec 3, 2025",
      code: `//Integer to Roman

// Seven different symbols represent Roman numerals with the following values:
// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

//     If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
//     If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
//     Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.

// Given an integer, convert it to a Roman numeral.

// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII

// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";

  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  for (let i = 0; i < symbols.length; i++) {
    let symbol = symbols[i][0];
    let value = symbols[i][1];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};


`,
    },
    {
      day: 338,
      date: "Dec 4, 2025",
      code: `// Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map();
  let result = 0;

  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) result -= map.get(s[i]);
    else result += map.get(s[i]);
  }
  return result;
};


`,
    },
    {
      day: 339,
      date: "Dec 5, 2025",
      code: `// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// premium lock iconCompanies

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}


`,
    },
    {
      day: 340,
      date: "Dec 6, 2025",
      code: `// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // Push opening brackets onto the stack
      stack.push(char);
    } else {
      // For closing brackets, check if the top matches
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets matched
  return stack.length === 0;
}


`,
    },
    {
      day: 341,
      date: "Dec 7, 2025",
      code: `//Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0; // slow pointer

  for (let j = 1; j < nums.length; j++) {
    // fast pointer
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]; // move the next unique element forward
    }
  }

  return i + 1; // number of unique elements
}


`,
    },
    {
      day: 342,
      date: "Dec 8, 2025",
      code: `// Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let i = 0; // slow pointer

  for (let j = 0; j < nums.length; j++) {
    // fast pointer
    if (nums[j] !== val) {
      nums[i] = nums[j]; // move non-val element forward
      i++;
    }
  }

  return i; // number of elements not equal to val
}


`,
    },
    {
      day: 343,
      date: "Dec 9, 2025",
      code: `//Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === "") return 0; // edge case: empty needle

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i; // found the first occurrence
    }
  }

  return -1; // not found
}


`,
    },
    {
      day: 344,
      date: "Dec 10, 2025",
      code: `// Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid; // target found
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  // target not found; left is the insert position
  return left;
}


`,
    },
    {
      day: 345,
      date: "Dec 11, 2025",
      code: `//58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal

// consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};


`,
    },
    {
      day: 346,
      date: "Dec 12, 2025",
      code: `// Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  // Start from the last digit
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1; // simple increment, done
      return digits;
    }
    digits[i] = 0; // digit was 9, becomes 0 and carry over
  }

  // If all digits were 9, add a leading 1
  digits.unshift(1);
  return digits;
}


`,
    },
    {
      day: 347,
      date: "Dec 13, 2025",
      code: `// Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = j >= 0 ? Number(b[j]) : 0;

    const sum = bitA + bitB + carry;
    result = (sum % 2) + result; // current bit
    carry = Math.floor(sum / 2); // carry for next bit

    i--;
    j--;
  }

  return result;
}


`,
    },
    {
      day: 348,
      date: "Dec 14, 2025",
      code: `// 69. Sqrt(x)
// Solved
// Easy
// Topics
// premium lock iconCompanies
// Hint

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

//     For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x < 2) return x; // handle 0 and 1 directly

  let left = 1;
  let right = x;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      ans = mid; // store the last mid that squared is <= x
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}


`,
    },
    {
      day: 349,
      date: "Dec 15, 2025",
      code: `// 70. Climbing Stairs
// Solved
// Easy
// Topics
// premium lock iconCompanies
// Hint

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 2) return n;

  let oneStepBefore = 2; // ways to reach step 2
  let twoStepsBefore = 1; // ways to reach step 1
  let allWays = 0;

  for (let i = 3; i <= n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  return allWays;
}


`,
    },
    {
      day: 350,
      date: "Dec 16, 2025",
      code: `// 2667. Create Hello World Function

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".

// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  const greeting = "Hello World";
  return function () {
    return greeting;
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


`,
    },
    {
      day: 351,
      date: "Dec 17, 2025",
      code: `// 2620. Counter

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Example 2:

// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n;
  return function counter() {
    return count++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


`,
    },
    {
      day: 352,
      date: "Dec 18, 2025",
      code: `// 2704. To Be Or Not To Be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//     toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//     notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(valToBe) {
      if (val === valToBe) return true;
      else throw new Error("Not Equal");
    },
    notToBe(valNotToBe) {
      if (valNotToBe !== val) return true;
      else throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


`,
    },
    {
      day: 353,
      date: "Dec 19, 2025",
      code: `// 2665. Counter II

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

//     increment() increases the current value by 1 and then returns it.
//     decrement() reduces the current value by 1 and then returns it.
//     reset() sets the current value to init and then returns it.

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let counter = init;
  return {
    increment() {
      return ++counter;
    },
    decrement() {
      return --counter;
    },
    reset() {
      counter = init;
      return counter;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


`,
    },
    {
      day: 354,
      date: "Dec 20, 2025",
      code: `// 2635. Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.map((e, i) => fn(e, i));
};


`,
    },
    {
      day: 355,
      date: "Dec 21, 2025",
      code: `// 2634. Filter Elements from Array

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

//     arr[i] - number from the arr
//     i - index of arr[i]

// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0

// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filteredArr.push(arr[i]);
  }
  return filteredArr;
};


`,
    },
    {
      day: 356,
      date: "Dec 22, 2025",
      code: `// 2626. Array Reduce Transformation

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// Example 1:

// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.

// Example 2:

// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.

// Example 3:

// Input:
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let acc = init;
  if (nums.length == 0) return init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
};


`,
    },
    {
      day: 357,
      date: "Dec 23, 2025",
      code: `// 2629. Function Composition

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let result;
  return function (x) {
    let newArr = [];
    if (functions.length == 0) return x;
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


`,
    },
    {
      day: 358,
      date: "Dec 24, 2025",
      code: `// 2703. Return Length of Arguments Passed
// Solved
// Easy
// premium lock iconCompanies
// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.

// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */


`,
    },
    {
      day: 359,
      date: "Dec 25, 2025",
      code: `// 2666. Allow One Function Call

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

//     The first time the returned function is called, it should return the same result as fn.
//     Every subsequent time it is called, it should return undefined.

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


`,
    },
    {
      day: 360,
      date: "Dec 26, 2025",
      code: `// 2623. Memoize
// Solved
// Medium
// premium lock iconCompanies
// Hint

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

//     sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
//     fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
//     factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2

// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2

// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  function getKey(args) {
    return args.join(","); // creates a unique key for each argument combination
  }

  const memoized = function (...args) {
    const key = getKey(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    callCount++;
    return result;
  };

  memoized.getCallCount = () => callCount;

  return memoized;
}

// Example usage:

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // 4, counted
console.log(memoizedSum(2, 2)); // 4, not counted again
console.log(memoizedSum.getCallCount()); // 1
console.log(memoizedSum(1, 2)); // 3, counted
console.log(memoizedSum.getCallCount()); // 2

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */


`,
    },
    {
      day: 361,
      date: "Dec 27, 2025",
      code: `// 2723. Add Two Promises

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

// Example 2:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([num1, num2]) => num1 + num2);
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */


`,
    },
    {
      day: 362,
      date: "Dec 28, 2025",
      code: `// 2621. Sleep
// Solved
// Easy
// premium lock iconCompanies
// Hint

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

/**
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

// Example usage:
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // roughly 100
});

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


`,
    },
    {
      day: 363,
      date: "Dec 29, 2025",
      code: `// 2715. Timeout Cancellation

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)

// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

// Example 1:

// Input: fn = (x) => x * 5, args = [2], t = 20
// Output: [{"time": 20, "returned": 10}]
// Explanation:
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.

// Example 2:

// Input: fn = (x) => x**2, args = [2], t = 100
// Output: []
// Explanation:
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x**2, [2], 100);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

// Example 3:

// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
// Output: [{"time": 30, "returned": 8}]
// Explanation:
// const cancelTimeMs = 100;
// const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearTimeout(timer);
  };
}


`,
    },
    {
      day: 364,
      date: "Dec 30, 2025",
      code: `// 2725. Interval Cancellation

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)

// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

// Example 1:

// Input: fn = (x) => x * 2, args = [4], t = 35
// Output:
// [
//    {"time": 0, "returned": 8},
//    {"time": 35, "returned": 8},
//    {"time": 70, "returned": 8},
//    {"time": 105, "returned": 8},
//    {"time": 140, "returned": 8},
//    {"time": 175, "returned": 8}
// ]
// Explanation:
// const cancelTimeMs = 190;
// const cancelFn = cancellable((x) => x * 2, [4], 35);
// setTimeout(cancelFn, cancelTimeMs);

// Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
// 1st fn call is at 0ms. fn(4) returns 8.
// 2nd fn call is at 35ms. fn(4) returns 8.
// 3rd fn call is at 70ms. fn(4) returns 8.
// 4th fn call is at 105ms. fn(4) returns 8.
// 5th fn call is at 140ms. fn(4) returns 8.
// 6th fn call is at 175ms. fn(4) returns 8.
// Cancelled at 190ms

// Example 2:

// Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30
// Output:
// [
//    {"time": 0, "returned": 10},
//    {"time": 30, "returned": 10},
//    {"time": 60, "returned": 10},
//    {"time": 90, "returned": 10},
//    {"time": 120, "returned": 10},
//    {"time": 150, "returned": 10}
// ]
// Explanation:
// const cancelTimeMs = 165;
// const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30)
// setTimeout(cancelFn, cancelTimeMs)

// Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
// 1st fn call is at 0ms
// 2nd fn call is at 30ms
// 3rd fn call is at 60ms
// 4th fn call is at 90ms
// 5th fn call is at 120ms
// 6th fn call is at 150ms
// Cancelled at 165ms

// Example 3:

// Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
// Output:
// [
//    {"time": 0, "returned": 9},
//    {"time": 50, "returned": 9},
//    {"time": 100, "returned": 9},
//    {"time": 150, "returned": 9}
// ]
// Explanation:
// const cancelTimeMs = 180;
// const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
// setTimeout(cancelFn, cancelTimeMs)

// Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled.
// 1st fn call is at 0ms
// 2nd fn call is at 50ms
// 3rd fn call is at 100ms
// 4th fn call is at 150ms
// Cancelled at 180ms

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
  fn(...args); // call immediately

  const interval = setInterval(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearInterval(interval);
  };
}


`,
    },
    {
      day: 365,
      date: "Dec 31, 2025",
      code: `// 2637. Promise Time Limit

// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

//     If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
//     If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

// Example 1:

// Input:
// fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// try {
//    const res = await limited(...inputs)
//    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output

// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.

// Example 2:

// Input:
// fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// inputs = [5]
// t = 150
// Output: {"resolved":25,"time":100}
// Explanation:
// The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.

// Example 3:

// Input:
// fn = async (a, b) => {
//   await new Promise(res => setTimeout(res, 120));
//   return a + b;
// }
// inputs = [5,10]
// t = 150
// Output: {"resolved":15,"time":120}
// Explanation:
// ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

// Example 4:

// Input:
// fn = async () => {
//   throw "Error";
// }
// inputs = []
// t = 1000
// Output: {"rejected":"Error","time":0}
// Explanation:
// The function immediately throws an error.

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      let finished = false;

      // Timeout promise
      const timer = setTimeout(() => {
        if (!finished) reject("Time Limit Exceeded");
      }, t);

      // Call the original async function
      fn(...args)
        .then((res) => {
          finished = true;
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => {
          finished = true;
          clearTimeout(timer);
          reject(err);
        });
    });
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */


`,
    },
  ];
}

let challenges = loadChallenges();

// Save challenges to localStorage
function saveChallenges() {
  localStorage.setItem("codeChallenges", JSON.stringify(challenges));
}

// Display challenges
function displayChallenges() {
  const grid = document.getElementById("grid");
  grid.innerHTML = ""; // Clear existing cards

  // Sort challenges by day number
  const sortedChallenges = [...challenges].sort((a, b) => a.day - b.day);

  sortedChallenges.forEach((challenge, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <button class="remove-btn" onclick="removeChallenge(${
              challenge.day
            }); event.stopPropagation();">×</button>
            <div class="card-content" onclick="openModal(${JSON.stringify(
              challenge
            ).replace(/"/g, "&quot;")})">
                <div class="day-number">Day ${challenge.day}</div>
                <div class="card-date">${challenge.date}</div>
            </div>
        `;

    grid.appendChild(card);
  });
}

// Open modal
function openModal(challenge) {
  document.getElementById(
    "modalDay"
  ).textContent = `Day ${challenge.day} - ${challenge.date}`;
  document.getElementById("modalTitle").style.display = "none";
  document.getElementById("modalDescription").style.display = "none";
  document.getElementById("modalCode").textContent = challenge.code;
  document.getElementById("modal").classList.add("active");
}

// Close modal
function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

// Close on outside click
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
});

// Open Add Challenge modal
function openAddModal() {
  // Auto-fill the next day number
  const nextDay =
    challenges.length > 0 ? Math.max(...challenges.map((c) => c.day)) + 1 : 1;
  document.getElementById("dayInput").value = nextDay;

  // Auto-fill today's date
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dateInput").value = today;

  document.getElementById("addModal").classList.add("active");
}

// Close Add Challenge modal
function closeAddModal() {
  document.getElementById("addModal").classList.remove("active");
  document.getElementById("addForm").reset();
}

// Handle form submission
document.getElementById("addForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const day = parseInt(document.getElementById("dayInput").value);
  const dateValue = document.getElementById("dateInput").value;
  const code = document.getElementById("codeInput").value;

  // Format date
  const dateObj = new Date(dateValue);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Create new challenge
  const newChallenge = {
    day: day,
    date: formattedDate,
    code: code,
  };

  // Add to challenges array
  challenges.push(newChallenge);

  // Save to localStorage
  saveChallenges();

  // Refresh display
  displayChallenges();

  // Close modal
  closeAddModal();
});

// Close add modal on outside click
document.getElementById("addModal").addEventListener("click", (e) => {
  if (e.target.id === "addModal") {
    closeAddModal();
  }
});

// Clear all challenges
function confirmClear() {
  if (
    confirm(
      "Are you sure you want to clear all challenges and start fresh? This cannot be undone."
    )
  ) {
    challenges = [];
    saveChallenges();
    displayChallenges();
  }
}

// Remove individual challenge
function removeChallenge(day) {
  if (confirm(`Remove Day ${day} challenge?`)) {
    challenges = challenges.filter((c) => c.day !== day);
    saveChallenges();
    displayChallenges();
  }
}

// Initialize
displayChallenges();
