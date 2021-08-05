import { connect } from 'react-redux';
import { addReviews } from '../redux/actions';
import { Form } from 'react-bootstrap';

const AddReview = ({ addReviews, match })=> {
  const gameId  = match.params.id;
  const handleReviewAdd = e => {
    e.preventDefault();
    const wordReview = e.target[0].value;
    let rating;
    for(let i=1; i<10; i++){
      if(e.target[i].checked){
        rating = e.target[i].value;
      }
    }
    addReviews(gameId,wordReview,rating);
  }

  return(
    <Form onSubmit={handleReviewAdd}>
      <Form.Group className="mb-3" controlId="user-review-input">
        <Form.Label><h5>Thoughts and Analysis</h5></Form.Label>
        <Form.Control as="textarea" placeholder="Add Review Here" rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.Label><p>Rating</p></Form.Label>
        <div key="inline-ratings" className="mb-3">
          <Form.Check inline label="1" name="1" type='radio' id='inline-1' value="1" />
          <Form.Check inline label="2" name="1" type='radio' id='inline-2' value="2"/>
          <Form.Check inline label="3" name="1" type='radio' id='inline-3' value="3"/>
          <Form.Check inline label="4" name="1" type='radio' id='inline-4' value="4"/>
          <Form.Check inline label="5" name="1" type='radio' id='inline-5' value="5"/>
          <Form.Check inline label="6" name="1" type='radio' id='inline-6' value="6"/>
          <Form.Check inline label="7" name="1" type='radio' id='inline-7' value="7"/>
          <Form.Check inline label="8" name="1" type='radio' id='inline-8' value="8"/>
          <Form.Check inline label="9" name="1" type='radio' id='inline-9' value="9"/>
          <Form.Check inline label="10" name="1" type='radio' id='inline-10' value="10"/>
        </div>
      </Form.Group>
      <button type='submit'>Add Review</button>
    </Form>
  )
}

const mapStateToProps = state => ({
  games:[{
    id: state.id,
    wordReview: state.wordReview,
    rating: state.rating,
  }]
  
});

const mapDispatchToProps = dispatch => ({
  addReviews: (id,wordReview,rating) => dispatch(addReviews(id,wordReview,rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);