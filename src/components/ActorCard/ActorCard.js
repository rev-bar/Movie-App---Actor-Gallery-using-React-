// import Actor from "../../model/Actor";

// import { Card } from "react-bootstrap";


function ActorCard(props) {

    const {fname,lname,imageUrl,imdbUrl,age} = props;
    const fullName = fname +" " + lname;
    // console.log(fullName);

    return (

        <div className="card">
            <img  className="card card-img-top" src={imageUrl} alt= "" ></img>
            <div>
                <p className= "text-center">  <a href= {imdbUrl}>{fullName }</a></p>
                <p className= "text-center">"Age: "{age}</p>
            </div>
        </div>

        
    );
  }

  export default ActorCard;
