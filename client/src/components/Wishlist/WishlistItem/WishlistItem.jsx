import { Link } from "react-router"
import { useDislikeBook } from "../../../api/likesApi"
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
        const hasConfirm = confirm('Are you sure?')
        if (!hasConfirm) {
            return
        }
 
       await dislikeBook(_id);
       onEditList(_id);
    }

    return (
        <div className="book-template">
            <div class="remove-btn"><button onClick={() => dislikeBookClickHandler(_id)}><i class="fa-solid fa-heart-circle-minus"></i></button></div>
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