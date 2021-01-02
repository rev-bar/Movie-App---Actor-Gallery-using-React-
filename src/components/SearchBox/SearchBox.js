import { Form } from "react-bootstrap";

function SearchBox (props){
    const {placeholder, value, onSearchChange} = props;

    return(
        <Form.Group className= "p-actors-search" >
            <Form.Control  as="textarea" className= "c-search" placeholder= {placeholder} value ={value} onChange= {e => onSearchChange (e.target.data)} />
        </Form.Group>
    )
}

export default SearchBox;