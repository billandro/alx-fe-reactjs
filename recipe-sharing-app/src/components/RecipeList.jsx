import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, recipes, filterRecipes]);

    return (
        <div>
            <h2>Recipes</h2>
            <SearchBar />
            <ul>
                {filteredRecipes.length === 0 ? 
                    (<p>No recipes available</p>) : 
                    (filteredRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        </li>
                    )))
                }
            </ul>
            <Link to="/add">Add a New Recipe</Link>
        </div>
    );
};

export default RecipeList;