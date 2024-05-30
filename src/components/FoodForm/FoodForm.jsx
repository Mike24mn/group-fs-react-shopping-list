import { useState } from 'react'
import axios from 'axios'

const FoodForm = ({fetchLlist}) => {

    const [getItem,setGetItem] = useState("")
    const [getQuantity, setQuantity] = useState("")
    const [getUnit, setGetUnit] = useState("")

    const createList = (event) => {
        event.preventDefault();

    axios({
        method: "POST",
        url: "/api/food",
        data: {
            name: getItem,
            quantity: getQuantity,
            unit: getUnit
        }
    })
    .then ((response) => {
        console.log(response);
        fetchLlist();

        // clear the form inputs:
        setGetUnit("");
        setGetItem("");
        setQuantity("");
    })
    .catch((error)=>{   
        console.error("failed in axios POST", error )
    });

    return (
        <>
        
        <h2>Shopping Form</h2>

        <form onSubmit={createList}>
        <label>Item:</label>
        <input  onChange={(event) => setGetItem(event.target.value)}
                    value={getItem} />
        <label>Quantity:</label>
        <input onChange={(event) => setQuantity(event.target.value)}
                    value={getQuantity} />
        <label>Unit:</label>
        <input   onChange={(event) => setGetUnit(event.target.value)}
                    value={getUnit} />

        <button type='submit'>Add item </button>            

        </form>
        
        
        
        </>




    )
}
}

export default FoodForm