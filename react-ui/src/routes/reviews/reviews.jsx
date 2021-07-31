import { useSelector, useDispatch } from 'react-redux';
import { loadGames } from '../../redux/services/games/gameSlice';
import Loading from '../../components/loading';
import LoadedReviews from '../../components/loadedReviews';

function Reviews () {
  const dispatch = useDispatch();
  dispatch(loadGames());
  const isloading = useSelector((state)=>state.loading)
  const reviews = useSelector((state)=>state.list);
  // const state = useSelector((state)=>state);
  // const bodyDataBase = `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,screenshots.*; limit 7;`;
  
  return(
    <>
      <h2>Reviews</h2>
      <ul>
        {isloading ? <Loading /> : <LoadedReviews props={reviews} />}
      </ul>
    </>
  )
}

export default Reviews;