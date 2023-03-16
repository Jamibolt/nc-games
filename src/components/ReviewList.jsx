import { useState, useEffect  } from "react"
import { Link } from "react-router-dom"
import {getReviews} from "../utils/api.js"

function ReviewList(){
const [reviews, setReviews] = useState([])
const [isLoading, setIsLoading] = useState(true)
   
useEffect(()=>{
    setIsLoading(true)
    getReviews()
    .then((data)=> {
      setReviews(data)
      setIsLoading(false)}
    )}, [])

    return isLoading ?
     <h2>Loading Reviews ...</h2> :
(
        <main>
            <ul>
                {reviews.map((review)=>{
                    return(
                        <li key={review.review_id}>
                            <p>{review.owner}</p>
                            <Link to={`/reviews/${review.review_id}`}>
                            <p>{review.title}</p>
                        </Link>
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