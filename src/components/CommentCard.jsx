

function CommentCard({comments}){
    console.log(comments);
    return(
            <div>
            <p>{comments.author}</p>
            <p>{comments.body}</p>
            </div>)
    }

    export default CommentCard