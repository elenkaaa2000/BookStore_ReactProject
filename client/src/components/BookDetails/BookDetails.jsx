import { useNavigate, useParams } from "react-router"
import { Link } from "react-router"
import { useDeleteBook, useFetchBookDetails } from "../../api/bookApi";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import BookComments from "../BookComments/BookComments";
import { useFetchAllLikedBooks, useLikeBook } from "../../api/likesApi";
import { useBuyBook, useFetchShopCart } from "../../api/buyBookApi";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";


export default function BookDetails() {
    const { bookId } = useParams();
    const { _id: userId } = useContext(UserContext);
    const { book, loading } = useFetchBookDetails(bookId);
    const { deleteBook } = useDeleteBook();
    const { likeBook } = useLikeBook();
    const navigate = useNavigate();
    const { buyBook } = useBuyBook();

    const isOwner = userId === book?._ownerId;
    const { title, imageUrl, author, price } = book;

    //Like
    const { likedBooks: initialState } = useFetchAllLikedBooks(userId);
    const [likedBooks, setLikedBooks] = useState(initialState || []);

    useEffect(() => {
        setLikedBooks(initialState);
    }, [initialState]);

    const isLiked = likedBooks?.some(likedBook => likedBook.bookId === bookId);

    const likeBookHandler = async () => {
        if (isLiked) return;
        try {
            await likeBook(bookId, title, imageUrl, author, price);

            setLikedBooks([...likedBooks, { bookId }]);
            toast.success('Успешно добавихте книгата в списъка с харесани книги!')
        } catch (error) {
            toast.error('НЕУСПЕШНО добавихте книгата в списъка с харесани книги!')
        }

    }

    //Buy
    const { books: initialShopState } = useFetchShopCart(userId);
    const [shopBooks, setShopBooks] = useState(initialShopState || []);

    useEffect(() => {
        setShopBooks(initialShopState)
    }, [initialShopState]);

    const isBought = shopBooks?.some(shopBook => shopBook.bookId === bookId);


    const buyBookHandler = async () => {
        if (isBought) {
            return
        }
        try {
            await buyBook(bookId, title, imageUrl, price);
            setShopBooks([...shopBooks, { bookId }])
            toast.success('Успешно добавихте книгата в количката!')
        } catch (error) {
            toast.error('НЕуспешно добавихте книгата в количката!')
        }


    }



    //Delete Book
    const deleteBookHandler = async () => {
         const hasConfirm = confirm('Сигурни ли сте, че искате да изтриете тази книга?')
         if (!hasConfirm) {
             return
         }
         try {
             await deleteBook(bookId);
             toast.success('Успешно изтриване на книга!')
             navigate('/catalog')
         } catch (error) {
             toast.error(error.message)
         }
 
     }   
    

    return (
        <section className="section book-details">
            {loading ? (<Loader />) : (
                <>
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
                                            <button
                                                onClick={buyBookHandler}
                                                disabled={isBought}
                                                className={isBought ? 'disabled-btn' : null}
                                            >Купи</button>
                                            <button onClick={likeBookHandler}
                                                disabled={isLiked}
                                                className={isLiked ? 'disabled-btn' : null}
                                            > Добави в <i className="fa-solid fa-heart"></i></button>
                                        </>)}

                                </div>
                            )}



                        </aside>
                    </section>

                    <hr />

                    <BookComments bookId={bookId} />

                </>
            )}
        </section>
    )
}