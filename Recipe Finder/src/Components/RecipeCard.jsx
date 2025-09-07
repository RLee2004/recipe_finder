import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_MY_API_KEY;

export default function RecipeCard({ children, showDetails, onClose, id }) {
	const [recipeDetails, setRecipeDetails] = useState({});

	useEffect(() => {
		const fetchRecipeDetails = async () => {
			try {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
				);
				const data = await response.json();
				console.log(data);
				setRecipeDetails(data);
			} catch (error) {
				console.error("Error fetching recipe details:", error);
			}
		};

		if (showDetails && id) {
			fetchRecipeDetails();
		}
	}, [showDetails, id]);

	if (!showDetails) return null;

	return (
		<div className="recipe-card" onClick={onClose}>
			<div
				className="recipe-content"
				onClick={(e) => e.stopPropagation()}
			>
				<img src={recipeDetails.image} alt={recipeDetails.title} />
				<h1> {recipeDetails.title} </h1>
				<div className="recipe-info">
					<span className="servings">
						<p>Servings: {recipeDetails.servings}</p>
					</span>
					<span className="ready-in-minutes">
						<p>Ready in: {recipeDetails.readyInMinutes} minutes</p>
					</span>
				</div>
				{children}
				<div className="recipe-instructions">
					<h2>Instructions</h2>
					{recipeDetails.analyzedInstructions && (
						<ol>
							{recipeDetails.analyzedInstructions[0].steps.map(
								(step) => (
									<li key={step.number}>{step.step}</li>
								)
							)}
						</ol>
					)}
				</div>
			</div>
		</div>
	);
}
