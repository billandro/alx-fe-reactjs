import React, { useState, useEffect } from "react";

function HomePage() {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./data.json");
                const result = await response.json();
                setRecipes(result);
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
            };
        fetchData();
      }, []);

    if (!recipes) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:grid-cols-2">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
              <h1 className="text-xl font-semibold mt-4">{recipe.title}</h1>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          ))}
        </div>
    );
}

export default HomePage;