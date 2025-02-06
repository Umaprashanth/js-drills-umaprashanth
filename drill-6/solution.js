function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let a = 10;

  return {
    increment: function() {
        return ++a;
    },
    decrement: function() {
        return --a;
    }
  }
}
// const count = counterFactory()3
// console.log(count.increment()) //11
// console.log(count.decrement()) //10


function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

    let count = 0;

    return () => {
      if (count < n) {
        count++;
        return cb()
      } else {

        return null; 
      }
    }
  }
  

const v = limitFunctionCallCount(fnCalls, 2);

function fnCalls(){
    return 'hello'
  }
// console.log(v()); //hello
// console.log(v()); //hello

// console.log(v()); //null
// console.log(v()); //null



function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in// Create a unique key based on arguments closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
   

    const c = {};

  return function(args) {
    const key = JSON.stringify(args); 

    if (c[key]) {
      console.log("Fetching from cache...");
      return c[key]; 
    } else {
      console.log("Calculating and caching...");
      const result = cb(args); 
      c[key] = result; 
      return result;
    }
  };

  }

  const fnTest =  (num) => {
    return num*2
  }

  const p = cacheFunction(fnTest);

  console.log(p(67));
  console.log(p(67));