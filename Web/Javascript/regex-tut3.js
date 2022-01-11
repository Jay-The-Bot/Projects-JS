console.log("This is Jay Aher");
// Regular Expressions
const regex = /Jay/;
const str = /Jay Aher/;
//Character Set - We use []
let regex1 = /J[a-z]y/; // THis will mean that it will include anything
// Can be any char betn a to z
regex1 = /J[bcd]y/; // This will not match as any char from bcd is not present
// at the 1st index
regex1 = /J[^bcd]y/; // This will return true meaning of ^ in the bracket
// is not function
regex1 = /J[a-zA-Z0-9]y/; // THis will mean that it will include anything
// Can be any char betn a to z and A to Z and 0-9 for int

// Quantifiers We use parenthesis for groupings {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur either 0 or 2 times
regex = /(har){2}/; // This will only work ifthe word is harhar

// Gorupings - We use parenthesis for groupings ()
regex = /(har){2}([0-9]r){3}/; // THe word can be harhar1r2r3r
