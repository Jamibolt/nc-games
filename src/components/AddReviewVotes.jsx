function voteButton({votes, setVotes}){
    const {votes} = useParams()
    
    useEffect(()=>{
    voteForReview(votes)
    .then((voteData)=>{
    setVotes(voteData)
    })
    },[votes])
    }
    
    const voted = (votes) => {
    addReviewVote(votes)
    }
    
    return (
    <button onClick={()=>voted(reviews.votes)}>Vote here!</button>)