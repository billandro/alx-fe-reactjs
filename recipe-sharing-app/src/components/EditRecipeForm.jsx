import React, { useState} from 'react';
import { useRecipeStore } from './recipeStore';


function EditRecipeForm({ recipeId }) {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && description) {
            updateRecipe(recipeId, { title, description });
            setTitle("");
            setDescription("");
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