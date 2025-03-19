import { useActionState, useContext } from "react"
import { useLogin } from "../../api/userApi"
import { useNavigate } from 'react-router'
import { UserContext } from "../../context/UserContext";

export default function Login() {
    const { login } = useLogin();
    const {UserLoginHandler} = useContext(UserContext)
    const navigate = useNavigate();

    const loginActionHandler = async (_, formData) => {
        const values = Object.fromEntries(formData)
        const authData = await login(values.email, values.password);
        UserLoginHandler(authData);

        navigate('/')
    }
    const [_, loginAction, isPending] = useActionState(loginActionHandler, {
        email: '',
        password: ''
    })
    return (
        <section className="section login-page">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="login-form-container">
                <h2>Влез</h2>
                <form className="login-form" action={loginAction}>

                    <div className="field">
                        <label htmlFor="email">Имейл</label>
                        <input type="text" name="email" id="email" />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Парола</label>
                        <input type="password" id="password" name="password" />
                    </div>


                    <input type="submit" value="Влез" disabled={isPending} />
                </form>
            </div>
        </section>
    )
}