import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import ActorCard from '../components/ActorCard/ActorCard';
import MovieCard from '../components/MovieCrad/MovieCard';
import SearchBox from '../components/SearchBox/SearchBox';
import Actor from '../model/Actor';
import Movie from '../model/movie';
import './ActorPage.css';


function ActorsPage(){

const [actorsData,setActorsData] = useState([]);
const [actorText ,setActorText] = useState("");
const [moviesData,setMoviesData] = useState([]);
const [movieText, setMovieText]= useState("");
const [results, setResults]= useState([]);

useEffect ( ()=> {
      axios.get("actors.json").then(res => setActorsData (res.data.map(singleActor => new Actor (singleActor)) ))
},[])

useEffect ( ()=> {
      axios.get("movies.json").then(res => setMoviesData (res.data.map(singleMovie => new Movie (singleMovie)) ))
},[])


// const actor1 = new Actor ("Brad","Pitt","https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/",57)
// const actor2 = new Actor ( "Daniel", "Day-Lewis",
// "https://m.media-amazon.com/images/M/MV5BMjE2NDY2NDc1Ml5BMl5BanBnXkFtZTcwNjAyMjkwOQ@@._V1_UY317_CR13,0,214,317_AL_.jpg" , 
//       "https://www.imdb.com/name/nm0000358/" ,63)
// const actor3 = new Actor ( "Gal", "Gadot",
// "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg" , 
//       "https://www.imdb.com/name/nm2933757/" ,40)
      
// const [actorsData, setActorsData] = useState([actor1, actor2, actor3] );

                              
 //filtering actors data
 function FilterActors (e){
      setActorText(e.target.value);
}
const filteredActores = actorsData.filter(actor => actor.fname.toLowerCase().includes( actorText.toLowerCase()) ||  actor.lname.toLowerCase().includes( actorText.toLowerCase())  )

// Converting data (state + props) into presentation (jsx)
const actorGllery =filteredActores.map((item, index) => <ActorCard
                                            key= {index}                                        
                                            fname ={item.fname} 
                                            lname = {item.lname}
                                            imageUrl = {item.imageUrl}  
                                            imdbUrl= {item.imdbUrl}
                                            age = {item.age}  
                                        /> )

function searchMovieTextChange(movieText){

      setMovieText (movieText);

      if (movieText!== "") {
            setResults (["a","b"]);
      } 
      else {
            setResults([]);  
      } 

}
function AddMovie (index){

      // alert(results[index])
      setMoviesData(moviesData.concat(new Movie(results[index]) ));
      setMovieText ("");
      setResults([]);  
}
//presenting movies results:
const moviesGllery =moviesData.map((item, index) => <MovieCard
                                        key= {index}                                                                        
                                        movieName ={item.movieName} 
                                        length = {item.length}
                                        poster = {item.poster}  
                                        director= {item.director}
                                        stars = {item.stars}  
                  /> ) 
                                      
return (
<div className= "p-actors">
      <Row className= "flex">
            <Form.Group className= "p-actors-search" >
                  <Form.Control  value = {actorText} onChange= {FilterActors } as="textarea" className= "p-actors-search" placeholder= "Search actor" />
            </Form.Group>
      </Row>
      <Row className= "flex">  
            {actorGllery}
      </Row>
      <Row className= "flex">
            <SearchBox placeholder= "Search movie" value= {movieText} onSearchChange ={searchMovieTextChange} results = {results} onResultSelected={AddMovie}/>
      </Row>
      <Row className= "flex">  
            {moviesGllery}
      </Row>
</div>
)

}

export default ActorsPage;
