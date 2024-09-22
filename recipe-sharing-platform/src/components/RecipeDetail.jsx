import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
        try {
            const response = await fetch("/data.json");
            const data = await response.json();
            const foundRecipe = data.find((item) => item.id === parseInt(id));
            setRecipe(foundRecipe);
        } catch (error) {
            console.error("Error fetching recipe data:", error);
        }
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg mb-4">{recipe.summary}</p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            {/* Replace with real ingredients */}
            <ul className="list-disc ml-6 mb-4">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            {/* Replace with real instructions */}
            <p>Step 1: Do something...</p>
            <p>Step 2: Do something else...</p>
        </div>
        </div>
    );
}

export default RecipeDetail;