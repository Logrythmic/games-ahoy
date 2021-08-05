import { connect} from 'react-redux';
import { Link } from "react-router-dom";
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { updateSearchTerm } from '../redux/actions';



const SearchForm = ({ updateSearchTerm, searchTerm }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    updateSearchTerm(searchTerm);

  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="sm-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon">
          Submit
        </Button>
      </InputGroup>
      <Link to="/adv-search">Advanced Search</Link>
    </Form>
    // <form onSubmit={handleSubmit}>
    //   <input defaultValue={searchTerm} /><button type='submit'>Submit</button>
    //   <Link to="/adv-search">Advanced Search</Link>
    // </form>
    );
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm => dispatch(updateSearchTerm(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);