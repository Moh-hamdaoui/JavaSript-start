const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Donner un nombre n = ", function (n) {
    n = parseInt(n);

    if (isNaN(n) || n < 0) {
        console.log("Veuillez saisir un nombre entier positif.");
        rl.close();
    } else {
        console.log(`Le terme ${n} de la suite Fibonacci est : ${fibonacci(n)}`);
        rl.close();
    }
});

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
