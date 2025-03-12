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