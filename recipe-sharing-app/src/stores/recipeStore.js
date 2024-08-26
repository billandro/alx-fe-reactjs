import { create } from 'zustand';

const useRecipeStore = create((set) => ({
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
}));

export default useRecipeStore;