`use strict`;

const express = require("express");
const res = require("express/lib/response");
const movieData =require("./data.json");
const app = express();
const port = 3000 ;


app.get("/", handlehomePage);
app.get("/favorite", HandlefavoritePage);3

app.listen(port  , () => {

    console.log(`mohammad on  ${port}`);
    
    });


//functions

function handlehomePage(req ,res){

// res.send("check terminal the respone inside it ");
let newrecipe = new Resipe (movieData.title , movieData.poster_path , movieData.overview);

res.json(newrecipe);

}

function HandlefavoritePage(req ,res){

    res.send("Welcome to Favorite Page");
  
    
    }

function Resipe (title ,poster_path, overview  ){
this.title = title ;
this.poster_path = poster_path ; 
this.overview = overview ;

}
// app.get("/" , handleMovieData);
// function handleMovieData (req , res ){
   
// }

