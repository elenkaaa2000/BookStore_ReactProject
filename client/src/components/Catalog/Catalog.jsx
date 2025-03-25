import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";
import { useFetchData } from "../../api/bookApi";
import { Link } from "react-router";
import { useState } from "react";

export default function Catalog() {
    const [category, setCategory] = useState('');
    const categories = [
        'Всички',       
        'Детска литература',
        'Художествена литература',
        'Научна литература',
        'Енциклопедии',
        'История и политика',
        'Електронни книги'
    ];
    

    const { books } = useFetchData(category);

    return (
        <section className="section catalog">
            <h1>Каталог {category =='Всички' ? '' : ` - ${category}` }</h1>
            <nav>
                <ul>
                    {categories.map(category =>
                    (
                        <li key={category}>
                            <a onClick={() => setCategory(category)}>{category}</a>
                        </li>
                    )
                    )}
                </ul>
            </nav>
            {books.length > 0 ? (
                <section className="books">
                    {books.map(book => <BookCatalogItem key={book._id} {...book} />)}
                </section>)
                :
                (<h1 className="empty">Няма добавени книги</h1>)}
        </section>
    )
}