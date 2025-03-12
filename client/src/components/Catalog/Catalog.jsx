import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";

export default function Catalog(){
    return(
        <section className="section catalog">
            <h1>Каталог</h1>
            <nav>
                <ul>
                    <li className="active"><a href="#">Всички</a></li>
                    <li><a href="#">Детска литература</a></li>
                    <li><a href="#">Литература за тийнейджъри</a></li>
                    <li><a href="#">Художествена литература</a></li>
                    <li><a href="#">Научна литература</a></li>
                    <li><a href="#">Енциклопедии</a></li>
                    <li><a href="#">История и политика</a></li>
                    <li><a href="#">Електронни книги</a></li>
                </ul>
            </nav>
            <section className="books">
               <BookCatalogItem />
               <BookCatalogItem />
               <BookCatalogItem />
            </section>

        </section>
    )
}