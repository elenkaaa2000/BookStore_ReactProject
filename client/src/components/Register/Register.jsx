import { useActionState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { useRegister } from '../../api/userApi';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify'

export default function Register() {
    const { register } = useRegister();
    const { UserLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const registerActionHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        if (values.password !== values.rePassword) {
            toast.error('Паролите не съвпадат!')
            return
        }

        try {
            const authData = await register(values.email, values.username, values.name, values.address, values.password)
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
            }else{
                toast.error(error.message)
            }
        }
    }
    const [_, registerAction, isPending] = useActionState(registerActionHandler, {
        username: '',
        email: '',
        name: '',
        adress: '',
        password: ''
    });

    return (
        <section className="section register-page">
            <div className="image">
                <img src="images/register-image.jpg" alt="" />
            </div>
            <div className="login-form-container">
                <h2>Регистрация</h2>
                <form className="login-form" action={registerAction}>

                    <div className="field">
                        <label htmlFor="username">Потребителско име</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Имейл</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Име и фамилия</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="address">Адрес</label>
                        <input type="text" name="address" id="address" />
                    </div>


                    <div className="field">
                        <label htmlFor="password">Парола</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div className="field">
                        <label htmlFor="rePassword">Потвърдете парола</label>
                        <input type="password" name="rePassword" id="rePassword" />
                    </div>

                    <input type="submit" value="Регистрация" />
                </form>
            </div>
        </section>
    )
}