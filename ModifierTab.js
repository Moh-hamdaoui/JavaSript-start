function ModifierTab(tableau){

    tableau.push("Element 1", "Element 2", "Element 3");
    tableau.pop();
    return console.log(tableau);
}

var tableau = ["cat", "Lion", "Aghyul"];
ModifierTab(tableau);