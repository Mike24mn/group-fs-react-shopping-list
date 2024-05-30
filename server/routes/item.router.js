const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// GET ROUTE

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM food ORDER BY name;`;
    pool.query(sqlText)
        .then((result) => {
            console.log("Got some stuff from the database!", result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database selection!!! ${sqlText}`, error);
        })
        
})

// POST ROUTE

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO food ("name", "quantity", "unit")
                     VALUES ($1, $2, $3)`;
    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added item to the database!`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// PUT ROUTES

// Need to implement isPurchased into our database and give it
// a boolean value true/false
// EXAMPLE: "isPurchased" BOOLEAN DEFAULT FALSE 
//  ^^^ add above to food table database, make sure default is false ^^^

//  RESET BUTTON NEEDS LOGIC ADDED BELOW TO OUR PUT ROUTE. 
//  RIGHT NOW IT IS ONLY SET UP FOR isPurchased toggling
//  RESET BUTTON SHOULD CLEAR isPurchased STATUS
//  RESET BUTTON WORKS AS A MASTER RESET FOR ALL ITEMS
//  BUY BUTTON SHOULD TOGGLE PURCHASED STATUS

// PUT ROUTE BELOW IS FOR CLEARING isPurchased status
// NEED TO ADD SOME LOGIC THAT SELECTS BY ISPURCHASED

router.put('/:id', (req, res) => {

    
    let itemId= req.params.id;

    let isPurchased  = req.body.isPurchased;
  
    let queryText = `
    UPDATE "food" SET "isPurchased" = FALSE;
`
    console.log("Change complete: ", itemId, isPurchased)
  
    pool.query(queryText, [todoId])
      .then((result) => {
        res.sendStatus(204)
      })
      .catch((err) => {
        console.log(`Error making query.. '${queryText}'`, err)
        res.sendStatus(500)
      })
  })


// PUT ROUTE BELOW IS FOR TOGGLING isPurchased ESSENTIALLY

router.put('/:id', (req, res) => {

    
    let itemId= req.params.id;

    let isPurchased  = req.body.isPurchased;
  
    let queryText = `
    UPDATE "food" SET "isPurchased"= NOT "isPurchased"
    WHERE "id"= $1;
`
    console.log("Change complete: ", itemId, isPurchased)

    pool.query(queryText, [todoId])
      .then((result) => {
        res.sendStatus(204)
      })
      .catch((err) => {
        console.log(`Error making query.. '${queryText}'`, err)
        res.sendStatus(500)
      })
  })


// DELETE ROUTES

// DELETE ROUTE HERE IS REPRESENTATIVE OF THE CLEAR BUTTON
// CLEAR IS LIKE MASTER DELETE OR A DELETE ALL
// TRUNCATE TABLE DELETES EVERYTHING INCLUDING ID #


router.delete('/', (req, res) => {

    // ^^^ MAY NEED TO ADJUST URL ROUTE A BIT HERE ^^^

    let reqId = [req.params.id]
  
    let queryText = `TRUNCATE TABLE "food";`
  
    pool.query(queryText, reqId)
    .then((result) => {
        console.log("clear successful!!!");
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log("error making query...", `${queryText}`, err);
        res.sendStatus(500)
  
    })
   
  });

// REMOVE BUTTON ROUTE THAT WE NEED TO MAKE ON THE DOM IS BELOW

router.delete('/:id', (req, res) => {

    let reqId = [req.params.id]
  
    let queryText = `DELETE FROM "food" WHERE "id" = $1;`
  
    pool.query(queryText, reqId)
    .then((result) => {
        console.log("remove successful!!!");
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log("error making query...", `${queryText}`, err);
        res.sendStatus(500)
  
    })
   
  });



// Side note, dont forget to create a seperate branch from main.
