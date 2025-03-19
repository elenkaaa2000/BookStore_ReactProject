import { useContext } from 'react'
import { Link } from 'react-router'
import { UserContext } from '../../context/UserContext'
export default function Header() {
    const { username } = useContext(UserContext)
    return (
        <>
            <header className="section site-header">
                <div className="mini-nav">
                    <div className="logo">
                        <Link to="/">BookStore</Link>
                    </div>
                    <div className="search-field">
                        <input type="text" name="search" id="search" placeholder="Search..." />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <nav>
                        <ul>
                            {!username ? (
                                <>
                                    <li><Link to="/login">Влез</Link></li>
                                    <li><Link to="/register">Регистрация</Link></li>
                                </>)
                                :
                                (<>
                                    <li><Link to="/logout">Излез</Link></li>
                                    <li><Link to="/profile">Профил</Link></li>
                                </>)}
                        </ul>
                    </nav>

                </div>

                <nav className="site-nav">
                    <ul>
                        <li className="active"><Link to="/">Начална страница</Link></li>
                        <li><Link to="/catalog">Каталог</Link></li>
                        {username && (<li><Link to="/book/create">Добави книга</Link></li>)}

                        <li><Link to="/blog">Блог</Link></li>
                        <li><Link to="/contacts">Контакти</Link></li>
                    </ul>
                </nav>
            </header >
        </>
    )
}