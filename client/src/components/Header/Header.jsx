import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import useAuth from '../../hooks/useAuth'
import { useFetchSearchData } from '../../api/bookApi';
import { toast } from 'react-toastify'
import Loader from '../Loader/Loader';

export default function Header() {
    const { isAuthenticated } = useAuth();
    const { searchBook, searchResult, loading } = useFetchSearchData();
    const [isSearched, setIsSearched] = useState(false);


    const searchAction = async (formData) => {
        const data = Object.fromEntries(formData);

        try {
            await searchBook(data.search);
            setIsSearched(true)
        } catch (error) {
            toast.error(error.message)
        }

    }

    const closeSearch = () => {
        setIsSearched(false)
    }


    return (
        <>
            <header className="section site-header">
                <div className="mini-nav">
                    <div className="logo">
                        <Link to="/">BookStore</Link>
                    </div>
                    <div className="search-field">
                        <form action={searchAction}>
                            <input type="text" name="search" id="search" placeholder="Search..." />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        {!isSearched ? null :
                            (<div className="search-result">                              
                                    {searchResult.length > 0 ? (<ul>
                                    {searchResult.map(b => (<li key={b._id}><Link to={`/book/${b._id}/details`}>{`${b.title}`}</Link></li>))}
                                </ul>) : (<p>Няма съвпадение с търсенето</p>)}
                                <button onClick={closeSearch}><i className="close fa-solid fa-xmark"></i></button>
                            </div>)
                        }

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

                                    <li><NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-user"></i></NavLink></li>
                                    <li><NavLink to="/wishlist" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-heart"></i></NavLink></li>
                                    <li><NavLink to="/shopCart" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-cart-shopping"></i></NavLink></li>

                                    <li><NavLink to="/logout" className={({ isActive }) => isActive ? "active" : ""}>Излез</NavLink></li>
                                </>)}
                        </ul>
                    </nav>

                </div>

                <nav className="site-nav">
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Начална страница</NavLink></li>
                        <li><NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>Каталог</NavLink></li>
                        {isAuthenticated && (<li><NavLink to="/book/create" className={({ isActive }) => isActive ? "active" : ""}>Добави книга</NavLink></li>)}


                        <li><NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>Контакти</NavLink></li>
                    </ul>
                </nav>
            </header >
        </>
    )
}