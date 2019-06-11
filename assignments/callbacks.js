// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Re-usable variable function for logging simple outputs
const log = (label, output) => console.log(label, output);

function getLength(arr, cb) {
  return cb("Length:", arr.length);
}

getLength(items, log);

function last(arr, cb) {
  return cb("Last Item:", arr[arr.length - 1]);
}

last(items, log);

function sumNums(x, y, cb) {
  return cb(`Sum of ${x} and ${y}:`, x + y);
}

sumNums(3, 4, log);

function multiplyNums(x, y, cb) {
  return cb(`Product of ${x} and ${y}:`, x * y);
}

multiplyNums(3, 4, log);

function contains(item, list, cb) {
  return cb(`Contains ${item}:`,list.includes(item));
}

contains("yo-yo", items, log);
contains("pencil", items, log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb("Without Duplicates:", array.filter((element, index, arr) => arr.indexOf(element) === index));
}

const superheroes = ["batman", "batman", "superman", "robin", "batman", "robin", "flash", "aquaman", "wonderwoman"];
log("With Duplicates:", superheroes);
removeDuplicates(superheroes, log);
