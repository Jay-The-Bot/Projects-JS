let reg1 = /Jay/; // This is a regular expression literal
// reg1 = /Jay/g; // g stands for a global flag
// reg1 = /Jay/i; // i stands for a case insesetive flag takes both capital and small as same
// console.log(reg1);
// console.log(reg1.source); // Gives the text in the regular expression literal

let s = "This is great code with Jay and also Jay is";
// Functions to match expressions
// 1. exec() - This function will either return an array for match
// or null for no match
let result = reg1.exec(s); // we can use multiple exec with global flag
// console.log(result);
// console.log(result.index);
// 2. test() - Returns true or false if
result = reg1.test(s);
// console.log(result);
// 3. match() - It will return array of result or null
// let result3 = reg1.match(s); --> This is the wrong way
let result3 = s.match(reg1); // This is the right way
// console.log(result3);
// console.log(result3.length);
// 4. search() - Returns index of first match else -1
// let result4 = reg1.search(a); --> THis is  wrong way
let result4 = s.search(reg1);
// console.log(result4);
// 5.replace() - Returns a new replaced with all the replacements
let result5 = s.replace(reg1, "Shubham"); // THe first argument will be regex
// and next one will the word which needs to be replaced.
// If g flag is not present it will only replace the 1st one
console.log(result5);
