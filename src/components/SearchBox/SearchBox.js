import { Form, ListGroup, ListGroupItem } from "react-bootstrap";

function SearchBox (props){
    const {placeholder, value, onSearchChange, results} = props;


    const resultsItems= results.map (result=> <ListGroupItem> {result}</ListGroupItem>)
    return(
        <>
        <Form.Group className= "p-actors-search" >
            <Form.Control  as="textarea" className= "c-search" placeholder= {placeholder} value ={value} onChange= {e => onSearchChange (e.target.data)} />
        </Form.Group>
        <ListGroup>
            {resultsItems}
        </ListGroup>
        </>
    )
}

export default SearchBox;