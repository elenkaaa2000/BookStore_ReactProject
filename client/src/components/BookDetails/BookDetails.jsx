import { Navigate, useNavigate, useParams } from "react-router"
import { Link } from "react-router"
import { useDeleteBook, useFetchBookDetails } from "../../api/bookApi";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import BookComments from "../BookComments/BookComments";
import { useFetchAllLikedBooks, useLikeBook } from "../../api/likesApi";


export default function BookDetails() {
    const { bookId } = useParams();
    const { _id: userId } = useContext(UserContext);
    const { book } = useFetchBookDetails(bookId);
    const { deleteBook } = useDeleteBook();
    const { likeBook } = useLikeBook()
    const navigate = useNavigate()

    const isOwner = userId === book._ownerId;

    const { likedBooks } = useFetchAllLikedBooks(userId);
    const hasLiked = likedBooks.some(like => like.bookId === bookId);

    const deleteBookHandler = async () => {
        const hasConfirm = confirm('Are you sure?')
        if (!hasConfirm) {
            return
        }
        await deleteBook(bookId)
        navigate('/catalog')
    }

    const title = book.title;
    const imageUrl = book.imageUrl;
    const author = book.author;
    const price = book.price;

    const likeBookHandler = async () => {
        await likeBook(bookId, title, imageUrl, author, price);
    }

    

    return (
        <section className="section book-details">
            <section className="book-details-content">
                <main className="main-details">
                    <div className="book-image">
                        <img src={book.imageUrl} alt={book.title} />
                    </div>
                    <div className="book-description">
                        <h2>{book.title}</h2>
                        <p><span>Издател:</span> {book.publisher}</p>
                        <p><span>Автор:</span> {book.author}</p>
                        <p><span>Цена:</span> {book.price} лв.</p>
                        <div className="book-review">
                            <h3>Описание</h3>
                            <p>{book.description}</p>
                        </div>
                    </div>

                </main>

                <aside className="aside-details">
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Заглавие</strong></td>
                                <td>{book.title}</td>
                            </tr>
                            <tr>
                                <td><strong>Автор</strong></td>
                                <td>{book.author}</td>
                            </tr>
                            <tr>
                                <td><strong>Издателство</strong></td>
                                <td>{book.publisher}</td>
                            </tr>
                            <tr>
                                <td><strong>Година на издаване</strong></td>
                                <td>{book.published_year}</td>
                            </tr>
                            <tr>
                                <td><strong>ISBN</strong></td>
                                <td>{book.isbn}</td>
                            </tr>
                            <tr>
                                <td><strong>Брой страници</strong></td>
                                <td>{book.pages}</td>
                            </tr>
                            <tr>
                                <td><strong>Език</strong></td>
                                <td>{book.language}</td>
                            </tr>
                            <tr>
                                <td><strong>Превод</strong></td>
                                <td>{book.translator}</td>
                            </tr>

                        </tbody>
                    </table>

                    {userId && (
                        <div className="action-buttons">
                            {isOwner ?
                                (<>
                                    <button><Link to={`/book/${bookId}/edit`}>Редактирай</Link></button>
                                    <button onClick={deleteBookHandler}>Изтрий</button>
                                </>)
                                :
                                (<>
                                    <button>Купи</button>
                                    <button onClick={likeBookHandler} className={hasLiked ? 'disabled-btn' : null}>Добави в <i class="fa-solid fa-heart"></i></button>
                                </>)}

                        </div>
                    )}



                </aside>
            </section>

            <hr />

            <BookComments bookId={bookId}/>
        </section>
    )
}