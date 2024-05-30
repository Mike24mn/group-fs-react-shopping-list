
import React, { useState } from "react"
import axios from "axios"

const ItemList =({shoppingList})=> {


    const [showBuy, setBuy] = useState(false)

    const resetBuy =()=>{
        setBuy(false)
    }

    const clearItem = ()=> {
        shoppingList.forEach(item => {
        axios
            .delete(`/api/food/${id}`)
            .then(() => {
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

         })
         .catch((error)=>{
           console.error("it failed in delete", error)
         })
        }
    
       


    return (
        <>
        <h2>All my items </h2>

        <ul>
        <button onClick={() => clearItem()}>clear</button>
         <button onClick={resetBuy}>reset</button> </ul>
        
        <ul>
            { shoppingList.map((list)=>(
                <li key={list.id}> {list.name}, {list.quantity}, {list.unit} 
                <button onClick = {() => setBuy(!showBuy)}>BUY</button>  
                 {showBuy ? <span> "purchased" </span> : <span> "buy"</span>}
                 <button onClick={() => handleDelete(list.id)}>Remove</button> </li>
            ))
           
            
        }
            </ul>
        </>
    )
    
}

export default ItemList