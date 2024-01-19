
function proprieties(personne){
    return Object.values(personne);
}

let personne1 = {
    nom : "Aymane",
    age : 21,
    profession : "Medcin"
}

console.log(proprieties(personne1));