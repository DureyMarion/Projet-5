// Adresse API de base
const API_URL = "http://localhost:3000/api";

// L'événement DOMContentLoaded de déclenche une fois le document HTML initial entièrement chargé et analysé
// AddEventListener() associe un gestionnaire d'événements à un élément
window.addEventListener("DOMContentLoaded", (event) => {

  // Récupération des données par requête
  fetch(API_URL + "/products")
    .then((resp) => resp.json())
    .then(function (products) {
      products.forEach(product => {
        createItem(product)
      });
    });

});

// Création des éléments
function createItem(item) {

  // Création et insertion de l'élément "a"
  const sectionItems = document.querySelector("#items");
  const articleLink = document.createElement("a");
  articleLink.href = "product.html?id=" + item._id;
  sectionItems.appendChild(articleLink);
  articleLink.innerHTML = "";

  // Création et insertion de l'élément "article"
  let productArticle = document.createElement("article");
  articleLink.appendChild(productArticle);

  // Création et insertion de l'élément "img"
  let productImg = document.createElement("img");
  productArticle.appendChild(productImg);
  productImg.src = item.imageUrl;
  productImg.alt = item.altTxt;

  // Création et insertion de l'élément "h3"
  let productName = document.createElement("h3");
  productArticle.appendChild(productName);
  productName.classList.add("productName");
  productName.innerHTML = item.name;

  // Création et insertion de l'élément "p"
  let productDescription = document.createElement("p");
  productArticle.appendChild(productDescription);
  productDescription.classList.add("productDescription");
  productDescription.innerHTML = item.description;
};



