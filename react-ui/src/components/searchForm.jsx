import { connect} from 'react-redux';
import { updateSearchTerm } from '../redux/actions';



const SearchForm = ({ updateSearchTerm, searchTerm }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    updateSearchTerm(searchTerm);

  }

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