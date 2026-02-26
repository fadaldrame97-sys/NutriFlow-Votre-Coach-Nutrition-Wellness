export async function ApiRecuperation() {

try{
  const respnose= await fetch('https://dummyjson.com/recipes');
  const date= respnose.json();  
   console.log(data);
}
catch(Erreur){
    alert("plat introuvable");

}
    
}