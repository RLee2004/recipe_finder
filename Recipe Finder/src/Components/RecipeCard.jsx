import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_MY_API_KEY;

export default function RecipeCard({children, showDetails, onClose, id}) {
    const [recipeDetails, setRecipeDetails] = useState({});
    
    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
                const data = await response.json();
                console.log(data);
                setRecipeDetails(data);
            }
            catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        }

        fetchRecipeDetails();
    }, [showDetails]);

    if (!showDetails) return null;

    return (
        <div className = "recipe-card"
            onClick = {onClose}>
            <div className="recipe-content"
                onClick = {e => e.stopPropagation()}>
                {children}
                {recipeDetails.instructions}
            </div>
        </div>
    );
}