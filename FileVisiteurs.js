
class FileAttente {
    constructor(){
        this.visiteurs = [];
    }

    addVisitorInEnd(visiteur){
        this.visiteurs.push(visiteur);
    }

    visitorEnterToParc(){
        if(this.visiteurs.length === 0){
            return 'il ne y a aucun visiteur dans ta liste';
        }
        return this.visiteurs.shift();
    }
}

let FileAttente1 = new FileAttente();
FileAttente1.addVisitorInEnd("Mohammed");
FileAttente1.addVisitorInEnd("Abdo");
FileAttente1.addVisitorInEnd("Zineb");
FileAttente1.addVisitorInEnd("Sara");
FileAttente1.addVisitorInEnd("Anir");
console.log(FileAttente1.visitorEnterToParc());