import { Link } from "react-router-dom";
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ExpandedReview (props) {

  const paramId = props.match.params.id;
  const reviews = useSelector((state)=>state.gamesReducer.list);
  const storedReviews = useSelector((state)=>state.userReviews.games);

  const selectedGame= reviews.filter(game => game.id == paramId );
  const matchingReview = storedReviews.filter(storedGames => storedGames.id == selectedGame.id);
  console.log(selectedGame);
  console.log(matchingReview);
  return(
    <>
      <p>Expanded Review Page</p>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="http://placekitten.com/286/180" />
        <Card.Body>
          <Card.Title>{selectedGame.name}</Card.Title>
          <Card.Text>
          <b>Summary: </b>
              {selectedGame.summary}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>User Rating: {} </ListGroupItem>
          <ListGroupItem>other item to display</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to="/user-review">Add Review</Link>
          <Link to="/reviews">Return to List</Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default ExpandedReview;