function ModifierTab2(tableau){
    tableau.shift();
    tableau.unshift("nouvel element");
    let tableau2 = [tableau[0], tableau[1]];
    return console.log(tableau2);
}

tableauTrasport = ["voiture", "moto", "cheval", "avion"];
ModifierTab2(tableauTrasport);