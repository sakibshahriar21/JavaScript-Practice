/* Currying is a technique of evaluating function with multiple arguments,
into sequence of functions with single argument.In other words, when a function,
instead of taking all arguments at one time, takes the first one and return a new
function that takes the second one and returns a new function which takes the third
one, and so forth, until all arguments have been fulfilled.

Uses of currying function
  a) It helps to avoid passing same variable again and again.

  b) It is extremely useful in event handling. */

/*function volumeCalculator(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}  

console.log(volumeCalculator(4));*/

function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1)(2) ); // 3