import {getCommentsByReview, getReviewById} from '../utils/api.js'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CommentCard from './CommentCard'


function SingleReview(){
   
    const [singleReview, setSingleReview] = useState([])
const [isLoading, setIsLoading] = useState(true)  
const [comments, setComments] = useState([])  
const {review_id} = useParams()
useEffect(()=>{
    setIsLoading(true)
    getReviewById(review_id)
    .then((reviewData)=>{
        setSingleReview(reviewData)
        setIsLoading(false)
    }) 
    getCommentsByReview(review_id).then((commentData)=>{
        setComments(commentData)
    })
}, [review_id])



 return isLoading ?
     <h2>Loading Review ...</h2> :
(
        <main>
            <p>{singleReview.owner}</p>
            <p>{singleReview.title}</p>
            <p>{singleReview.review_body}</p>
            <img src={singleReview.review_img_url} alt='Not found' ></img>
                            <p>Votes : {singleReview.votes}</p>
            <p>{(comments.length === 0) ?
            'No comments' :
            'Comments'}</p>
                            {comments.map((comment)=>{
                            return(
                            <CommentCard comments={comment} />)
                            })}
        </main>
    )
}

export default SingleReview