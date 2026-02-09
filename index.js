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

   //Exercice 3//

// const modal = document.getElementById("myModal");
// const buttonOpen = document.getElementById("buttonOpen");
// const closeButton = document.querySelector(".closeButton");
// buttonOpen.addEventListener("click", function(){
//     modal.style.display = "block";
// });
// closeButton.addEventListener("click", function(){
//     modal.style.display = "none";
// });
// window.addEventListener("click", function(event){
//     if (event.target === modal){
//         modal.style.display = "none";
//     }
// });


//    //Exercice 4 //
   class calculerSomme{
    constructor(valeurInitiale){
        this.total = valeurInitiale;
    }
    calculer(nombre){
        this.total += nombre;
    }
    afficherResultat(){
        console.log("Resultat :" + this.total);
    }
   }

   const calculatrice = new calculerSomme (10);
   calculatrice.calculer(5);
   calculatrice.afficherResultat();
//Exercice 5//

// class Arme{
//     constructor(nom,dégats, type){
//         this.nom = nom;
//         this.dégats = dégats;
//         this.type = type;
//     }
//     afficherInfos(){
//         console.log("Nom de l'arme :" + this.nom);
//         console.log("Dégats de l'arme :" + this.dégats);
//         console.log("Type de l'arme : " + this.type);
//     }
// }
// class Sort{
//     constructor(nom, puissance, coutMana, element){
//         this.nom = nom;
//         this.puissance = puissance;
//         this.coutMana = coutMana;
//         this.element = element;
//     }
//     afficherInfos(){
//         console.log("Nom du sort :" + this.nom);
//         console.log("Puissance du sort :" + this.puissance);
//         console.log("Coût en mana du sort : " + this.coutMana);
//         console.log("Element du sort : " + this.element);
//     }
// }

//Exercice 6//

// class guerrier{
//     constructor(nom, pointsDeVie, force, titre){
//         this.nom = nom;
//         this.pointsDeVie = pointsDeVie;
//         this.force = force;
//         this.titre = titre;

//         this.afficherInfos();
//         console.log("Nom du guerrier :" + this.nom);
//         console.log("Points de vie du guerrier :" + this.pointsDeVie);
//         console.log("Force du guerrier : " + this.force);
//         console.log("Titre du guerrier : " + this.titre);
//     }
// }
// class mage{
//     constructor(nom, pointsDeVie, force, titre){
//         this.nom = nom;
//         this.pointsDeVie = pointsDeVie;
//         this.force = force;
//         this.titre = titre;
//     }
//     afficherInfos(){
//         console.log("Nom du mage :" + this.nom);
//         console.log("Points de vie du mage :" + this.pointsDeVie);
//         console.log("Force du mage : " + this.force);
//         console.log("Titre du mage : " + this.titre);
//     }
// }
// class archer{
//     constructor(nom, pointsDeVie, force, titre){
//         this.nom = nom;
//         this.pointsDeVie = pointsDeVie;
//         this.force = force;
//         this.titre = titre;
//     }
//     afficherInfos(){
//         console.log("Nom de l'archer :" + this.nom);
//         console.log("Points de vie de l'archer :" + this.pointsDeVie);
//         console.log("Force de l'archer : " + this.force);
//         console.log("Titre de l'archer : " + this.titre);
//     }
// }
// class paladin{
//     constructor(nom, pointsDeVie, force, titre){
//         this.nom = nom;
//         this.pointsDeVie = pointsDeVie;
//         this.force = force;
//         this.titre = titre;
//     }
//     afficherInfos(){
//         console.log("Nom du paladin :" + this.nom);
//         console.log("Points de vie du paladin :" + this.pointsDeVie);
//         console.log("Force du paladin : " + this.force);
//         console.log("Titre du paladin : " + this.titre);
//     }
// }
