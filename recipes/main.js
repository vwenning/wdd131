import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    
    // Display all recipes
    displayRecipes(recipes);
    
    // Set up search functionality
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) || 
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm)
        );
        
        displayRecipes(filteredRecipes);
    });
    
    function displayRecipes(recipesToShow) {
        recipeList.innerHTML = '';
        
        recipesToShow.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            
            // Create star rating
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= recipe.rating) {
                    starsHtml += '<span aria-hidden="true" class="icon-star">★</span>';
                } else {
                    starsHtml += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
                }
            }
            
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-content">
                    <span class="category">${recipe.category}</span>
                    <h2 class="recipe-title">${recipe.name}</h2>
                    <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${starsHtml}
                    </div>
                    <p class="recipe-description">${recipe.description}</p>
                </div>
            `;
            
            recipeList.appendChild(recipeCard);
        });
    }
});