import { useNavigate, useParams } from "react-router"
import { useFetchBookDetails, useUpdateBook } from "../../api/bookApi";
import { toast } from 'react-toastify'


export default function BookEdit() {
    const { bookId } = useParams();
    const { book } = useFetchBookDetails(bookId);
    const { updateBook } = useUpdateBook();
    const navigate = useNavigate();

    const formAction = async (formData) => {
        const data = Object.fromEntries(formData);

        try {
            await updateBook(bookId, data);
            toast.success('Успешно редактирахте книгата!')
            navigate(`/book/${bookId}/details`)
        } catch (error) {
            
            toast.error(error.message)
        }

    }

    return (
        <section className="section edit-book">

            <h2>Редактирай книга</h2>
            <form className="create-form" action={formAction}>

                <div className="field">
                    <label htmlFor="title">Заглавие</label>
                    <input type="text" name="title" id="title" defaultValue={book.title} />
                </div>

                <div className="field">
                    <label htmlFor="author">Автор</label>
                    <input type="text" name="author" id="author" defaultValue={book.author} />
                </div>

                <div className="field">
                    <label htmlFor="publisher">Издателство</label>
                    <input type="text" name="publisher" id="publisher" defaultValue={book.publisher} />
                </div>

                <div className="field">
                    <label htmlFor="ppublished_year">Година на издаване</label>
                    <input type="number" name="published_year" id="published_year" defaultValue={book.published_year} />
                </div>

                <div className="field">
                    <label htmlFor="isbn">ISBN</label>
                    <input type="number" name="isbn" id="isbn" defaultValue={book.isbn} />
                </div>

                <div className="field">
                    <label htmlFor="imageUrl">Корица</label>
                    <input type="text" name="imageUrl" id="imageUrl" defaultValue={book.imageUrl} />
                </div>

                <div className="field">
                    <label htmlFor="pages">Брой страници</label>
                    <input type="number" name="pages" id="pages" defaultValue={book.pages} />
                </div>

                <div className="field">
                    <label htmlFor="language">Език</label>
                    <input type="language" name="language" id="language" defaultValue={book.language} />
                </div>

                <div className="field">
                    <label htmlFor="translator">Преводач</label>
                    <input type="text" name="translator" id="translator" defaultValue={book.translator} />
                </div>

                <div className="field">
                    <label htmlFor="price">Цена</label>
                    <input type="number" name="price" id="price" defaultValue={book.price} />
                </div>

                <div className="field-description">
                    <label htmlFor="description">Описание</label>
                    <textarea name="description" id="description" defaultValue={book.description}></textarea>
                </div>
                <input type="submit" value="Промени" />
            </form>

        </section>
    )
}