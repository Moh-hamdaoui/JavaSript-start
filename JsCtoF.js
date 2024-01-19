const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Donner le type de température que vous avez (celsius/fahrenheit): ", function(Type) {
    Type = Type.toLowerCase();

    switch (Type) {
        case "celsius":
            console.log("Conversion en Fahrenheit");
            rl.question("Donner la température: ", function(valueC) {
                valueC = parseFloat(valueC);

                if (!isNaN(valueC)) {
                    let valueF = (9/5 * valueC) + 32;
                    console.log(`${valueC} °C équivaut à ${valueF} °F`);
                } else {
                    console.log("Erreur de saisie, veuillez saisir un nombre.");
                }

                rl.close();
            });
            break;

        case "fahrenheit":
            console.log("Conversion en Celsius");
            rl.question("Donner la température: ", function(valueF) {
                valueF = parseFloat(valueF);

                if (!isNaN(valueF)) {
                    let valueC = (valueF - 32) * 5/9;
                    console.log(`${valueF} °F équivaut à ${valueC} °C`);
                } else {
                    console.log("Erreur de saisie, veuillez saisir un nombre.");
                }

                rl.close();
            });
            break;

        default:
            console.log("Erreur de saisie, veuillez choisir 'celsius' ou 'fahrenheit'.");
            rl.close();
    }
});
>>>>>>> 940d814076209a0eccda14ea12e44cc69ed75669
