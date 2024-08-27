import React, { useState} from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';


function EditRecipeForm({ recipeId }) {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && description) {
            console.log("Before Update:", useRecipeStore.getState().recipes);
            updateRecipe(recipeId, { title, description });

            // Access the updated recipe immediately after state change
            const updatedRecipe = useRecipeStore.getState().recipes.find(recipe => recipe.id === recipeId);
            console.log("After Update:", useRecipeStore.getState().recipes);

            setTitle("");
            setDescription("");
            navigate("/");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) =>  setTitle(e.target.value)}
            />
            <input 
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Submit Changes</button>
        </form>
    );
}

export default EditRecipeForm;