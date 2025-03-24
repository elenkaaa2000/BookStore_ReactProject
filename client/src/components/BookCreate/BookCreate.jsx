import { useNavigate } from 'react-router'
import { useCreateBook } from "../../api/bookApi";

export default function BookCreate({onCreate}) {
    const navigate = useNavigate();
    const { create } = useCreateBook();

    const createAction = async (formData) => {
        const data = Object.fromEntries(formData);
         await create(data);  

         navigate('/catalog')
    }



    return (
        <section className="section create-book">

            <h2>Добави книга</h2>
            <form className="create-form" action={createAction}>

                <div className="field">
                    <label htmlFor="title">Заглавие</label>
                    <input type="text" name="title" id="title" />
                </div>

                <div className="field">
                    <label htmlFor="author">Автор</label>
                    <input type="text" name="author" id="author" />
                </div>

                <div className="field">
                    <label htmlFor="publisher">Издателство</label>
                    <input type="text" name="publisher" id="publisher" />
                </div>

                <div className="field">
                    <label htmlFor="published-year">Година на издаване</label>
                    <input type="number" name="published_year" id="published_year" />
                </div>

                <div className="field">
                    <label htmlFor="isbn">ISBN</label>
                    <input type="number" name="isbn" id="isbn" />
                </div>

                <div className="field">
                    <label htmlFor="categoty">Категория</label>
                    <select name="category" id="categoty">
                        <option value="default">---</option>
                        <option value="kids">Детска литература</option>
                        <option value="teens">Литература за тийнейджъри</option>
                        <option value="fiction">Художествена литература</option>
                        <option value="science">Научна литература</option>
                        <option value="encyclopedias">Енциклопедии</option>
                        <option value="history-politics">История и политика</option>
                        <option value="e-books">Електронни книги</option>
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="imageUrl">Корица</label>
                    <input type="text" name="imageUrl" id="imageUrl" />
                </div>

                <div className="field">
                    <label htmlFor="pages">Брой страници</label>
                    <input type="number" name="pages" id="pages" />
                </div>

                <div className="field">
                    <label htmlFor="language">Език</label>
                    <input type="language" name="language" id="language" />
                </div>

                <div className="field">
                    <label htmlFor="translator">Преводач</label>
                    <input type="text" name="translator" id="translator" />
                </div>

                <div className="field">
                    <label htmlFor="price">Цена</label>
                    <input type="number" name="price" id="price" />
                </div>

                <div className="field-description">
                    <label htmlFor="description">Описание</label>
                    <textarea name="description" id="description"></textarea>
                </div>

                <input type="submit" value="Добави" />
            </form>

        </section>
    )
}