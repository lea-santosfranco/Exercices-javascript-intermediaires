// function allumerFeu(){
//   var feuActuel = document.querySelector(".allume");

//   const rouge = document.getElementById("red");
//   const orange = document.getElementById("orange");
//   const vert = document.getElementById("green");

//   feuActuel.classList.remove ("allume");

//   if(feuActuel.id === "red"){
//     orange.classList.add ("allume")
//   }
//   else if (feuActuel.id === "orange"){
//     vert.classList.add ("allume")
//   }

//   else {
//     rouge.classList.add ("allume")
//   }
// }
// setInterval (allumerFeu, 1000);

   // addEventListener(click) window 
   // display none block   
   // classList add remove  

   // const modal = document.getElementById("myModal");
   // const buttonOpen = document.getElementById("buttonOpen");
   // const closeButton = document.querySelector(".closeButton");


   //Exercice 4 //
   class calculerSomme{
    constructor(listeNombre){
        this.nombres = listeNombre
        this.somme = 0
    }
    calculer(){
        let total = 0;
        for (let i = 0; i < this.nombres.length; i++){
            total = total + this.nombres[i]
        }
        this.somme = total;
        return this.somme;
    }
    afficherResultat(){
        console.log("Resultat :" + this.somme);
    }
   }

//Exercice 5//

class Arme{
    constructor(nom,dégats, type){
        this.nom = nom;
        this.dégats = dégats;
        this.type = type;
    }
    afficherInfos(){
        console.log("Nom de l'arme :" + this.nom);
        console.log("Dégats de l'arme :" + this.dégats);
        console.log("Type de l'arme : " + this.type);
    }
}
class Sort{
    constructor(nom, puissance, coutMana, element){
        this.nom = nom;
        this.puissance = puissance;
        this.coutMana = coutMana;
        this.element = element;
    }
    afficherInfos(){
        console.log("Nom du sort :" + this.nom);
        console.log("Puissance du sort :" + this.puissance);
        console.log("Coût en mana du sort : " + this.coutMana);
        console.log("Element du sort : " + this.element);
    }
}

