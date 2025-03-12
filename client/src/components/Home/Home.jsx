import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";

export default function Home() {
    return (
        <section className="section site-home">
            <section className="banner">
                <h1>Добре дошли в BookStore</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur dignissimos molestias,
                    dicta in quo voluptate cupiditate ullam accusamus repellat.</h3>
            </section>
            <section className="featured-books">
                <BookCatalogItem />

                 <BookCatalogItem />  

                  <BookCatalogItem />   
            </section>
        </section>

    )
}