import { Card} from 'react-bootstrap';
import './ActorCard.css';

function ActorCard(props) {

    const {fname,lname,imageUrl,imdbUrl,age} = props;
    const fullName = fname +" " + lname;

    return (
    
        <Card xs={12} spacing={3}>
            <Card.Img variant="top"  src={imageUrl}></Card.Img>
            <Card.Body>
                <p className= "text-center">  <a href= {imdbUrl}>{fullName}</a></p>
                <p className= "text-center">Age: {age}</p>
            </Card.Body>

        </Card>
        
    );
  }

  export default ActorCard;
