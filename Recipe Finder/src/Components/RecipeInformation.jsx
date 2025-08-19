export default function RecipeInformation({ recipe }) {
    return <div className = "recipe-information">
        <img src={recipe.image} alt={recipe.title} />
        <h3> {recipe.title}</h3>
        <button>View Recipe</button>
    </div>
}