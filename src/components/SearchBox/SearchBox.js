import { Form, ListGroup, ListGroupItem } from "react-bootstrap";

function SearchBox (props){
    const {placeholder, value, onSearchChange, results , onResultSelected} = props;


    const resultsItems= results.map ((result,index)=> <ListGroupItem onClick= {() => onResultSelected(index) } key={index} > {result}</ListGroupItem>)
    return(
        <>
        <Form.Group className= "c-search" >
            <Form.Control  as="textarea" className= "c-search" placeholder= {placeholder} value ={value} onChange= {e => onSearchChange (e.target.data)} />
        </Form.Group>
        <ListGroup className= "results">
            {resultsItems}
        </ListGroup>
        </>
    )
}

export default SearchBox;