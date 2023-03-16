import {getReviewById} from '../utils/api.js'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function SingleReview(){
   
    const [singleReview, setSingleReview] = useState([])
const [isLoading, setIsLoading] = useState(true)    
const {review_id} = useParams()
useEffect(()=>{
    setIsLoading(true)
    getReviewById(review_id)
    .then((reviewData)=>{
        setSingleReview(reviewData)
        setIsLoading(false)
    })
}, [review_id])

 return isLoading ?
     <h2>Loading Review ...</h2> :
(
        <main>
            <p>{singleReview.owner}</p>
            <p>{singleReview.title}</p>
            <img src={singleReview.review_img_url} alt='Not found' ></img>
                            <p>Votes : {singleReview.votes}</p>
        </main>
    )
}

export default SingleReview