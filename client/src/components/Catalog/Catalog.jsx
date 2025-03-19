import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";
import { useFetchData } from "../../api/bookApi";
import { NavLink } from "react-router";

export default function Catalog() {
    const { books } = useFetchData();

    
    return (
        <section className="section catalog">
            <h1>Каталог</h1>
            <nav>
                <ul>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>Всички</NavLink></li>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>Детска литература</NavLink></li>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>Литература за тийнейджъри</NavLink></li>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>Художествена литература</NavLink></li>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>Научна литература</NavLink></li>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>Енциклопедии</NavLink></li>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>История и политика</NavLink></li>
                    <li><NavLink to="#" /*className={({ isActive }) => isActive ? "active" : ""}*/>Електронни книги</NavLink></li>
                </ul>
            </nav>
            <section className="books">
                {books.map(book =>
                    <BookCatalogItem
                        key={book._id}
                        {...book} />)}
            </section>

        </section>
    )
}