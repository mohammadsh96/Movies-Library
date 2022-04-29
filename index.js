`use strict`;

const express = require("express");
const res = require("express/lib/response");
const movieData =require("./data.json");
 require(`dotenv`).config();
 const apikey = process.env.API_KEY;
const app = express();
const port = 3000 ;
const cors = require (`cors`);
const axios= require("axios").default;
// const { default: axios, Axios } = require("axios");
app.get("/trending" , handleMovieData);
app.get("/search", handleSearch);
app.get("/", handlehomePage);
app.get("/favorite", HandlefavoritePage);
app.get("/changes", handlechange);
app.get("/dicover", handlediscover);
app.use(cors());
app.listen(port  , () => {

    console.log(`mohammad on  ${port}`);
    
    });


//functions
function handleSearch (req ,res){

console.log(req.query.moviename);
let movieName =req.query.moviename;
let url =`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=7a16f189cd47249b76c47f3dcda1137f&language=en-US&query=The&page=2`;
axios.get(url)

.then(result=>{
console.log(result.data.results);
res.json(result.data.results);

})
.catch(error=>{
    res.send("name not found");
});
}

function handlehomePage(req ,res){
let newrecipe = new Resipe (movieData.title , movieData.poster_path , movieData.overview);
res.json(newrecipe);
}

function HandlefavoritePage(req ,res){
    res.send("Welcome to Favorite Page");
    }

 function handleMovieData (req , res ){


let url = `https://api.themoviedb.org/3/trending/all/week?api_key=7a16f189cd47249b76c47f3dcda1137f`;

  axios.get(url)
  
  .then(data => {
// console.log(data.data.results);
let datas =data.data.results.map(datas=>{

    return new MovieData(datas.id , datas.title ,datas.release_date ,datas.poster_path, datas.overview) ;
    
})

res.send(datas);
  })
  .catch(error => {
      res.send(" data not found");
  })
 
    }


    function handlechange(req,res){

let url =`https://api.themoviedb.org/3/movie/changes?api_key=7a16f189cd47249b76c47f3dcda1137f&page=1`;

axios.get(url).then(result=>{
 res.json(result.data.results);

})
.catch(error=>{
    res.send("not found");
})
    }
    function handlediscover (req ,res){
let url =`https://api.themoviedb.org/3/discover/movie?api_key=7a16f189cd47249b76c47f3dcda1137f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
axios.get(url).then(result=>{
    res.json(result.data.results);
   
   })
   .catch(error=>{
       res.send("not found");
   })
    }
    //constructors
function Resipe (title ,poster_path, overview  ){
this.title = title ;
this.poster_path = poster_path ; 
this.overview = overview ;

}
function MovieData ( id , title , release_date ,poster_path ,overview ){
this.id =id ;
this.title =title;
this.release_date = release_date;
this.poster_path = poster_path;
this.overview = overview;
}
