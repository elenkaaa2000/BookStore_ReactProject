export default function Contacts(){
    return(
        <section className="section contacts-page">
        <section className="contact">
            <div className="contact-details">
                <h3>Свържете се с нас</h3>
                <div className="address">
                    <p><i className="fa-solid fa-location-dot"></i>гр. Разлог, ул."Иван Вазов, №15"</p>
                    <p><i className="fa-regular fa-envelope"></i>bookstore@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i>+359865487777</p>
                    <p><i className="fa-regular fa-calendar-check"></i>Работно време: от Понеделник до Петък, от
                        09:00 до 17:00 ч.</p>
                    <p><i className="fa-solid fa-calendar-xmark"></i>Почивни дни: Събота, Неделя и официални
                        празници.</p>
                </div>
            </div>
            <div className="image">
                <img src="./contact.avif" alt=""/>
            </div>
        </section>
    </section>
    )
}