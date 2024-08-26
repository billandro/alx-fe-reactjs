import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

function DeleteRecipeButton({ recipeId }) {
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            deleteRecipe(recipeId);
            navigate('/');
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
    );
}

export default DeleteRecipeButton;