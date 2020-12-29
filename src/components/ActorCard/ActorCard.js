import { Card} from 'react-bootstrap';
import './ActorCard.css';

// import Actor from "../../model/Actor";
// import { Card } from "react-bootstrap";


function ActorCard(props) {

    const {fname,lname,imageUrl,imdbUrl,age} = props;
    const fullName = fname +" " + lname;
    // console.log(fullName);

    return (
    
        <Card>
            <Card.Img variant="top" variant="top" src={imageUrl}></Card.Img>
            <Card.Body>
                <p className= "text-center">  <a href= {imdbUrl}>{fullName}</a></p>
                <p className= "text-center">Age: {age}</p>
            </Card.Body>

        </Card>



        
    );
  }

  export default ActorCard;
