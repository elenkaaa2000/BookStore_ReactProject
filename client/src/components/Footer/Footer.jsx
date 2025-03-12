export default function Footer(){
    return(
        <footer className="section site-footer">
        <div className="flex">
            <section className="site-logo">
                <div className="logo">
                    <a href="#">BookStore</a>
                </div>
            </section>

            <div className="footer-nav">
                <ul>
                    <li><a href="#">Начална страница</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакти</a></li>
                </ul>
            </div>

            <div className="social-media-links">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>

            </div>

        </div>

        <p>Copyright 2025. All Rights Reserved</p>

    </footer>
    )
}