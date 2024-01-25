// Inheritance using Classes
// Note the lack of the keywork 'function'. There is not constructor function
class Person {
  talk() {
    return 'Talking';
  }
}
// Writing directly at the browser console the work 'Person' returns a textual representation of it's definition
// Asking typeof(Person) returns 'function'
// I tried the following and obtained Person.prototype with a method called 'function'
class Person {
  function () {
    return 'Talking'
  }
}
const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking

// To update the function for both instances you only have to do it once:
// The consequence of doing it in this way is that the property Person.prototype.talk.name -> '' and not 'talk' as before
Person.prototype.talk = function () {
  return 'New and improved Talking';
}; 
// Its better to do this:
Person.prototype.talk = function talk() {
  return 'New and improved Talking';
}
// But if we type Person in the console, the old definition is still printed
// But typing Person.prototype.talk give the new definition and is what is passed when using the 'new' keyword
// -----------------------------------------
// Inheritance using a Constructor Function
function Person() {};
// Examining this we find that the Person fuction has a prototype and it seems to be not the same that the class
Person.prototype.talk = function () {
  return 'Talking';
}

const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking


// -----------------------------------------
// Inheritance using pure objects with Object.create
const person = {
  talk() {
    return 'Talking';
  }
}
// Looking at the arguments and caller properties in the talk function we get
// arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
// caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]

// But changing the definition

const person = {
  talk: function () {
    return 'Talking'
  }
}

// We get arguments: null and caller: null
const me = Object.create(person);
me.talk(); // Talking


// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf
const person = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me = {};
Object.setPrototypeOf(me, person);
me.talk(); // Talking



// -----------------------------------------
// Extending a Class using 'extends'
class Person {
  talk() {
    return 'talking';
  }
}

class SuperHuman extends Person {
  fly() {
    return 'flying';
  }
}
const me = new Person();
console.log(me.talk); // talk exists
console.log(me.fly); // fly does NOT exists

const you = new SuperHuman();
console.log(you.fly); // fly exists
console.log(you.talk); // talk also exists!

