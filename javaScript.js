/*`( const navSlide = () => {} )` is a JavaScript function definition that uses the `const` keyword to declare a constant variable named `navSlide`. The function definition is an arrow function that takes no arguments and returns an empty object `{}`. 

The `const` keyword is used to declare a variable that cannot be reassigned after its initial assignment. The `() => {}` syntax is used to define an arrow function, which is a shorthand way of defining a function in JavaScript ². The empty object `{}` is the value that the function returns.
*/
const navSlide = () => {
  const burger = document.querySelector('.burger');/* This document.querySelector help us to go to the document html which this javascript have been call to and the querySelector find the tag or element your looking for*/
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  });
}

navSlide();