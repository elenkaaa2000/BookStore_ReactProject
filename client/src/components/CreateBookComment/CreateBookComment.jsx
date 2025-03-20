import { useContext, useState } from 'react';
import { useNavigate } from 'react-router'
import { UserContext } from '../../context/UserContext';
import { useCreateComment } from '../../api/commentsApi';

export default function CreateBookComment({
    bookId,
    setComments
}) {   
   
    const { firstName, lastName } = useContext(UserContext);
    const { createComment } = useCreateComment();

    const submitAction = async (formData) => {
        const data = Object.fromEntries(formData);
        const result = await createComment(bookId, data, firstName, lastName);      
           
    }
    return (
        <section className="add-comment">
            <h3>Вашето мнение е важно за нас!</h3>
            <form action={submitAction}>
                <div className="field">
                    <label htmlFor="comment">Коментар</label>
                    <textarea name="comment" id="cpmment"></textarea>
                </div>
                <input type="submit" value="Изпрати" />
            </form>
        </section>

    )
}