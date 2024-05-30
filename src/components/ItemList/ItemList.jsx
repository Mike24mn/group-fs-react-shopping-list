import axios from "axios"
import React from "react"

const ItemList =({shoppingList})=> {


    return (
        <>
        <h2>all my items </h2>

        <ul><button>clear</button> <button>reset</button> </ul>
        
        <ul>
            { shoppingList.map((list)=>(
                <li key={list.id}> {list.name}, {list.quantity}, {list.unit} 
                <button>BUY</button> <button>Remove</button> </li>

            ))
           
            
        }
            </ul>
        </>
    )
    
}

export default ItemList