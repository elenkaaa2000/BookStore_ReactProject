import { useContext } from "react";
import { Link } from "react-router";
import { useCreateComment, useFetchBookComments } from "../../api/commentsApi"
import CreateBookComment from "./CreateBookComment"
import { UserContext } from "../../context/UserContext";
import BookCommentItem from "./BookCommentItem";
import useAuth from "../../hooks/useAuth";
import Loader from "../Loader/Loader";
import { toast } from 'react-toastify'

export default function BookComments({
    bookId
}) {
    const { comments, setComments, loading } = useFetchBookComments(bookId);
    const { name } = useContext(UserContext);
    const { createComment } = useCreateComment();
    const { isAuthenticated } = useAuth()

    const createCommentHandler = async (commentData) => {
        try {
            const newComment = await createComment(bookId, commentData, name);
            setComments(state => [...state, newComment]);
            toast.success('Успешно добавихте коментар към книгата!')
        } catch (error) {
            toast.error('Неуспешно добавихте коментар към книгата!')
        }

    }


    return (
        <section className="book-details-comments">
            <section className="all-comments">
                <h3>Мнения</h3>
                {loading ? (<Loader />) :
                    comments.length > 0 ? comments.map(c => <BookCommentItem key={c._id} {...c} />) : (<h1>Все още няма добавени коментари към книгата.</h1>)}

                {!isAuthenticated && (<h1>За да добавите коментар е необходимо да <Link to="/login">влезете в своя профил</Link>.</h1>)}
            </section>
            {isAuthenticated && <CreateBookComment bookId={bookId} onComment={createCommentHandler} />}

        </section>
    )
}