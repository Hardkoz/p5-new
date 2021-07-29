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
      <p>Prix: ${object.price / 100}€</p>
      <select id="camera-lense" name="Lentille">
      </select>
      <button  id="btnAjoutPanier">Ajouter au panier</button>

   </div>
    `

    const dropdown = document.getElementById('camera-lense');
    let options = ""
    object.lenses.forEach((lense) => {
      options += `<option value="${lense}">${lense}</option>`
    })

    dropdown.innerHTML = options
    
    const bouttonAjouter = document.getElementById("btnAjoutPanier");

    const ajoutPanier = () => {
      let cart = []
      const storageCart = localStorage.getItem('cart')
      if (storageCart !== null) {
        cart = JSON.parse(storageCart);
      }

      cart.push(produitId);

      // Sauvgarde du nouveau cadie dans le localStorage
      const cartSave = JSON.stringify(cart);
      localStorage.setItem('cart', cartSave);
    }

     

    // quand le client va cliquer sur le boutton ajouter au panier 
    bouttonAjouter.addEventListener('click', ajoutPanier)

  })
