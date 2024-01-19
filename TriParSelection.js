function triParSelection(tab) {
    console.log("Le tableau au début est : ", tab);

    for (let i = 0; i < tab.length; i++) {
        let min = i;
        for (let j = i + 1; j < tab.length; j++) {
            if (tab[j] < tab[min]) {
                min = j;
            }
        }
        let permut = tab[i];
        tab[i] = tab[min];
        tab[min] = permut;
        console.log(tab);
    }
    console.log("Le tableau fini est : ", tab);
}

let tableau = [10, 45, 89, 2, 18, 32];
triParSelection(tableau);