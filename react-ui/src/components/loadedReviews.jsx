function LoadedReviews (props) {
  return(
    <div>
       <p>LoadedReviews Page</p>
    
        {props.reviews.map((review)=> (
        <li key={review.id}>{review.name}</li>
        ))}
    </div>
   
  )
}

export default LoadedReviews;