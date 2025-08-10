import { useState } from 'react'
import Search from './Components/Search'
import ListOfRecipes from './Components/ListOfRecipes'

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <div>
       <Search foodData = {foodData} setFoodData = {setFoodData}/>
       <ListOfRecipes foodData = {foodData}/>
      </div>
    
    </>
  )
}

export default App
