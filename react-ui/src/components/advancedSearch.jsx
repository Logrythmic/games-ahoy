import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateReviews } from '../redux/actions';
import { Form } from 'react-bootstrap'
import { db_genres, db_platforms } from "./data"
import { loadGames } from '../redux/services/games/gameSlice';



const AdvancedSearch = ({ updateReviews }) => {
  // const dispatch = useDispatch();
  // const dataQuery = useSelector((state)=>state.dataQuery)
  const handleSubmit = e => {
    e.preventDefault();
    const selected_keywords = e.target[0].value;

    const selected_platforms = [];
    for(let i=1; i<13;i++){
      if(e.target[i].checked)
      selected_platforms.push(e.target[i].name);
    }
    const selected_genres =[];
    for(let i=14; i<36; i++){
      if(e.target[i].checked)
      selected_genres.push(e.target[i].name);
    }
    updateReviews(selected_keywords,selected_platforms,selected_genres);
    // console.log(dataQuery);
    // dispatch(loadGames(dataQuery)) // data query is not console logging
    // console.log(dataQuery);
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="search-term-advanced">
        <Form.Label><h5>Keywords</h5></Form.Label>
        <Form.Control type="text" placeholder="Search Here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="platforms-checkboxes">
        <Form.Label><h5>Platforms</h5></Form.Label>
        <br/>
        {db_platforms.map((platform)=>(
          <Form.Check
          inline
          label={platform.name}
          name={platform.id}
          type='checkbox'
          id={platform.name}
          key={`inline-${platform.id}`}
        />
        ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="genres-checkboxes" >
        <Form.Label><h5>Genres</h5></Form.Label>
        <br/>
        {db_genres.map((genre)=>(
            <Form.Check
            inline
            label={genre.name}
            name={genre.id}
            type='checkbox'
            id={genre.name}
            key={`inline-${genre.id}`}
          />
          ))}
      </Form.Group>
      <button type='submit'>Submit</button>
    </Form>
  )
}

const mapStateToProps = state => ({
  keywords: state.keywords,
  platforms: state.platforms,
  genres: state.genres,
});

const mapDispatchToProps = dispatch => ({
  updateReviews: (keywords,platforms,genres) => dispatch(updateReviews(keywords,platforms,genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);