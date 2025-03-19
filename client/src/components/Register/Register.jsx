import { useActionState, useContext } from 'react'
import {useNavigate} from 'react-router'
import { useRegister } from '../../api/userApi';
import { UserContext } from '../../context/UserContext';

export default function Register() {
    const { register } = useRegister();
    const { UserLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const registerActionHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        if (values.password !== values.rePassword) {
            console.log('Passwords missmatch!');
            return
        }

        const authData = await register(values.email, values.username, values.firstName, values.lastName, values.password)
        UserLoginHandler(authData);
        navigate('/')
    }
    const [_, registerAction, isPending] = useActionState(registerActionHandler, {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    return (
        <section className="section register-page">
            <div className="image">
                <img src="./register-image.jpg" alt="" />
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
                        <label htmlFor="firstName">Име</label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>
                    <div className="field">
                        <label htmlFor="lastName">Фамилия</label>
                        <input type="text" name="lastName" id="lastName" />
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