import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadGames } from '../../redux/services/games/gameSlice';
import Loading from '../../components/loading';
import LoadedReviews from '../../components/loadedReviews';

function Reviews () {
  const query = useSelector((state)=> state.advancedSearchForm.dataQuery);
  const dispatch = useDispatch();
  // dispatch(loadGames(query));
  const isloading = useSelector((state)=>state.gamesReducer.loading);
  const reviews = useSelector((state)=>state.gamesReducer.list);
  
  useEffect(()=> {
    dispatch(loadGames(query));
  }, []);
  
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