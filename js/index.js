import {renderRecipe} from './searchView.js'

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const apiKey="ca62d93c-c60c-4188-88f0-b618b3a87f3e";
const url='https://forkify-api.herokuapp.com/api/v2/recipes'
//https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>

// Add AJAX functions here:
const getRecipe = async () => {
    try {
        const recipeInput=input.value;
        const urlToFetch=`${url}?search=${recipeInput}&key=${apiKey}`
        
         const response= await fetch(urlToFetch);
        if(response.ok) {
          const jsonResponse = await response.json();
         renderRecipe(jsonResponse)
          //console.log(jsonResponse)
          }
        else{
            throw new Error('Request failed!'); } 
        }
        catch (error) {
            console.log(error)
      }
    }
    getRecipe()

const getOneRecipe = async (id) => {

    const recipeInput=input.value;
    const urlToFetch=`${url}/${id}?key=${apiKey}`
    
    try{
          
         const response= await fetch(urlToFetch);
        if(response.ok) {
          const jsonResponse = await response.json();
           showRecipe(jsonResponse)
          }
        
        throw new Error('Request failed!'); } 
        catch (error) {
        console.log(error)
      }
   
    
    }
    document.querySelector('.results_list').addEventListener('click',(event)=>console.log(event.target.closest("a").id))

    submitBtn.addEventListener('click', getRecipe)

