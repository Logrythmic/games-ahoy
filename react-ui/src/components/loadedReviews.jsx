function LoadedReviews (props) {
  return(
    <div>
       <p>LoadedReviews Page</p>
       <li>
        review Item
        <a href='/user-review'>click here to add review</a>
       </li>
    
        {/* {props.reviews.map((review)=> (
        <li key={review.id}>{review.name}</li>
        ))} */}
    </div>
   
  )
}

export default LoadedReviews;