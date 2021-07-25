import { connect } from 'react-redux';
import { updateSearchTerm } from '../redux/actions';

const SearchForm = ({ updateSearchTerm, searchTerm }) => {

  const handleChange = e => {
    const searchTerm = e.target.value;
    updateSearchTerm(searchTerm);
  }
  // will need to create a form that captures on submit and sends to store to update or will go to the API call directly 
  return <input onChange={handleChange} value={searchTerm} />;
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm => dispatch(updateSearchTerm(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);