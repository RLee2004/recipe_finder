import { useState } from 'react'
import Search from './Components/Search'

function App() {
  const [foodData, setFoodData] = useState([])
  return (
    <>
      <div>
       <Search foodData = {foodData} setFoodData = {setFoodData}/>
       {foodData.map((food) => 
        <h1 key = {food.id}> {food.title}</h1>)}
      </div>
    
    </>
  )
}

export default App
