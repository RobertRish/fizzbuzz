let answer = parseInt(prompt("How long should this list of numberzzz bee?"));

for (let i = 0; i <= answer; i++) {
    // "%" is called modulus operator which returns the remainder of a division problem.  
    // the statement below is saying, "if the remainder of i divided by 3 is 0..."
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}