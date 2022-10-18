let answer = parseInt(prompt("How long should this list of numberzzz bee?"));

for (let i = 1; i <= answer; i++) {
    // "%" is called modulus operator which returns the remainder of a division problem.  
    // the statement below is saying, "if the remainder of i divided by 3 is 0..."
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i);
    }
};