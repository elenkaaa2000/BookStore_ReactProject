export default function BookCommentItem({ userFullName, comment }) {
    return (
        <div className="comment">
            <h4>Автор:  {userFullName}</h4>
            <p>Коментар:  {comment}</p>            
            <hr />
        </div>
    )
}