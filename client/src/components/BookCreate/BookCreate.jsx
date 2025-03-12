export default function BookCreate(){
    return(
        <section className="section create-book">

            <h2>Добави книга</h2>
            <form className="create-form" action="#">

                <div className="field">
                    <label htmlFor="title">Заглавие</label>
                    <input type="text" name="title" id="title"/>
                </div>

                <div className="field">
                    <label htmlFor="author">Автор</label>
                    <input type="text" name="author" id="author"/>
                </div>

                <div className="field">
                    <label htmlFor="publisher">Издателство</label>
                    <input type="text" name="publisher" id="publisher"/>
                </div>

                <div className="field">
                    <label htmlFor="published-year">Година на издаване</label>
                    <input type="number" name="published-year" id="published-year"/>
                </div>

                <div className="field">
                    <label htmlFor="isbn">ISBN</label>
                    <input type="number" name="isbn" id="isbn"/>
                </div>

                <div className="field">
                    <label htmlFor="cover-image">Корица</label>
                    <input type="text" name="cover-image" id="cover-image"/>
                </div>

                <div className="field">
                    <label htmlFor="pages">Брой страници</label>
                    <input type="number" name="pages" id="pages"/>
                </div>

                <div className="field">
                    <label htmlFor="language">Език</label>
                    <input type="language" name="language" id="language"/>
                </div>

                <div className="field">
                    <label htmlFor="translator">Преводач</label>
                    <input type="text" name="translator" id="translator"/>
                </div>

                <div className="field">
                    <label htmlFor="price">Цена</label>
                    <input type="number" name="price" id="price"/>
                </div>

                <div className="field-description">
                    <label htmlFor="description">Описание</label>                    
                    <textarea name="d" id=""></textarea>
                </div>

                <input type="submit" value="Добави"/>
            </form>

        </section>
    )
}