import { connect } from 'react-redux';
import { updateAdvancedSearchForm } from '../redux/actions';
import { Form, InputGroup } from 'react-bootstrap'
import { genres, platforms } from "./data"

const AdvancedSearch = ({ updateAdvancedSearchForm, advancedSearchForm }) => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);

    const selected_keywords = e.target[0].value;
    console.log(selected_keywords);
    const selected_platforms = [];
    for(let i=1; i<13;i++){
      if(e.target[i].checked)
      selected_platforms.push(e.target[i].name);
    }
    console.log(selected_platforms)
    const selected_genres =[];
    for(let i=14; i<36; i++){
      if(e.target[i].checked)
      selected_genres.push(e.target[i].name);
    }
    console.log(selected_genres);

    const advancedForm = {};
    updateAdvancedSearchForm(advancedForm);
  }
  // will need to create a form that captures on submit and sends to store to update or will go to the API call directly 
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="search-term-advanced">
        <Form.Label><h5>Keywords</h5></Form.Label>
        <Form.Control type="text" placeholder="Search Here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="platforms-checkboxes">
        <Form.Label><h5>Platforms</h5></Form.Label>
        <br/>
        {platforms.map((platform)=>(
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
        {genres.map((genre)=>(
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
  updateAdvancedSearchForm: (keywords,platforms,genres) => dispatch(updateAdvancedSearchForm(keywords,platforms,genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);