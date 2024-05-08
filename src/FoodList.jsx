import React, {useState} from 'react';



function FoodList(){

const[foods,setFoods] = useState(["apple", "mango", "orange"]);



function handleAddFood(){
   const newFood = document.getElementById("foodInfo").value;
   document.getElementById("foodInfo").value = "";
   setFoods(f => [...f, newFood]);
}

function handleRemoveFood(index){
setFoods(foods.filter((_,i) => i !== index))
}

    return(
        <div className='container'>
            <h1>Food List</h1><br />
            <ul>
                {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}> {food}  </li>)}
            </ul>

            <input type="text" id='foodInfo' placeholder='enter your food' /><br />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default FoodList;