import { useContext } from "react"
import { useForm } from 'react-hook-form'
import { useLogin } from "../../api/userApi"
import { useNavigate } from 'react-router'
import { UserContext } from "../../context/UserContext";
import { toast } from 'react-toastify'

export default function Login() {
    const { login } = useLogin();
    const { UserLoginHandler } = useContext(UserContext)
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode:'onChange'});
  

    const loginActionHandler = async ({ email, password }) => {

        try {
            const authData = await login(email, password);
            UserLoginHandler(authData);
            toast.success('Успешно влязохте в своя профил!')
            navigate(-1);
        } catch (error) {
            if (error.message === 'Login or password don\'t match') {
                toast.error('Имейл или парола не съвпадат!')
            }

        }
    }

    return (
        <section className="section login-page">
            <div className="image">
                <img src="/images/login.PNG" alt="" />
            </div>
            <div className="login-form-container">
                <h2>Влез</h2>
                <form className="login-form" action={handleSubmit(loginActionHandler)}>

                    <div className="field">
                        <label htmlFor="email">Имейл</label>
                        <input type="text" name="email" id="email"
                            {...register('email',
                                {
                                    required: 'Имейлът е задължителен!',
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Невалиден имейл формат!",
                                    }
                                })} />
                        {errors.email && <p className="validationError">{errors.email.message}</p>}

                    </div>

                    <div className="field">
                        <label htmlFor="password">Парола</label>
                        <input 
                        type="password" id="password" name="password"
                            {...register('password',
                                {
                                    required: 'Паролата е задължителна!',
                                    minLength: {
                                        value: 4,
                                        message: 'Паролата трябва да бъде поне 4 символа!'
                                    }
                                })} />
                        {errors.password && <p className="validationError">{errors.password.message}</p>}
                    </div>


                    <input type="submit" value="Влез" disabled={!isValid}/>
                </form>
            </div>
        </section>
    )
}