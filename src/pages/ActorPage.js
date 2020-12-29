
import { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import ActorCard from '../components/ActorCard/ActorCard';
import Actor from '../model/Actor';

import './ActorPage.css';



function ActorsPage(){

// const actorsData = [];
const actor1 = new Actor ("Brad","Pitt","https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/",57)
const actor2 = new Actor ( "Daniel", "Day-Lewis",
"https://m.media-amazon.com/images/M/MV5BMjE2NDY2NDc1Ml5BMl5BanBnXkFtZTcwNjAyMjkwOQ@@._V1_UY317_CR13,0,214,317_AL_.jpg" , 
      "https://www.imdb.com/name/nm0000358/" ,63)
const actor3 = new Actor ( "Gal", "Gadot",
"https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg" , 
      "https://www.imdb.com/name/nm2933757/" ,40)
      // actorsData.push(actor1, actor2, actor3);
const [actorsData, setActorsData] = useState([actor1, actor2, actor3] );
console.log (actorsData);

// let temp = actorsData.filter(actor => actor.fname.toLowerCase() === ("Brad").toLowerCase() ) ;
// let temp2 = actorsData.filter  (  ({ fname = 'Gal', lname = 'Pitt' }) => [fname, lname, `${fname} ${lname}`].some(el => el.toLowerCase().includes(value.toLowerCase()) ));

// const searchByName = (arr = [], value = "") => {
//     return arr.filter(({ firstName = '', lastName = '' }) =>
//       [firstName, lastName, `${firstName} ${lastName}`].some(el =>
//         el.toLowerCase().includes(value.toLowerCase())
//       )
//     );
//   };


// console.log(temp);
let actorGllery =actorsData.filter(actor => actor.age <41).map((item, index) => <ActorCard
                                            key= {index}                                        
                                            fname ={item.fname} 
                                            lname = {item.lname}
                                            imageUrl = {item.imageUrl}  
                                            imdbUrl= {item.imdbUrl}
                                            age = {item.age}  
                                        /> ) 


return (
<Container className= "p-actors">
<Form.Group >
    <Form.Control   as="textarea" className= "p-actors-search" placeholder= "Search" />
  </Form.Group>
    <Row className= "flex">
        
    {actorGllery}
    
    </Row>
</Container>

)

}

export default ActorsPage;
