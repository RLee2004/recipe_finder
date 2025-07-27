import { useState } from 'react';

export default function Search() {
    const [ingredient, setIngredient] = useState(['']);

    // Function to update the ingredient state
    const handleChange = (index, newValue) => {
        const copyIngredients = [...ingredient];
        copyIngredients[index] = newValue;
        setIngredient(copyIngredients);
    };

    // Function to add a new ingredient field
    const handleAddField = () => {
        setIngredient([...ingredient, '']);
    }

    // Function to delete an ingredient field
    const handleDeleteField = (index) => {
        const copyIngredients = [...ingredient];
        copyIngredients.splice(index, 1);
        setIngredient(copyIngredients);
    }

    return (
        <div>
            {ingredient.map((ing, index) => (
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
        </div>
    );
}