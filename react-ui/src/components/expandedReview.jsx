import { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import no_image from '../no_image.png';


function ExpandedReview (props) {

  const handleImage = (reviewObj) =>{
    if(!reviewObj.cover){
      return no_image;
    }
    else{
      return `https://images.igdb.com/igdb/image/upload/t_logo_med/`+reviewObj.cover.image_id+`.jpg`;
    }
  }
  const handleAddRevLink = (id)=>{
    return "/user-review/"+id;
  }

  const [flag, setFlag] = useState(false);
  console.log(flag)
  const paramId = props.match.params.id;
  const reviews = useSelector((state)=>state.gamesReducer.list);
  const storedReviews = useSelector((state)=>state.userReviews.games);

  const selectedGame= reviews.filter(game => game.id === parseInt(paramId) );
  const matchingReview = storedReviews.filter(storedGames => storedGames.id === paramId);
  if(!flag){
    console.log('this renderes when false');
    if(matchingReview.length <=0){
      console.log('no matching games were found');
    }else{
      console.log('there were games found switching flag');
      setFlag(true);
    }
  }
  if(flag){
    console.log("i got changed to true")
  }
  console.log(selectedGame);
  console.log(matchingReview);
  return(
    <>
      <p>Expanded Review Page</p>
      {selectedGame.map((selected)=> (
        <Card key={selected.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={handleImage(selected)} />
          <Card.Body>
            <Card.Title>{selected.name}</Card.Title>
            <Card.Text>
            <b>Summary: </b>
            {selected.summary}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Agregated Rating: {Math.floor(selected.aggregated_rating)}/100 </ListGroupItem>
            <ListGroupItem>Associated Genres: {selected.genres.map(list => <li key={list.id} inline='true'>{list.name}</li>)} </ListGroupItem>
            <ListGroupItem>Associated Platforms: {selected.platforms.map(list => <li key={list.id} inline='true'>{list.name}</li>)}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link to={handleAddRevLink(selected.id)}>Add Review</Link> | | 
            <Link to="/reviews">Return to List</Link>
          </Card.Body>
        </Card>
      ))}
       {/* {flag ? 
          <ListGroup className="list-group-flush">
            <b>User Ratings</b>
            {matchingReview.map((user, index)=>{
              <ListGroupItem key={index}><i>User #{index}:</i>
                <p>Game Rating: {user.rating}/10</p>
                <p>Comments: {user.wordReview}</p>
              </ListGroupItem>
            })}
          </ListGroup>
          :
          <Card.Text>No user reviews available. Please use the links above to add your own.</Card.Text>
          } */}

    </>
  )
}

export default ExpandedReview;