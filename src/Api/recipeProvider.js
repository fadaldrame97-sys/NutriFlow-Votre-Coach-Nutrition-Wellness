export async function ApiRecuperation() {

try{
  const response= await fetch('https://dummyjson.com/recipes');
  const data= await response.json();  
   console.log(data);
   return data;
}
catch(error)
{
    alert("plat introuvable");

}
    
}