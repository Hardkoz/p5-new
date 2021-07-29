//On déclare la constance htmlCatalogue qui correspond a la déclaration de l'id catalogue qu'o retrouve dans le html
const htmlCatalogue = document.getElementById('catalogue');

// On déclare la promesse fetch pour introduire le lien de l'api
fetch(`http://localhost:3000/api/cameras`)
//puis on déclare une fonction pour vérifier si l'api marche
    .then(function(response){
        if(response.ok){
            console.log( response.ok)
            return response.json();
        }    
    })
    
    .then(function(res){
        console.log( res.length)

        for(let produit of res){
            console.log( produit)

	   

	    //Partie HTML
		htmlCatalogue.innerHTML += 
        `
            <div class="container">
              <div class="camera">
               <a href="fiche-produit.html?given_id=${produit._id}">
                <img src=${produit.imageUrl} alt="${produit.name}">
                <div class="text-info">
                    <h4 class="text-info">${produit.name}</h4>
                    <p class="text-info">${produit.price/100} €</p>
                </div>
                </div>
                </a>
        </div>
        `
        }
    })
    .catch(function() {
        window.location.href = 'error';
    })