import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore'; // Adjust the path if necessary

function RecommendationsList() {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  
    // Generate recommendations whenever the component mounts or favorites change
    useEffect(() => {
      generateRecommendations();
    }, [generateRecommendations]);
  
    return (
      <div>
        <h2>Recommended Recipes</h2>
        {recommendations.length === 0 ? (
          <p>No recommendations available</p>
        ) : (
          <ul>
            {recommendations.map((recipe) => (
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                {/* Add more details or actions here */}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default RecommendationsList;