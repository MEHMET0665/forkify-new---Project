


export const renderRecipe = recipe => {
  const recipeArr=recipe.data.recipes
console.log(recipeArr)
document.querySelector('.results_list').innerHTML="";
recipeArr.forEach(element=>{
  const html=`
  <li>
  <a id="${element.id}"class="results__link results__link--active" href="#23456">
      <figure class="results__fig">
          <img src=${element.image_url} alt="Test">
      </figure>
      <div class="results__data">
          <h4 class="results__name">${element.title}</h4>
          <p class="results__author">${element.publisher}</p>
      </div>
  </a>
</li>
 
    `
    document.querySelector('.results').insertAdjacentHTML("afterbegin", html);
    
})


}



