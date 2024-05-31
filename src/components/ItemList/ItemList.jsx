
import React, { useState } from "react"
import axios from "axios"
import App from "../App/App.jsx"

const ItemList =({shoppingList, fetchList})=> {


    const [showBuy, setBuy] = useState({})

    const resetBuy =()=>{
        setBuy({})
    }

    const clearItem = ()=> {
        shoppingList.forEach(item => {
        axios
            .delete(`/api/food/${item.id}`)
            .then(() => {
                fetchList()   
                // Handle successful deletion
            })
            .catch((error) => {
                console.error("Failed to clear item", error);
            });
    });
    }
  
        const handleDelete = (id) => {
           axios({
               method: "DELETE",
               url: `/api/food/${id}`
           })
           .then(()=>{

            fetchList()     
            

         })
         .catch((error)=>{
           console.error("it failed in delete", error)
         })
        }
    
const toggleBuy = (id) => {
    setBuy(prevState => ({
        ...prevState,
        [id]: true,
    }))
}
       


return (
     <>
        <h2>All my items </h2>

        <ul>
        <button onClick={() => clearItem()}>Clear</button>
         <button onClick={resetBuy}>Reset</button> </ul>
        
        <ul>
            { shoppingList.map((list)=>(
                <li key={list.id}> {list.name}, {list.quantity}, {list.unit} 
                <button onClick={() => toggleBuy(list.id)}>  
                    {showBuy[list.id] ? "Purchased" : "Buy"}
                </button>
                 <button onClick={() => handleDelete(list.id)}>Remove</button> 
                 </li>
            ))}
        </ul>
    </>
    )
    
}

export default ItemList