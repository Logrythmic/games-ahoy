import { connect } from 'react-redux';
import { updateSearchTerm } from '../redux/actions';

const SearchForm = ({ updateSearchTerm, searchTerm }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    const searchTerm = e.target[0].value;
    updateSearchTerm(searchTerm);
  }
  // will need to create a form that captures on submit and sends to store to update or will go to the API call directly 
  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue={searchTerm} /><button type='submit'>Submit</button>
      <a href="/adv-search">Advanced Search</a>
    </form>
    );
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm => dispatch(updateSearchTerm(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);