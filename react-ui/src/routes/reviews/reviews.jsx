import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadGames } from '../../redux/services/games/gameSlice';
import Loading from '../../components/loading';
import LoadedReviews from '../../components/loadedReviews';
import { loaderReset } from '../../redux/actions';

function Reviews () {
  const query = useSelector((state)=> state.advancedSearchForm.dataQuery);
  const dispatch = useDispatch();
  const isloading = useSelector((state)=>state.gamesReducer.loading);
  const reviews = useSelector((state)=>state.gamesReducer.list);

  useEffect(()=> {
    dispatch(loadGames(query));
    dispatch(loaderReset())
  },[]);
  
  return(
    <div>
      <h2 className="page-titles">~Reviews~</h2>
      <ul>
        {isloading ? <Loading /> : <LoadedReviews props = {reviews}/>}
      </ul>
    </div>
  )
}

export default Reviews;