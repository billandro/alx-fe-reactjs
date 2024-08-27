import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useRecipeStore = create(persist((set) => ({
  recipes: [],
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter((recipe) => 
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  addRecipe: (newRecipe) => {
    try {
      set(state => ({ recipes: [...state.recipes, newRecipe] }))
    } catch (error) {
      console.error("Failed to add recipe:", error);
    }
  },
  setRecipes: (recipes) => {
    try {
      set({ recipes })
    } catch (error) {
      console.error("Failed to initialize recipes:", error);
    }
  },
  deleteRecipe: (id) => {
    try {
      set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) }));
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  },
  updateRecipe: (id, updatedData) => {
    try {
      set(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === id ? { ...recipe, ...updatedData } : recipe
        ),
      }))
    } catch (error) {
      console.error("Failed to update recipe", error);
    }
  },
}),
{
  name: "recipe store",
  storage: createJSONStorage(() => localStorage),
}
));

export { useRecipeStore };