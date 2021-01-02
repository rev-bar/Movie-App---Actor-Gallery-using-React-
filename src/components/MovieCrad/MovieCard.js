import { Card, Col, Row} from 'react-bootstrap';
import './MovieCard.css';

function MovieCard(props) {

    const {movieName,length,poster,director,stars} = props;
   
    return (
 <Row className= "c-movie">  
    <Col  className= "c-movie">
        <img src= {poster}></img>
    </Col>
    <Col>
        <Card xs={12} spacing={3}>
            <Card.Body> 
                <p className= "text-center">{movieName}</p>
                <p className= "text-center">Lenght: {length} min </p>
                <p className= "text-center">Direted by: {director}</p>
                <p className= "text-center">main stars: {stars}</p>
            </Card.Body>
        </Card> 
    </Col>   
</Row>
                
     
    );
  }

  export default MovieCard;
