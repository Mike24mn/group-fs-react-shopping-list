
import React, { useState } from "react"
import axios from "axios"

const ItemList =({shoppingList})=> {


    const [showBuy, setBuy] = useState(false)

    const resetBuy =()=>{
        setbuy(false)
    }

    const clearItem = (event)=>{
        event.preventDefault()
        shoppingList.forEach(item => {
            handleDelete(item.id);
    }
        )}
  
        const handleDelete = (event) => {
           axios({
               method: "DELETE",
               url: "/api/food/:id"
           })
           .then(()=>{
           event.preventDefault();
           const list = event.target.parentNode.parentNode; 
           const listItem = event.target.parentNode; 
           list.removeChild(listItem); 
         })
         .catch((error)=>{
           console.error("it failed in delete", error)
         })
        }
    
       


    return (
        <>
        <h2>All my items </h2>

        <ul><button onClick={clearItem} >clear</button> <button onClick={resetBuy}>reset</button> </ul>
        
        <ul>
            { shoppingList.map((list)=>(
                <li key={list.id}> {list.name}, {list.quantity}, {list.unit} 
                <button onClick = {() => setBuy(!showBuy)}>BUY</button>  
                 {showBuy ? <span> "purchased" </span> : <span> "buy"</span>}
                 <button onClick={(event)=>handleDelete(event)}>Remove</button> </li>
            ))
           
            
        }
            </ul>
        </>
    )
    
}

export default ItemList