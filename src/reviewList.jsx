import { useEffect, useState } from "react"
function ReviewList(review_id){
const [reviews, setReviews] = useState([])
const [isLoading, setIsLoading] = useState(true)
   
useEffect(()=>{
    setIsLoading(true)
fetch('https://jamies-backend-project.onrender.com/api/reviews')
    .then((response)=> response.json())
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
                        <li key={review_id}>
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