import RecipeInformation from "./RecipeInformation";

export default function ListOfRecipes({ foodData }) {
    return <div className="list-of-recipes">
        {foodData.map((food) => 
        <RecipeInformation recipe={food} key={food.id} />    
        )}
    </div>
}