 import { ApiRecuperation } from "./Api/recipeProvider.js";
 import { afficherRecettes } from "./ui/render.js";

let ToutesLesRecettes=[];

const loader = document.getElementById("loader");



 async function intialiser() {

     loader.classList.remove("hidden");
   const data =await ApiRecuperation(); 
    ToutesLesRecettes=data.recipes;
    afficherRecettes(ToutesLesRecettes);
 }
const input=document.getElementById("searchInput");
input.addEventListener("input",()=>{
    const valeur=input.value.toLowerCase();

    const filtrer=ToutesLesRecettes.filter(recette=>
recette.name.toLowerCase().includes(valeur)
    );
    afficherRecettes(filtrer);
})



intialiser();