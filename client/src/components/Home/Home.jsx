import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";
import { useFetchLatestBooks } from "../../api/bookApi";

export default function Home() {
    const { books } = useFetchLatestBooks()
    return (
        <section className="section site-home">
            <section className="banner">
                <h1>Добре дошли в BookStore</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur dignissimos molestias,
                    dicta in quo voluptate cupiditate ullam accusamus repellat.</h3>
            </section>
            <section className="featured-books">
                {books.length > 0 ? books.map(book => <BookCatalogItem key={book._id} {...book} />) : (<h1 className="empty">Няма наскоро добавени книги</h1>)}

            </section>
        </section>

    )
}