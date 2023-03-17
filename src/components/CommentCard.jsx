

function CommentCard({comments}){
    return(
            <div>
            <p>{comments.author}</p>
            <p>{comments.body}</p>
            </div>)
    }

    export default CommentCard