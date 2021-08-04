import { Button, Card } from 'react-bootstrap';
import no_image from '../no_image.png';


function LoadedReviews (reviews) {

  const handleImage = (reviewObj) =>{
    if(!reviewObj.screenshots){
      return no_image;
    }
    else{
      return `https:`+reviewObj.screenshots[0].url;
    }
  }

  return(
    <div>
      <p>LoadedReviews Page</p>
        {reviews.props.map((review)=> (
        <Card key={review.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={handleImage(review)} />
          <Card.Body>
            <Card.Title>{review.name}</Card.Title>
            <Card.Text>
            <b>Summary: </b>
              {review.summary}
            </Card.Text>
            <Card.Text>
            <b>Aggregated Rating: </b> {review.aggregated_rating}/100
            </Card.Text>
            <Button variant="primary" href="/reviews/{review.id}">Expand</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
   
  )
}

export default LoadedReviews;