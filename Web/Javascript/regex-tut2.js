console.log("Jay Aher");
let regex = /Jay/g;
regex = /^Ja/; // Carat will mean expression will "string start with"
regex = /ay$/; // Dollar will mean expression will "string ends with"
regex = /J.y/; // Dot means matches any one character starts form front
regex = /J*y/; // Dot means matches 0 or more character starts form front
// With * {Jaay, Jay, Jy, Jaaaaaaaaay} will give true
regex = /Ja?y/; // Here questions means the char before question mark is
// Optional will result in true even if it is present or absent
regex = /J\*y/; // Addong a blackslash will make any character next to it
// a string such as "*" not * function
let str = "Jay is Jay";
let result = regex.exec(str);
// console.log(result);
console.log(`The result from exec is ${result.index}`);
if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}
// Lets look into some meta character symbol
