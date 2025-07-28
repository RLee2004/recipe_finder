import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_MY_API_KEY;

export default function Search({foodData, setFoodData}) {
    const [ingredients, setIngredient] = useState(['']);


    // Function to update the ingredient state
    const handleChange = (index, newValue) => {
        const copyIngredients = [...ingredients];
        copyIngredients[index] = newValue;
        setIngredient(copyIngredients);
    };

    // Function to add a new ingredient field
    const handleAddField = () => {
        setIngredient([...ingredients, '']);
    }

    // Function to delete an ingredient field
    const handleDeleteField = (index) => {
        const copyIngredients = [...ingredients];
        copyIngredients.splice(index, 1);
        setIngredient(copyIngredients);
    }

    const handleSearch = async () => {
        const query = ingredients.map(ing => ing.trim()).filter(ing => ing).join()

        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${API_KEY}&ranking=2`);
            const data = await response.json();
            console.log(data);
            setFoodData(data);
        }
        catch (error) {
            console.error('Error fetching recipes:', error);
        }
  
    }

    console.log(ingredients);
    return (
        <div>
            {ingredients.map((ing, index) => (
                <div key = {index}>
                    <input
                        type="text"
                        value={ing}
                        placeholder="Enter an ingredient"
                        onChange={e => {handleChange(index, e.target.value)}}
                    />

                    <button
                        onClick = {e => {handleDeleteField(index)}}>
                        Delete
                    </button>

                    </div>
            ))}

            <button
                onClick = {handleAddField}>
                Add Ingredient
            </button>

            <button
                onClick = {handleSearch}>
                Search 
            </button>
        </div>
    );
}