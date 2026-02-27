
export function afficherRecettes(recettes){
  
const container = document.querySelector("#recipes");

container.innerHTML="";


recettes.forEach(recette => {

    const card= document.createElement("div");
    card.classList.add("card");

    card.innerHTML=`
    <h3>${recette.name}</h3>
     <img src="${recette.image}" alt="${recette.name}">
      <p>Calories : ${recette.caloriesPerServing}</p>
    `;
    
      container.appendChild(card);
});
}