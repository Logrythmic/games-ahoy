import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import no_image from '../no_image.png';


function LoadedReviews (reviews) {

  const handleImage = (reviewObj) =>{
    if(!reviewObj.cover){
      return no_image;
    }
    else{
      return `https://images.igdb.com/igdb/image/upload/t_logo_med/`+reviewObj.cover.image_id+`.jpg`;
    }
  }

  const handleNavLink = (id) =>{
    return "/expanded-review/"+id;
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
            <b>Aggregated Rating: </b> {Math.floor(review.aggregated_rating)}/100
            </Card.Text>
            <Link to={handleNavLink(review.id)}>Expanded View</Link>
          </Card.Body>
        </Card>
        ))}
    </div>
   
  )
}

export default LoadedReviews;