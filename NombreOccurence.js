function NombreOccu(Chaine, lettre) {
    let n = 0;
    for (let i = 0; i < Chaine.length; i++) {
        if (Chaine[i].toLowerCase() === lettre.toLowerCase()) {
            n++;
        }
    }
    console.log("Le nombre d'occurrence de la lettre ", lettre ,"est : ", n);
}

let lettre = "r";
let Chaine = "Rire a rock rich";
NombreOccu(Chaine, lettre);