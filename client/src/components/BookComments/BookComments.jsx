import { useContext } from "react";
import { useCreateComment, useFetchBookComments } from "../../api/commentsApi"
import CreateBookComment from "./CreateBookComment"
import { UserContext } from "../../context/UserContext";
import BookCommentItem from "./BookCommentItem";
import useAuth from "../../hooks/useAuth";

export default function BookComments({
    bookId
}) {
    const { comments, setComments } = useFetchBookComments(bookId);
    const { name } = useContext(UserContext);
    const { createComment } = useCreateComment();
const {isAuthenticated} = useAuth()

    const createCommentHandler = async (commentData) => {
        const newComment = await createComment(bookId, commentData, name);
        setComments(state => [...state, newComment])
    }


    return (
        <section className="book-details-comments">
            <section className="all-comments">
                <h3>Мнения</h3>
                {comments.length > 0 ? comments.map(c=> <BookCommentItem key={c._id} {...c}/>) : (<h1>Все още няма добавени коментари към книгата.</h1>)}
            </section>
            {isAuthenticated &&  <CreateBookComment bookId={bookId} onComment={createCommentHandler} />}          

        </section>
    )
}