import { useContext } from "react";
import { useDeleteShopBook, useFetchShopCart } from "../../api/buyBookApi"
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from 'react-router'

export default function ShopCard() {
    const { _id: userId } = useContext(UserContext)
    const { books, setBooks } = useFetchShopCart(userId);
    const { deleteBook } = useDeleteShopBook();
    const navigate = useNavigate()

    const removeBook = async (_id) => {
        const hasConfirm = confirm('Are you sure?')
        if (!hasConfirm) {
            return
        }

        await deleteBook(_id)
        setBooks(state => state.filter(state => state._id !== _id))
    }

    let total = 0;
    books.forEach(b => {
        let currentPrice = Number(b.price)
        total += currentPrice

    })

    const finalizeShopHandler = () => {
        navigate('/shopCart/finalizeShop')
    }

    return (
        <>
            <section className="section shop-cart">
                <h1>Количка</h1>
                <div className="wrapper">
                    <div className="books">
                        {books.length > 0 ? books.map(b =>
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
                disabled = {books.length ==0}
                className={books.length ==0 ? 'finish disabled-btn' :'finish' }
                >Завърши поръчката</button>
            </section>
        </>
    )
}