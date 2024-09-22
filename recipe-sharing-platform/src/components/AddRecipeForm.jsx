import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Title is required.";
    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredientsList.length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }
    if (!steps) newErrors.steps = "Preparation steps are required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({ title, ingredients: ingredients.split("\n"), steps });

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-semibold mb-6 text-center">Add a New Recipe</h1>

      {/* Recipe Title Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-3 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm`}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Ingredients Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full p-3 border ${errors.ingredients ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm`}
          placeholder="Enter ingredients, each on a new line"
          rows="4"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`w-full p-3 border ${errors.steps ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm`}
          placeholder="Enter the preparation steps"
          rows="6"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;