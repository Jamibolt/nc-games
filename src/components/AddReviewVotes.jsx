import {voteForReview} from '../utils/api.js'






function AddReviewVotes({ review_id, setSingleReview}){
    const onClick = ()=>{
            setSingleReview((currentReview)=>{
                return {...currentReview, votes:currentReview.votes + 1}
            })
        voteForReview(review_id).catch()
    }
        return (
            <button onClick={onClick}>Vote here!</button>)
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