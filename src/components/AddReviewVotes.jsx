import { useState } from 'react'
import {voteForReview} from '../utils/api.js'






function AddReviewVotes({ review_id, setSingleReview}){
    const [isVotingErr, setIsVotingErr] = useState(false)
    const onClick = ()=>{
            setSingleReview((currentReview)=>{
                return {...currentReview, votes:currentReview.votes + 1}
            })
        voteForReview(review_id).catch(()=>{
            setSingleReview((currentReview)=>{
                return {...currentReview, votes:currentReview.votes}
            })
            setIsVotingErr(true)
        })
    }
        return (
            <main>
            <button onClick={onClick}>Vote here!</button>
            {isVotingErr && <p>Vote not uploaded</p>}
            </main>
            )
    }
    
    
    
    
    // const [isLoading, setIsLoading] = useState(true)
    // const {votes} = useParams()
    // const {review_id} = useParams
    // useEffect(()=>{
    //     setIsLoading(true)
    // voteForReview(review_id).then((voteData)=>{
    //     setVotes(voteData)
    //     setIsLoading(false)
    // })},[votes])

    
    

    

    export default AddReviewVotes