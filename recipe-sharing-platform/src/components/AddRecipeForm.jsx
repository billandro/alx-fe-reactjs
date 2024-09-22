import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split("\n");
    if (ingredientsList.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    // Reset error and handle form submission (e.g., save the recipe)
    setError("");
    console.log({ title, ingredientsList, steps });
    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Add a New Recipe</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter recipe title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter ingredients, each on a new line"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter the preparation steps"
          rows="6"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;