export default function Home(){
    return(
        <section className="section site-home">
        <section className="banner">
            <h1>Добре дошли в BookStore</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur dignissimos molestias,
                dicta in quo voluptate cupiditate ullam accusamus repellat.</h3>
        </section>
        <section className="featured-books">
            <div className="book-template">
                <div className="book-image">
                    <img src="./onyx-storm-bg.jpg" alt=""/>
                </div>
                <div className="description">
                    <h3>Буря от оникс</h3>
                    <h5>Ребека Ярос</h5>
                    <button>Детайли</button>
                </div>
            </div>

            <div className="book-template">
                <div className="book-image">
                    <img src="./onyx-storm-bg.jpg" alt=""/>
                </div>
                <div className="description">
                    <h3>Буря от оникс</h3>
                    <h5>Ребека Ярос</h5>
                    <button>Детайли</button>
                </div>
            </div>

            <div className="book-template">
                <div className="book-image">
                    <img src="./onyx-storm-bg.jpg" alt=""/>
                </div>
                <div className="description">
                    <h3>Буря от оникс</h3>
                    <h5>Ребека Ярос</h5>
                    <button>Детайли</button>
                </div>
            </div>

            
        </section>
    </section>

    )
}