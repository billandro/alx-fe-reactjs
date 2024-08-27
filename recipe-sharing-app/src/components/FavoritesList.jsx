import { useRecipeStore } from './recipeStore';
import React from 'react';

const FavoritesList = () => {
    const favorites = useRecipeStore((state) => state.favorites);
    const recipes = useRecipeStore((state) => state.recipes);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    // Find the recipes that are marked as favorites
    const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

    const handleRemoveFavorite = (recipeId) => {
        removeFavorite(recipeId);
    };

    return (
        <div>
        <h2>Favorites</h2>
        {favoriteRecipes.length === 0 ? (
            <p>No favorite recipes</p>
        ) : (
            <ul>
            {favoriteRecipes.map(recipe => (
                <li key={recipe.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{recipe.title}</h3>
                <button 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}
                    onClick={() => handleRemoveFavorite(recipe.id)}
                >
                    Remove
                </button>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default FavoritesList;