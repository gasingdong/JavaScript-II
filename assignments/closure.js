// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const greeting = () => {
  const firstName = "Bob";
  return () => {
    const lastName = "Smith";
    console.log(`${firstName} ${lastName}`);
  }
}
const newGreeting = greeting();
newGreeting();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return () => {
    counter++;
    console.log("Counter:", counter);
    return counter;
  }
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function() {
      counter++;
      console.log("Counter Factory:", counter);
    },
    decrement: function() {
      counter--;
      console.log("Counter Factory:", counter);
    },
  }
};

const newFactory = counterFactory();
newFactory.increment(); // 1
newFactory.increment(); // 2
newFactory.decrement(); // 1
newFactory.decrement(); // 0

//STRETCH: IIFE + Closure
const name = ((firstName) => (lastName) =>  `${firstName} ${lastName}`)("Barry");
console.log(name("Allen"));
console.log(name("White"));