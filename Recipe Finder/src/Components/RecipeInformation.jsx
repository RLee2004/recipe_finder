export default function RecipeInformation({ recipe }) {
    return <div>
        <h1 key = {recipe.id}> {recipe.title}</h1>
    </div>
}