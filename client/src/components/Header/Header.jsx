export default function Header(){
    return (
        <>
        <header className="section site-header">
        <div className="mini-nav">
            <div className="logo">
                <a href="#">BookStore</a>
            </div>
            <div className="search-field">
                <input type="text" name="search" id="search" placeholder="Search..."/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Влез</a></li>
                    <li><a href="#">Регистрация</a></li>
                    <li><a href="#">Излез</a></li>
                    <li><a href="#">Профил</a></li>
                </ul>
            </nav>

        </div>

        <nav className="site-nav">
            <ul>
                <li className="active"><a href="#">Начална страница</a></li>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}