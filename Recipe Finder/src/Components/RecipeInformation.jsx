import {useState} from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeInformation({ recipe }) {
    const [showDetails, setShowDetails] = useState(false);

    return (<div className = "recipe-information">
        <img src={recipe.image} alt={recipe.title} />
        <h3> {recipe.title}</h3>
        <button onClick = {() => {setShowDetails(true)}}>View Recipe</button>
        <RecipeCard showDetails = {showDetails} onClose = {() => setShowDetails(false)}>
            <img src = {recipe.image}></img>
            <h1>{recipe.title}</h1>
            Missing Ingredients: {recipe.missedIngredients.map(ing => ing.name).join(', ')} <br/>
            Used Ingredients: {recipe.usedIngredients.map(ing => ing.name).join(', ')} <br/>

        </RecipeCard>
    </div>
    )
}