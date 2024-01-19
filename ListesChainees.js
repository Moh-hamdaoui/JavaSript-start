function creeNoeud(donnee){
    return {
        donnee : donnee,
        suivant : null
    }
}

function ajouterALaListeChainnee(tete, donnee){

    nouveauNoeud = creeNoeud(donnee);
    dernierElement = tete;

    while(dernierElement.suivant !== null){
        dernierElement = dernierElement.suivant;
    }
    dernierElement.suivant = nouveauNoeud;

}

// tester notre fonction et creer un liste chainee

let tete = creeNoeud("l'element 1");
ajouterALaListeChainnee(tete, "l'element 2");
ajouterALaListeChainnee(tete, "l'element 3");
ajouterALaListeChainnee(tete, "l'element 4");
ajouterALaListeChainnee(tete, "l'element 4");

let elementActuel = tete;

while (elementActuel !== null){
    console.log(elementActuel)
    elementActuel = elementActuel.suivant;
}




