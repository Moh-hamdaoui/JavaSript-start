class pile {
    constructor(){
        this.taches = [];
    }

    push(tache){
        this.taches.push(tache);
    }

    pop(){
        return this.taches.pop();
    }

}

let Dimanche = new pile();
Dimanche.push('Faire du sport');
Dimanche.push('Manger');
Dimanche.push('Exercice de JS');
Dimanche.push('regarder un match de foot');
console.log(Dimanche.pop());
