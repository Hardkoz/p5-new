
let produitLocalStorage = JSON.parse(localStorage.getItem("optionProduit"));
  

//affichache des produits dans le panier
//on sélectionne l'id pour le html

const partieHtmlPanier = document.querySelector("#achat-panier");


//si le panier est vide
if(produitLocalStorage === null){
    
    const panierVide = `
    
    <div> Votre panier est vide</div>
   
    `;

    partieHtmlPanier.innerHTML = panierVide;
    }else{
        console.log("je suis pas vide")
    }