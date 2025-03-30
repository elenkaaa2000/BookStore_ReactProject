import { Link } from "react-router"
import { useDislikeBook } from "../../../api/likesApi"
import { toast } from "react-toastify";
export default function WishlistItem({
    _id,
    bookId,
    title,
    imageUrl,
    author,
    price,
    onEditList
}) {

    const { dislikeBook } = useDislikeBook();

    const dislikeBookClickHandler = async (_id) => {
        const hasConfirm = confirm('Сигурни ли сте, че искате да премахнете книгата от списъка с харесвания!')

        if (!hasConfirm) {
            return
        }

        try {
            await dislikeBook(_id);
            onEditList(_id);
            toast.success('Успешно премахнахте книгата от списъка с харесвания!')
        } catch (error) {
            toast.error('НЕуспешно премахнахте книгата от списъка с харесвания!')
        }
       
    }

    return (
        <div className="book-template">
            <div className="remove-btn"><button onClick={() => dislikeBookClickHandler(_id)}><i className="fa-solid fa-heart-circle-minus"></i></button></div>
            <div className="book-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="description">
                <h3>{title}</h3>
                <h5>{author}</h5>
                <p>Цена: <span>{price}</span> лв.</p>
                <button><Link to={`/book/${bookId}/details`}>Детайли</Link></button>
            </div>
        </div>

    )
}