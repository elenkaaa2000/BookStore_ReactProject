import { useNavigate, useParams } from "react-router"
import { useFetchBookDetails, useUpdateBook } from "../../api/bookApi";
import { toast } from 'react-toastify'
import {useForm} from 'react-hook-form'

export default function BookEdit() {
    const { bookId } = useParams();
    const { book } = useFetchBookDetails(bookId);
    const { updateBook } = useUpdateBook();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    

    const formAction = async (_,formData) => {
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
            <form className="create-form" action={handleSubmit(formAction)}>

            <div className="field">
                    <label htmlFor="title">Заглавие</label>
                    <input type="text" name="title" id="title" defaultValue={book.title}
                        {...register('title', {
                            required: 'Полето е задължително!',
                            maxLength: {
                                value: 20,
                                message: 'Заглавието трябва да бъде най-много 20 символа!'
                            }
                        })} />
                    {errors.title && <p className='validationError'>{errors.title.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="author">Автор</label>
                    <input type="text" name="author" id="author" defaultValue={book.title}
                        {...register('author', {
                            required: 'Полето е задължително!',
                        })} />
                    {errors.author && <p className='validationError'>{errors.author.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="publisher">Издателство</label>
                    <input type="text" name="publisher" id="publisher" defaultValue={book.publisher}
                        {...register('publisher', {
                            required: 'Полето е задължително!',
                        })}
                    />
                    {errors.publisher && <p className='validationError'>{errors.publisher.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="published-year">Година на издаване</label>
                    <input type="number" name="published_year" id="published_year" defaultValue={book['published_year']}
                        {...register('published_year', {
                            required: 'Полето е задължително!',
                            min: {
                                value: 1700,
                                message: 'Годината на издаване трябва да е между 1700 г. и 2025 г.'
                            },
                            max: {
                                value: 2025,
                                message: 'Годината на издаване трябва да е между 1700 г. и 2025 г.'
                            }
                        })}
                    />
                    {errors['published_year'] && <p className='validationError'>{errors['published_year'].message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="isbn">ISBN</label>
                    <input type="number" name="isbn" id="isbn" defaultValue={book.isbn}
                    {...register('isbn', {
                        required: 'Полето е задължително!',
                        min: {
                            value: 1,
                            message: 'Полето трябва да бъде с положителна стойност!'
                        },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Полето трябва да съдържа само числа!"
                        }
                    })}
                    />
                    {errors.isbn && <p className='validationError'>{errors.isbn.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="categoty">Категория</label>
                    <select name="category" id="categoty" defaultValue={book.category}>
                       <option value="default">---</option>
                        <option value="Детска литература">Детска литература</option>
                        <option value="Литература за тийнейджъри">Литература за тийнейджъри</option>
                        <option value="Художествена литература">Художествена литература</option>
                        <option value="Научна литература">Научна литература</option>
                        <option value="Енциклопедии">Енциклопедии</option>
                        <option value="История и политика">История и политика</option>
                        <option value="Електронни книги">Електронни книги</option>
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="imageUrl">Корица</label>
                    <input type="text" name="imageUrl" id="imageUrl" defaultValue={book.imageUrl}
                     {...register("imageUrl", {
                        required: "Полето е задължително",
                        pattern: {
                            value: /^(https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp|svg))$/i,
                            message: "Невалиден URL за изображение"
                        }
                    })} 
                    />
                    {errors.imageUrl && <p className='validationError'>{errors.imageUrl.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="pages">Брой страници</label>
                    <input type="number" name="pages" id="pages" defaultValue={book.pages}
                    {...register('pages', {
                        required: "Полето е задължително",
                        min: {
                            value: 0,
                            message: 'Полето трябва да бъде с положителна стойност!'
                        }
                    })}
                    />
                    {errors.pages && <p className='validationError'>{errors.pages.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="language">Език</label>
                    <input type="language" name="language" id="language" defaultValue={book.language}
                    {...register('language', {
                        required:"Полето е задължително",
                    })} />
                    {errors.language && <p className='validationError'>{errors.language.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="translator">Преводач</label>
                    <input type="text" name="translator" id="translator" defaultValue={book.translator}
                    {...register('translator', {
                        required:"Полето е задължително",
                    })}
                    />
                    {errors.translator && <p className='validationError'>{errors.translator.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="price">Цена</label>
                    <input type="number" name="price" id="price" defaultValue={book.price}
                    {...register('price', {
                        required: "Полето е задължително",
                        min: {
                            value: 0,
                            message: 'Полето трябва да бъде с положителна стойност!'
                        }
                    })}
                    />
                    {errors.price && <p className='validationError'>{errors.price.message}</p>}
                </div>

                <div className="field-description">
                    <label htmlFor="description">Описание</label>
                    <textarea name="description" id="description" defaultValue={book.description}
                   {...register('description', {
                    required: "Полето е задължително",
                    minLength: {
                        value: 5,
                        message: 'Полето трябва да бъде поне 5 символа!'
                    },
                    
                })}
                    />
                    {errors.description && <p className='validationError'>{errors.description.message}</p>}
                </div>

                <input type="submit" value="Промени" disabled={!isValid}/>
            </form>

        </section>
    )
}