import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeInformation({ recipe }) {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="recipe-information">
			<img src={recipe.image} alt={recipe.title} />
			<h3> {recipe.title}</h3>
			<button
				onClick={() => {
					setShowDetails(true);
				}}
			>
				View Recipe
			</button>
			<RecipeCard
				showDetails={showDetails}
				onClose={() => setShowDetails(false)}
				id={recipe.id}
			>
				<div className="ingredients-list">
					<div className="ingredients-column missing">
						<h3>Missing Ingredients</h3>
						<ul>
							{recipe.missedIngredients.map((ingredient) => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
						</ul>
					</div>

					<div className="ingredients-column used">
						<h3>Used Ingredients</h3>
						<ul>
							{recipe.usedIngredients.map((ingredient) => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
						</ul>
					</div>
				</div>
			</RecipeCard>
		</div>
	);
}
