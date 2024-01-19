let Livre = {
    titre : "Livre 1",
    auteur : "mohammed",
    anneePub : "2010"
}

console.log(Object.entries(Livre));

function convertirEnTab(objet){
    let monTableau = Object.entries(objet);
    return monTableau;
}

console.log(convertirEnTab(Livre));