import {useState} from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeInformation({ recipe }) {
    const [showDetails, setShowDetails] = useState(false);

    return (<div className = "recipe-information">
        <img src={recipe.image} alt={recipe.title} />
        <h3> {recipe.title}</h3>
        <button onClick = {() => {setShowDetails(true)}}>View Recipe</button>
        <RecipeCard/>
    </div>
    )
}