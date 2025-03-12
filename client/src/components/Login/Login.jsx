
export default function Login(){
    return(
        <section className="section login-page">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
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