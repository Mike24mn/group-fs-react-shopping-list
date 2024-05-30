import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [shoppingList, setShoppingList]= useState([]);

    useEffect( () => {
        fetchList();
      }, [])

      const fetchList =() => {
        axios({
            method: "GET",
            url: "./api/food"
        })
        .then((response) =>{
            console.log('response.data is:', response.data);

            setShoppingList(response.data)
        })
        .catch((error) => {
            console.log('Error on get:', error);
          });
      }

    return (
        <div className="App">
            <Header />
            <main>
                <p>yo momma ...</p>
            </main>
        </div>
    );
}

export default App;
