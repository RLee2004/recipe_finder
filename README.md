# Recipe Finder

Recipe Finder is a React web application that helps you discover recipes based on the ingredients you have. Enter your available ingredients, and the app will suggest recipes you can make, showing which ingredients you have and which ones you’re missing.

You can view a live demo of this web application [here](https://recipe-finder-steel-three.vercel.app/)

## Features

- **Ingredient Autocomplete:** Get suggestions as you type ingredient names.
- **Multiple Ingredients:** Add or remove ingredient fields dynamically.
- **Recipe Search:** Find recipes using the Spoonacular API based on your selected ingredients.
- **Recipe Details:** View detailed recipe information, including instructions, servings, and preparation time.
- **Responsive UI:** Clean and modern interface styled with CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/RLee2004/recipe_finder.git
   cd recipe_finder
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
   Open your browser and go to `http://localhost:5173/` to see the app in action.

## Usage

1. Enter the ingredients you have in the input fields. The app will suggest ingredient names as you type.
2. Select the ingredients from the suggestions or add them manually.
3. Click on the "Find Recipes" button to search for recipes using the Spoonacular API.
4. Browse the list of suggested recipes. Click on a recipe to view its details, including instructions, servings, and preparation time.


## API Reference

This project uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch recipe data. You need to sign up for a free account and obtain an API key to use the recipe search functionality.
