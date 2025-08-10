import RecipeInformation from "./RecipeInformation";

export default function ListOfRecipes({ foodData }) {
    return <div>
        {foodData.map((food) => 
        <RecipeInformation recipe={food} key={food.id} />    
        )}
    </div>
}