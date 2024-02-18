// main.js

document.getElementById("searchBtn").addEventListener("click", searchRecipes);

async function searchRecipes() {
    const ingredientInput = document.getElementById("ingredientInput").value;
    const ingredients = ingredientInput.split(",").map(ingredient => ingredient.trim());
    
    if (ingredients.length === 0) {
        alert("Please enter at least one ingredient.");
        return;
    }

    try {
        const recipes = await fetchRecipes(ingredients);
        displayRecipes(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        alert("An error occurred while fetching recipes. Please try again later.");
    }
}

async function fetchRecipes(ingredients) {
    const apiKey = "cf0ff04ec334464b811c917abca2a1dc";
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(",")}&number=5&apiKey=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch recipes.");
    }

    return await response.json();
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        const title = document.createElement("h2");
        title.textContent = recipe.title;

        const image = document.createElement("img");
        image.src = recipe.image;
        image.alt = recipe.title;

        const ingredientsList = document.createElement("ul");
        recipe.missedIngredients.forEach(ingredient => {
            const listItem = document.createElement("li");
            listItem.textContent = ingredient.original;
            ingredientsList.appendChild(listItem);
        });

        recipeCard.appendChild(title);
        recipeCard.appendChild(image);
        recipeCard.appendChild(ingredientsList);

        recipeList.appendChild(recipeCard);
    });
}
