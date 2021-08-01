import { Form } from 'react-bootstrap';

function AddReview () {

  
  return(
    <Form>
      <Form.Group className="mb-3" controlId="user-review-input">
        <Form.Label><h5>Thoughts and Analysis</h5></Form.Label>
        <Form.Control as="textarea" placeholder="Add Review Here" rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.Label><p>Rating</p></Form.Label>
        <div key="inline-ratings" className="mb-3">
          <Form.Check inline label="1" name="rating" type='radio' id='inline-1' />
          <Form.Check inline label="2" name="rating" type='radio' id='inline-2' />
          <Form.Check inline label="3" name="rating" type='radio' id='inline-3' />
          <Form.Check inline label="4" name="rating" type='radio' id='inline-4' />
          <Form.Check inline label="5" name="rating" type='radio' id='inline-5' />
          <Form.Check inline label="6" name="rating" type='radio' id='inline-6' />
          <Form.Check inline label="7" name="rating" type='radio' id='inline-7' />
          <Form.Check inline label="8" name="rating" type='radio' id='inline-8' />
          <Form.Check inline label="9" name="rating" type='radio' id='inline-9' />
          <Form.Check inline label="10" name="rating" type='radio' id='inline-10' />
        </div>
      </Form.Group>
      <button type='submit'>Add Review</button>
    </Form>
  )
}

export default AddReview;