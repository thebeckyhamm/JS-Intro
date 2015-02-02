// Consider the following code fragment

var a = "3";
var b = 2;
var c = b + a;


// Q: What is the value of c?
// A: "23"

// Write to the best if your understanding
// why c is the value that it is.
// A: because one of the variables is a string, it coerces the other variable into being a string to concatenate it.



var str = "Version " + 5 + 1;


// Q: What is the value of str?
// A: "Version 51" (I got this wrong at first, I thought it evaluated the numbers first)

// Write to the best if your understanding
// why str is the value that it is. How could
// it be altered to result in 6 instead of 51?
// A: since it sees a string and a + means concatenate, it coerces the other values to be strings as well. I think "Version " + (5 + 1) may work (just checked, it does) because it evaluates things in parentheses first


