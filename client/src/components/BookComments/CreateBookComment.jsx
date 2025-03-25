export default function CreateBookComment({
    bookId,
    onComment }) {
    const formAction = (formData) => {
        const commentData = Object.fromEntries(formData)
        onComment(commentData);
       
    }
    return (
        <section className="add-comment">
            <h3>Вашето мнение е важно за нас</h3>
            <form action={formAction}>
                <div className="field">
                    <label htmlFor="comment">Мнение</label>
                    <textarea name="comment" id="comment"></textarea>
                </div>
                <input type="submit" value="Изпрати" />
            </form>
        </section>
    )
}