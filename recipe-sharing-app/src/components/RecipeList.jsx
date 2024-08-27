import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import SearchBar from './SearchBar';
import FavoritesList from './FavoritesList';
import StarOutline from '../assets/star-outline.svg';
import RecommendationsList from './RecommendationsList';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);
    const addFavorite = useRecipeStore((state) => state.addFavorite);

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, recipes, filterRecipes]);

    const addFav = (recipeId, event) => {
        event.stopPropagation();
        event.preventDefault();
        addFavorite(recipeId);
        event.target.style.backgroundColor = "gold";
    };

    return (
        <div style={{ display: 'flex', width: "80vw", justifyContent: "space-evenly"}}>
            <div>
                <h2>Recipes</h2>
                <SearchBar />
                <ul>
                    {filteredRecipes.length === 0 ? 
                        (<p>No recipes available</p>) : 
                        (filteredRecipes.map((recipe) => (
                            <li key={recipe.id} style={{ display: "flex", justifyContent: "center"}}>
                                <Link to={`/recipes/${recipe.id}`}>{recipe.title}
                                    <button style={{ border: 'none', background: 'transparent', padding: '0', cursor: 'pointer' }}
                                      onClick={(event) => addFav(recipe.id, event)}>
                                        <img style={{width: "20px"}} src={StarOutline} alt="Star Outline"/>
                                    </button>
                                </Link>
                            </li>
                        )))
                    }
                </ul>
                <Link to="/add">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
                    py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Add a New Recipe
                </button></Link>
            </div>
            <div>
                <FavoritesList />
            </div>
            <div>
                <RecommendationsList />
            </div>
        </div>
    );
};

export default RecipeList;