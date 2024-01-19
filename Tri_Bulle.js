let tableau = [10,45,89,2,18,32];

function TriBull(tab){
    for(let i = 0; i < tab.length - 1; i++){
        for(let j = 0; j < tab.length - i - 1; j++ ){
            if(tab[j] > tab[j+1]){
                let permut = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = permut;
            }
        }
    }
    return tab;
}

console.log("le tableau avant le trie", tableau);

console.log("le tableau apres le trie : ", TriBull(tableau));