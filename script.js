let answer = parseInt(prompt("How long should this list of numberzzz bee?"));

for (let i = 0; i <= answer; i++) {
    console.log(i);
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}