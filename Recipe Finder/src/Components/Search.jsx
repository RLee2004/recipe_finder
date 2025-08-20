import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_MY_API_KEY;

export default function Search({foodData, setFoodData}) {
    const [ingredients, setIngredient] = useState(['']);
    const [suggestions, setSuggestions] = useState([[]]);
    const [currentIndex, setCurrentIndex] = useState(-1);

    // Everytime the ingredients change, fetch new suggestions
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (currentIndex === -1) return;
            const query = ingredients[currentIndex].trim();
            if (!query) return;

            try {
                const response = await fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=${API_KEY}`);
                const data = await response.json();
                console.log(data.map(item => item.name));

                // Creates a copy of suggestions array and updates the current index with new suggestions
                const copySuggestions = [...suggestions];
                copySuggestions[currentIndex] = data.map(item => item.name);
                setSuggestions(copySuggestions);
            }

            catch (error) {
                console.error('Error fetching suggestions:', error);
            }

            console.log(`Fetching suggestions for: ${query}`);
        }

        fetchSuggestions();
    }, [ingredients, currentIndex]); 

    useEffect(() => {
    const handleClickOutside = (e) => {
        // Only clear if click is outside any <ul> or <input>
        if (!e.target.closest('ul')) {
            setSuggestions(suggestions.map(() => [])); 
            setCurrentIndex(-1);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [suggestions]);

    // Function to update the ingredient state
    const handleChange = (index, newValue) => {
        const copyIngredients = [...ingredients];
        copyIngredients[index] = newValue;
        setIngredient(copyIngredients);
        setCurrentIndex(index);
        
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
        setCurrentIndex(-1);
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

    // console.log(ingredients);
    return (
        <div className = "search-container">
            {ingredients.map((ing, index) => (
                <div key = {index} className = "ingredient-input">
                    <div className = "input-and-button">
                        <input
                            type="text"
                            value={ing}
                            placeholder="Enter an ingredient"
                            onChange={e => {handleChange(index, e.target.value)}}
                            onFocus = {() => setCurrentIndex(index)}
                        />
                        <span className="material-symbols-outlined" onClick = {e => {handleDeleteField(index)}}> delete </span>
                    </div>
                
                    {suggestions[index] && suggestions[index].length > 0 && (
                        <ul>
                            {suggestions[index].map((suggestion, i) => (
                                <li style = {{width: 'fit-content'}} key={i} onClick={() => {
                                    handleChange(index, suggestion);
                                    const copySuggestions = [...suggestions];
                                    copySuggestions[index] = [];
                                    setSuggestions(copySuggestions);
                                    setCurrentIndex(-1);
                                    }}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        
            <div className = "bottom-buttons">
                <button onClick = {handleAddField}> Add Ingredient </button>
                <button onClick = {handleSearch}> Search </button>
            </div>

        </div>
    );
}