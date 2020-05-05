const { google } = require('googleapis');
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log('SnipSnap REST API listening on port', port)
});

app.get('/:id', async (req, res) => {
    const id = req.params.id;
    const ingredient = await getIngredient(id);
    let retVal;
    if (ingredient) {
      retVal = {status: 'success', data: {ingredient: ingredient}};
    }
    else {
      res.status(404);
      retVal = {status: 'fail', data: {title: `Ingredient ${id} not found`}};
    }
    res.json(retVal);
  });
  
async function getIngredient(id){
    return null
}