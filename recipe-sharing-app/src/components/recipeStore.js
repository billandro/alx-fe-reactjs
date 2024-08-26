import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  addRecipe: (newRecipe) => {
    try {
      set(state => ({ recipes: [...state.recipes, newRecipe] }))
    } catch (error) {
      console.error("Attempt to add task was unsuccessful", error);
    }
  },
  setRecipes: (recipes) => {
    try {
      set({ recipes })
    } catch (error) {
      console.error("Initialization of recipes unsuccessful", error);
    }
  },
  deleteRecipe: (id) => {
    try {
      set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) }));
    } catch (error) {
      console.error("Unsuccesfull removal", error);
    }
  },
  updateRecipe: (id, updatedData) => {
    try {
      set((state) => ({
        recipes: state.recipes.map(recipe => {
          if (recipe.id === id) {
            return { ...recipe, ...updatedData };
          }
          return recipe;
        })
      }));
    } catch (error) {
      console.error("Failed to update recipe", error);
    }
  }
}));

export { useRecipeStore };