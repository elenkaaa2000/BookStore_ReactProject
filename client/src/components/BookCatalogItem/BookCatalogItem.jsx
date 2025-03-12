import {Link} from 'react-router'
export default function BookCatalogItem() {
    return (
        <div className="book-template">
            <div className="book-image">
                <img src="https://www.ciela.com/media/catalog/product/cache/9a7ceae8a5abbd0253425b80f9ef99a5/o/n/onyx-storm-bg.jpg" alt="" />
            </div>
            <div className="description">
                <h3>Буря от оникс</h3>
                <h5>Ребека Ярос</h5>
                <p>Цена: <span>17.99</span> лв.</p>
                <button><Link to="/book/bookId/details">Детайли</Link></button>
            </div>
        </div>
    )
}