const Params = new URLSearchParams(window.location.search)
const produitId = Params.get("given_id")


const htmlProduit = document.getElementById("produit")





let response = fetch(`http://localhost:3000/api/cameras/${produitId}`)

    .then(function (res) {
        if (res.ok) {
           

            return res.json();
        }
    })

    .then(function (object) {
       


        //Partie HTML dans la js produit
        htmlProduit.innerHTML +=
            `
    
    <div class="container-fiche-produit">
      <h1>${object.name}</h1>
      <div class="camera1">
      <img src=${object.imageUrl} id="picture1" alt="" class="cards1" />
       
         </div>
      <p>${object.description}</p>
      <h2>Détail technique</h2>
      
     
    <p>
      <FORM>
      <SELECT name="Lentille" >
      <OPTION>35mm 1.4
      <OPTION>50mm 1.6
      </SELECT>
      </FORM>
</p>

<p>
<FORM>
<SELECT name="Quantité" >
<OPTION>1
<OPTION>2
<OPTION>3
<OPTION>4
<OPTION>5
<OPTION>6
<OPTION>7
<OPTION>8
<OPTION>9
<OPTION>10
</SELECT>
</FORM>
</p>


   

         <p>Prix: ${object.price / 100}€</p>
      <a  id="btnAjoutPanier" href="panier.html" >Ajouter au panier</a>

   </div>
    `
    const bouttonAjouter = document.getElementById("btnAjoutPanier");
   
    const ajoutPanier = () =>{
        console.log("ajoutPanier", object);
    }

    //tableau pour récuperer les donnés du client  
      var panierInfo = [
        produitId,
        object.name,
        object.price,
      ]

      // quand le client va cliquer sur le boutton ajouter au panier 
    bouttonAjouter.addEventListener('click', ajoutPanier)
    btnAjoutPanier.onclick = () =>{
        var value = JSON.stringify(panierInfo);
        window.localStorage.setItem(value, panierInfo);
        console.log(value);
    }
    
    //test boucle

const  option = [`${object.lenses}`];

for ( let optn of option) {
  
  console.log(optn);
}

const number = [1,2,3,4,5,6,7,8,9,10];
for (let quantité of number) {
  quantité += 0;
  console.log(quantité)
}


  
    

    
    })
