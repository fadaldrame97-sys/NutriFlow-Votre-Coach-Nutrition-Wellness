 import { ApiRecuperation } from "./Api/recipeProvider.js";
 import { afficherRecettes } from "./ui/render.js";






 async function intialiser() {
   const data =await ApiRecuperation(); 
    afficherRecettes(data.recipes);
 }
intialiser();