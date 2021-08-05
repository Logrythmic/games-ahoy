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
    <Form onSubmit={handleSubmit}  className="home-search">
      <InputGroup className="sm-3">
        <FormControl
          defaultValue={searchTerm}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button type="submit" variant="secondary" id="button-addon">
          Submit
        </Button>
      </InputGroup>
      <InputGroup className='sm-3 justify-content-center'>
      <Button variant="light" as='span' className="justify-content-center"><Link to="/adv-search">Advanced Search</Link></Button>
      </InputGroup>
    </Form>
    );
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm => dispatch(updateSearchTerm(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);