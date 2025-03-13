import { useEffect, useState } from "react";
import { useParams } from "react-router"
import bookService from "../../services/bookService";

export default function BookDetails() {
    const { bookId } = useParams();

    const [book, setBook] = useState({})
    useEffect(() => {
        bookService.getOne(bookId)
            .then(r => {
                setBook(r)
            })
    }, [bookId])

    return (
        <section className="section book-details">
            <section className="book-details-content">
                <main className="main-details">
                    <div className="book-image">
                        <img src={book.imageUrl} alt={book.title} />
                    </div>
                    <div className="book-description">
                        <h2>{book.title}</h2>
                        <p><span>Издател:</span> {book.publisher}</p>
                        <p><span>Автор:</span> {book.author}</p>
                        <p><span>Цена:</span> {book.price}</p>
                        <div className="book-review">
                            <h3>Описание</h3>
                            <p>{book.description}</p>
                        </div>
                    </div>

                </main>

                <aside className="aside-details">
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Заглавие</strong></td>
                                <td>{book.title}</td>
                            </tr>
                            <tr>
                                <td><strong>Автор</strong></td>
                                <td>{book.author}</td>
                            </tr>
                            <tr>
                                <td><strong>Издателство</strong></td>
                                <td>{book.publisher}</td>
                            </tr>
                            <tr>
                                <td><strong>Година на издаване</strong></td>
                                <td>{book.published_year}</td>
                            </tr>
                            <tr>
                                <td><strong>ISBN</strong></td>
                                <td>{book.isbn}</td>
                            </tr>
                            <tr>
                                <td><strong>Брой страници</strong></td>
                                <td>{book.pages}</td>
                            </tr>
                            <tr>
                                <td><strong>Език</strong></td>
                                <td>{book.language}</td>
                            </tr>
                            <tr>
                                <td><strong>Превод</strong></td>
                                <td>{book.translator}</td>
                            </tr>

                        </tbody>


                    </table>
                </aside>
            </section>

            <hr />

            <section className="book-details-comments">

                <section className="all-comments">
                    <h3>Мнения</h3>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr />
                    </div>

                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr />
                    </div>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr />
                    </div>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr />
                    </div>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr />
                    </div>
                </section>

                <section className="add-comment">
                    <h3>Вие оценявате <strong>Буря от оникс</strong></h3>
                    <form action="#">
                        <div className="field">
                            <label htmlFor="author">Автор</label>
                            <input type="text" id="author" name="author" />
                        </div>
                        <div className="field">
                            <label htmlFor="author">Мнение</label>
                            <textarea name="author" id="author"></textarea>
                        </div>
                        <input type="submit" value="Изпрати" />
                    </form>
                </section>

            </section>

        </section>
    )
}