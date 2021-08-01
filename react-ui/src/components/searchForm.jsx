import { connect, useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm } from '../redux/actions';
import { loadGames } from '../redux/services/games/gameSlice';


const SearchForm = ({ updateSearchTerm, searchTerm }) => {
  // const dispatch = useDispatch();
  const dataQuery = useSelector((state)=>state.advancedSearchForm.dataQuery)
  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = e.target[0].value;
    updateSearchTerm(searchTerm);

    console.log(dataQuery);
    // dispatch(loadGames(dataQuery)) // data query is not console logging
    console.log(dataQuery);
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