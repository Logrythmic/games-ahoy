import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function ExpandedReview () {
  return(
    <>
      <p>Expanded Review Page</p>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="http://placekitten.com/286/180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>User Rating: </ListGroupItem>
          <ListGroupItem>other item to display</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/user-review">Add Review</Card.Link>
          <Card.Link href="/reviews">Return to List</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default ExpandedReview;