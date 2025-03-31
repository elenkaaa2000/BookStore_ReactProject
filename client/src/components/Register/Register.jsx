import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useRegister } from '../../api/userApi';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify'

export default function Register() {
    const { register: fetchRegister } = useRegister();
    const { UserLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
    const password = watch("password");
    
    const registerActionHandler = async ({ email, username, name, address, password }) => {  

        try {
            const authData = await fetchRegister(email, username, name, address, password)
            UserLoginHandler(authData);
            toast.success('Успешно се регистрирахте!')
            navigate('/')
        } catch (error) {

            if (error.message === 'Login or password don\'t match') {
                toast.error('Имейл или парола не съвпадат!')
            } else if (error.message === "Missing fields") {
                toast.error('Всички полета са задължителни!')
            } else if (error.message === "A user with the same email already exists") {
                toast.error('Потребител с този имейл вече съществува!')
            } else {
                toast.error(error.message)
            }
        }


    }


    return (
        <section className="section register-page">
            <div className="image">
                <img src="images/register-image.jpg" alt="" />
            </div>
            <div className="login-form-container">
                <h2>Регистрация</h2>
                <form className="login-form" action={handleSubmit(registerActionHandler)}>

                    <div className="field">
                        <label htmlFor="username">Потребителско име</label>
                        <input type="text" name="username" id="username"
                            {...register('username',
                                {
                                    required: 'Полето е задължително',
                                    minLength: {
                                        value: 5,
                                        message: 'Потребителското име трябва да бъде поне 5 символа!'
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Потребителското име трябва да бъде не повече от 20 символа!'
                                    }
                                }
                            )} />
                        {errors.username && <p className='validationError'>{errors.username.message}</p>}
                    </div>
                    <div className="field">
                        <label htmlFor="email">Имейл</label>
                        <input type="email" name="email" id="email"
                            {...register('email',
                                {
                                    required: 'Полето е задължително',
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Невалиден имейл формат!",
                                    }
                                }
                            )} />
                        {errors.email && <p className='validationError'>{errors.email.message}</p>}
                    </div>
                    <div className="field">
                        <label htmlFor="name">Име и фамилия</label>
                        <input type="text" name="name" id="name"
                            {...register('name',
                                {
                                    required: 'Полето е задължително',
                                }
                            )} />
                        {errors.name && <p className='validationError'>{errors.name.message}</p>}
                    </div>
                    <div className="field">
                        <label htmlFor="address">Адрес</label>
                        <input type="text" name="address" id="address"
                            {...register('address', {
                                required: 'Полето е задължително',
                            })} />
                        {errors.address && <p className='validationError'>{errors.address.message}</p>}
                    </div>


                    <div className="field">
                        <label htmlFor="password">Парола</label>
                        <input type="password" id="password" name="password"
                            {...register('password', {
                                required: 'Полето е задължително',
                                minLength: {
                                    value: 4,
                                    message: 'Паролата трябва да бъде поне 4 символа!'
                                }
                            })} />
                        {errors.password && <p className='validationError'>{errors.password.message}</p>}
                    </div>

                    <div className="field">
                        <label htmlFor="rePassword">Потвърдете парола</label>
                        <input type="password" name="rePassword" id="rePassword"
                            {...register('rePassword', {
                                required: 'Полето е задължително',
                                validate: (value) => value === password || "Паролите не съвпадат!",
                            })} />
                    </div>
                    {errors.rePassword && <p className="validationError">{errors.rePassword.message}</p>}
                    <input type="submit" value="Регистрация" />
                </form>
            </div>
        </section>
    )
}