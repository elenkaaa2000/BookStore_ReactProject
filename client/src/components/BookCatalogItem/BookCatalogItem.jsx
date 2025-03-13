import { Link } from 'react-router'
export default function BookCatalogItem({
    _id,
    title,
    author,
    price,
    imageUrl

}) {
    
    return (
        <div className="book-template">
            <div className="book-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="description">
                <h3>{title}</h3>
                <h5>{author}</h5>
                <p>Цена: <span>{price}</span> лв.</p>
                <button><Link to={`/book/${_id}/details`}>Детайли</Link></button>
            </div>
        </div>
    )
}