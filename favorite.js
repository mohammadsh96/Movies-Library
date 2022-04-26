`use strict`;

const express = require("express");
const res = require("express/lib/response");
const RecipeData =require("./data.json");
const app = express();
const port = 3000 ;
 
app.get("/favorite", HandlefavoritePage);

function HandlefavoritePage(req ,res){

res.send("Welcome to Favorite Page");


}
app.listen(port  , () => {

    console.log(`mohammad on port ${port}`);
    
    });