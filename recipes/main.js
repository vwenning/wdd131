import { recipes } from './recipes.mjs';

// Random number generator function
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random list entry
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Function to generate tags HTML
function tagsTemplate(category) {
    return `<span class="category">${category}</span>`;
}

// Function to generate star rating HTML
function ratingTemplate(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<span aria-hidden="true" class="icon-star">★</span>';
        } else {
            starsHtml += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    
    return `<div class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
        ${starsHtml}
    </div>`;
}

// Function to generate recipe card HTML
function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                ${tagsTemplate(recipe.category)}
                <h2 class="recipe-title">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </div>
    `;
}

// Function to render recipes to the page
function renderRecipes(recipeList) {
    const recipeListElement = document.getElementById('recipe-list');
    
    // Use the recipeTemplate function to transform our recipe objects into HTML strings
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    
    // Set the HTML strings as the innerHTML of our output element
    recipeListElement.innerHTML = recipeHTML;
}

// Function to filter recipes based on search query
function filterRecipes(query) {
    // If query is "all" or empty, return all recipes sorted alphabetically
    if (query === "all" || query === "") {
        return [...recipes].sort((a, b) => a.name.localeCompare(b.name));
    }
    
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query) ||
        recipe.category.toLowerCase().includes(query)
    );
    
    // Sort alphabetically by name
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    return sorted;
}

// Search handler function
function searchHandler(e) {
    e.preventDefault();
    
    // Get search input value and convert to lowercase
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filter recipes based on search term
    const filteredRecipes = filterRecipes(searchTerm);
    
    // Render filtered recipes
    renderRecipes(filteredRecipes);
}

// Function to show all recipes
function showAllRecipes() {
    const allRecipes = filterRecipes("all");
    renderRecipes(allRecipes);
}

// Initialization function to run when page loads
function init() {
    // Show a random recipe on initial load
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
    
    // Set up search functionality
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', searchHandler);
    
    // Add event listener for input field to detect empty searches
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            showAllRecipes();
        }
    });
    
    // Also add a "Show All" button feature to the search input
    searchInput.addEventListener('keyup', function(e) {
        if (this.value.toLowerCase() === 'all') {
            showAllRecipes();
        }
    });
}

// Call init when DOM content is loaded
document.addEventListener('DOMContentLoaded', init);