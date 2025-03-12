export default function Login(){
    return(
        <section className="section login-page">
            <div className="image">
                <img src="./login-imageavif.PNG" alt=""/>
            </div>
            <div className="login-form-container">
                <h2>Влез</h2>
                <form className="login-form" action="#">

                    <div className="field">
                        <label htmlFor="text">Потребителско име</label>
                        <input type="text" name="text" id="text"/>
                    </div>

                    <div className="field">
                        <label htmlFor="password">Парола</label>
                        <input type="password" id="password" name="password"/>
                    </div>


                    <input type="submit" value="Влез"/>
                </form>
            </div>
        </section>
    )
}