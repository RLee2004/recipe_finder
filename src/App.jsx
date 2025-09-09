import { useState } from 'react'
import Search from './Components/Search'
import ListOfRecipes from './Components/ListOfRecipes'
import Header from './Components/Header';

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
    <Header />
    <Search foodData = {foodData} setFoodData = {setFoodData}/>
    <ListOfRecipes foodData = {foodData}/>
    </>
  )
}

export default App
