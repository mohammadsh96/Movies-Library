`use strict`;

const express = require("express");
const res = require("express/lib/response");
const RecipeData =require("./data.json");
const app = express();
const port = 3000 ;
let results =[];

app.get("/", handlehomePage);

//functions

function handlehomePage(req ,res){

res.send("check terminal the respone inside it ");

let newrecipe = new Resipe ("Spider-Man: No Way Home" , "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" , "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."    );
console.log(results);
}




function Resipe (title ,poster_path, overview  ){
this.title = title ;
this.poster_path = poster_path ; 
this.overview = overview ;
results.push(this);
}

app.listen(port  , () => {

console.log(`mohammad on  ${port}`);

});