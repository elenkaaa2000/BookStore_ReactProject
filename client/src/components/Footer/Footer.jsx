import { Link } from 'react-router'
export default function Footer(){
    return(
        <footer className="section site-footer">
        <div className="flex">
            <section className="site-logo">
                <div className="logo">
                    <Link to="/">BookStore</Link>
                </div>
            </section>

            <div className="footer-nav">
                <ul>
                    <li><Link to="/">Начална страница</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>                    
                    <li><Link to="/contacts">Контакти</Link></li>
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