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
//    class calculerSomme{
//     constructor(valeurInitiale){
//         this.total = valeurInitiale;
//     }
//     calculer(nombre){
//         this.total += nombre;
//     }
//     afficherResultat(){
//         console.log("Resultat :" + this.total);
//     }
//    }

//    const calculatrice = new calculerSomme (10);
//    calculatrice.calculer(5);
//    calculatrice.afficherResultat();
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
//     }
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
// afficherInfos();{
//         console.log("Nom de l'arme :" + this.nom);
//         console.log("Dégats de l'arme :" + this.dégats);
//         console.log("Type de l'arme : " + this.type);
//     }
//Exercice 6//

class personnage{
    constructor(nom, pointsdeVie, CA, competence){
        this.nom = nom;
        this.pointsDeVie = pointsdeVie;
        this.CA = CA;
        this.competence = competence;
    }
}

class guerrier{
    constructor(nom, pointsDeVie, force, competence){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.force = force;
        this.competence = competence;

        this.afficherInfos();
        console.log("Nom du guerrier :" + this.nom);
        console.log("Points de vie du guerrier :" + this.pointsDeVie);
        console.log("Force du guerrier : " + this.force);
        console.log("Compétence du guerrier : " + this.competence);
    }
}
var monGuerrier = new guerrier ("Laezel", 120, 15, "Coup puissant");
console.log(monGuerrier);

class mage{
    constructor(nom, pointsDeVie, CA, competence){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.CA = CA;
        this.competence = competence;
    }
    afficherInfos(){
        console.log("Nom du mage :" + this.nom);
        console.log("Points de vie du mage :" + this.pointsDeVie);
        console.log("Classe d'armure du mage : " + this.CA);
        console.log("Compétence du mage : " + this.competence);
    }
}
var monMage = new mage ("Gayle", 80, 10, "Fireball");
monMage.afficherInfos();

class archer{
    constructor(nom, pointsDeVie, CA, competence){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.CA = CA;
        this.competence = competence;
    }
    afficherInfos(){
        console.log("Nom de l'archer :" + this.nom);
        console.log("Points de vie de l'archer :" + this.pointsDeVie);
        console.log("Classe d'armure de l'archer : " + this.CA);
        console.log("Compétence de l'archer : " + this.competence);
    }
}
var monArcher = new archer ("Archer", 100, 12, "Gachette");
monArcher.afficherInfos();

class paladin{
    constructor(nom, pointsDeVie, CA , competence){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.CA = CA;
        this.competence = competence;
    }
    afficherInfos(){
        console.log("Nom du paladin :" + this.nom);
        console.log("Points de vie du paladin :" + this.pointsDeVie);
        console.log("Classe d'armure du paladin : " + this.CA);
        console.log("Compétence du paladin : " + this.competence);
    }
}

var monPaladin = new paladin("Hector", 150, 14, "smite");
monPaladin.afficherInfos();