import { useEffect, useState } from "react"
import getReviews from "./api"
function ReviewList(review_id){
const [reviews, setReviews] = useState([])
const [isLoading, setIsLoading] = useState(true)
   
useEffect(()=>{
    setIsLoading(true)
    getReviews()
    .then((data)=> {
      setReviews(data)
      setIsLoading(false)}
    )}, [])

    if(isLoading)
    { return <h2>Loading Reviews ...</h2>}
    return(
        <main>
            <ul>
                {reviews.map((review)=>{
                    return(
                        <li key={review.review_id}>
                            <p>{review.owner}</p>
                            <p>{review.title}</p>
                            <img src={review.review_img_url} alt='Not found' ></img>
                            <p>Votes : {review.votes}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )

}



export default ReviewList