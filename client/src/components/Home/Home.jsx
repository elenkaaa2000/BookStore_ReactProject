import { useEffect, useState } from "react";
import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";
import bookService from "../../services/bookService";

export default function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result)
            })
    }, []);
        
    return (
        <section className="section site-home">
            <section className="banner">
                <h1>Добре дошли в BookStore</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur dignissimos molestias,
                    dicta in quo voluptate cupiditate ullam accusamus repellat.</h3>
            </section>
            <section className="featured-books">
                {books.map(book => <BookCatalogItem key={book._id} {...book} />)}
            </section>
        </section>

    )
}