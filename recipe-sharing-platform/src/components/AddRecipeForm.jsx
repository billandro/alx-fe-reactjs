import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // State to track errors

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Check if title is empty
    if (!title) newErrors.title = "Title is required.";

    // Check if ingredients are provided and split by lines
    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredientsList.length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }

    // Check if steps are provided
    if (!steps) newErrors.steps = "Preparation steps are required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if any
      return;
    }

    // If no errors, proceed with form submission
    console.log({ title, ingredients: ingredients.split("\n"), steps });
    
    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({}); // Reset errors
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Add a New Recipe</h1>

      {/* Recipe Title Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-2 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-lg`}
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
          className={`w-full p-2 border ${errors.ingredients ? "border-red-500" : "border-gray-300"} rounded-lg`}
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
          className={`w-full p-2 border ${errors.steps ? "border-red-500" : "border-gray-300"} rounded-lg`}
          placeholder="Enter the preparation steps"
          rows="6"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
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