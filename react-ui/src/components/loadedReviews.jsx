import { Button, Card } from 'react-bootstrap';

function LoadedReviews (props) {
  return(
    <div>
      <p>LoadedReviews Page</p>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="http://placekitten.com/286/180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          <b>Summary: </b>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Delectus aperiam iure eos doloremque sit tempora.
          </Card.Text>
          <Card.Text>
            <b>Aggregated Rating: </b> 85/100
          </Card.Text>
          <Button variant="primary" href="/reviews/1">Expand</Button>
        </Card.Body>
      </Card>
    
        {/* {props.reviews.map((review)=> (
        <li key={review.id}>{review.name}</li>
        ))} */}

        {/* {props.reviews.map((review)=> (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src=`https:{review.screenshots[0].url}`/>
          <Card.Body>
            <Card.Title>{review.name}</Card.Title>
            <Card.Text>
              <h5>Summary: </h5>
              {review.summary}
            </Card.Text>
            <Card.Text>
              <h5>Rating: </h5> {review.aggregated_rating}/100
            </Card.Text>
            <Button variant="primary" href="/reviews/{review.id}">Expand</Button>
          </Card.Body>
        </Card>
        ))} */}
    </div>
   
  )
}

export default LoadedReviews;