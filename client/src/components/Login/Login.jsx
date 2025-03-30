import { useActionState, useContext, useState } from "react"
import { useLogin } from "../../api/userApi"
import { useNavigate } from 'react-router'
import { UserContext } from "../../context/UserContext";
import { toast } from 'react-toastify'

export default function Login() {
    const { login } = useLogin();
    const { UserLoginHandler } = useContext(UserContext)
    const navigate = useNavigate();


    const loginActionHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);
        try {
            const authData = await login(values.email, values.password);
            UserLoginHandler(authData);
            toast.success('Успешно влязохте в своя профил!')
            navigate(-1);
        } catch (error) {
           if(error.message === 'Login or password don\'t match'){
            toast.error('Имейл или парола не съвпадат!')
           }           
            
        }
    }
    const [_, loginAction, isPending] = useActionState(loginActionHandler, {
        email: '',
        password: ''
    })

    return (
        <section className="section login-page">
            <div className="image">
                <img src="/images/login.PNG" alt="" />
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