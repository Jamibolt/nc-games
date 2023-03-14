import { useState } from "react"
function ReviewList(review_id){
const [reviews, setReviews] = useState([])
    fetch('https://jamies-backend-project.onrender.com/api/reviews')
    .then((response)=> response.json())
    .then((data)=> {
      setReviews(data)}
    )

    return(
        <main>
            <ul>
                {reviews.map((review)=>{
                    console.log(review.review_id)
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