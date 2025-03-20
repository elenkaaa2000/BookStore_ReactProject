import { useParams } from "react-router";
import { useFetchBookComments } from "../../api/commentsApi";
import CreateBookComment from "../CreateBookComment/CreateBookComment";
import BookCommentItem from "./BookCommentItem/BookCommentItem";

export default function BookComments() {
    const {bookId} = useParams()
    const { comments, setComments } = useFetchBookComments(bookId);

    return (
        <section className="book-details-comments">
            {comments.length > 0 ?
                (
                    <section className="all-comments">
                        <h3>Мнения</h3>
                        {comments.map(c => <BookCommentItem key={c._id} {...c}/>)}

                    </section>
                ) :
                (<h1 className="empty">Книгата все още не е оценена от нашите потребители</h1>)}

            <CreateBookComment bookId={bookId} setComments = {setComments}/>
        </section>
    )
}