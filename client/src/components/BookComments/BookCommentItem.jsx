export default function BookCommentItem({
    name,
    comment,
}) {
    return (
      
            <div className="comment">
                <h4>Автор: {name}</h4>
                <p>Коментар: {comment}</p>
                <hr/>
            </div>
       
    )
}