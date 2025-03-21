import { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { UserContext } from '../../context/UserContext'
import useAuth from '../../hooks/useAuth'
export default function Header() {
    const {isAuthenticated} = useAuth()
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
                            {!isAuthenticated ? (
                                <>
                                    <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Влез</NavLink></li>
                                    <li><NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Регистрация</NavLink></li>
                                </>)
                                :
                                (<>
                                    <li><NavLink to="/logout" className={({ isActive }) => isActive ? "active" : ""}>Излез</NavLink></li>
                                    <li><NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Профил</NavLink></li>
                                    <li><NavLink to="/wishlist" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-heart"></i></NavLink></li>
                                </>)}
                        </ul>
                    </nav>

                </div>

                <nav className="site-nav">
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Начална страница</NavLink></li>
                        <li><NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>Каталог</NavLink></li>
                        {isAuthenticated && (<li><NavLink to="/book/create" className={({ isActive }) => isActive ? "active" : ""}>Добави книга</NavLink></li>)}

                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Блог</NavLink></li>
                        <li><NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>Контакти</NavLink></li>
                    </ul>
                </nav>
            </header >
        </>
    )
}