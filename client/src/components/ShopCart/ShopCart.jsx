import { useContext } from "react";
import { useDeleteAllShopBooks, useDeleteShopBook, useFetchShopCart } from "../../api/buyBookApi"
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify'
import Loader from "../Loader/Loader";

export default function ShopCard() {
    const { _id: userId } = useContext(UserContext)
    const { books, setBooks, loading } = useFetchShopCart(userId);
    const { deleteBook } = useDeleteShopBook();
    const navigate = useNavigate();
    const { deleteAllBooks } = useDeleteAllShopBooks();

    const removeBook = async (_id) => {
        const hasConfirm = confirm('Сигурни ли сте, че искате да премахнете книгата от количката!')
        if (!hasConfirm) {
            return
        }

        try {
            await deleteBook(_id)
            setBooks(state => state.filter(state => state._id !== _id))
            toast.success('Успешно премахнахте книгата от количката!')
        } catch (error) {
            toast.error('НЕуспешно премахнахте книгата от количката!')
        }

    }

    let total = 0;
    books.forEach(b => {
        let currentPrice = Number(b.price)
        total += currentPrice

    })

    const finalizeShopHandler = () => {
        try {
            deleteAllBooks(books);
            toast.success('Успешно направена поръчка');
            navigate('/shopCart/finalizeShop')
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <section className="section shop-cart">
                <h1>Количка</h1>
                <div className="wrapper">
                    <div className="books">
                        {loading ? (<Loader />) :
                            books.length > 0 ? books.map(b =>
                            (<div className="book" key={b._id}>
                                <div className="description">
                                    <img src={b.imageUrl} alt="" />
                                    <h3>{b.title}</h3>
                                </div>
                                <div className="price">
                                    <p>Цена: {b.price} лв.</p>
                                </div>
                                <div className="buttons">
                                    <button><Link to={`/book/${b.bookId}/details`}>Детайли</Link></button>
                                    <button onClick={() => removeBook(b._id)}>Изтрий</button>
                                </div>
                            </div>)) : (<h2>Няма добавени книги в количката</h2>)}

                    </div>

                    <div className="total-price">
                        <p>Обща сума: {total} лв. </p>
                    </div>
                </div>
                <button
                    onClick={finalizeShopHandler}
                    disabled={books.length == 0}
                    className={books.length == 0 ? 'finish disabled-btn' : 'finish'}
                >Завърши поръчката</button>
            </section>
        </>
    )
}