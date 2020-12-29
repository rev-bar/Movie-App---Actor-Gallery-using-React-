import ActorCard from '../components/ActorCard/ActorCard';
import './ActorPage.css';


function ActorsPage(){

return (
<div className= "container">
    <div className= "row flex">
        <ActorCard
        fname ="Gal" 
        lname = "Gadot"
        imageUrl =   "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg"
        imdbUrl= "https://www.imdb.com/name/nm2933757/"
        age = "40"   
        />
         <ActorCard
        fname ="Gal" 
        lname = "Gadot"
        imageUrl =   "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg"
        imdbUrl= "https://www.imdb.com/name/nm2933757/"
        age = "40"   
        />
         <ActorCard
        fname ="Gal" 
        lname = "Gadot"
        imageUrl =   "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg"
        imdbUrl= "https://www.imdb.com/name/nm2933757/"
        age = "40"   
        />
        
    </div>
</div>

)

}

export default ActorsPage;
