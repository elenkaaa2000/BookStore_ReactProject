export default function Register(){
    return (
        <section className="section register-page">  
            <div className="image">
                <img src="./register-image.jpg" alt=""/>
            </div>
            <div className="login-form-container">
                <h2>Регистрация</h2>
                <form className="login-form" action="#">

                    <div className="field">
                        <label htmlFor="text">Потребителско име</label>
                        <input type="text" name="text" id="text"/>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Имейл</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="field">
                        <label htmlFor="first-name">Име</label>
                        <input type="text" name="first-name" id="first-name"/>
                    </div>
                    <div className="field">
                        <label htmlFor="last-name">Фамилия</label>
                        <input type="text" name="last-name" id="last-name"/>
                    </div>


                    <div className="field">
                        <label htmlFor="password">Парола</label>
                        <input type="password" id="password" name="password"/>
                    </div>

                    <div className="field">
                        <label htmlFor="rePassword">Потвърдете парола</label>
                        <input type="password" name="rePassword" id="rePassword"/>
                    </div>

                    <input type="submit" value="Регистрация"/>
                </form>
            </div>
        </section>
    )
}