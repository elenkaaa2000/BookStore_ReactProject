import { Link } from 'react-router'
export default function FinalizeShop() {
    return (
        <>
            <h1>Благодарим Ви за направената поръчка!</h1>
            <h3>Продължете с пазаруването <i className="fa-solid fa-arrow-right"></i> <Link to="/catalog">Каталог</Link></h3>
        </>
    )
}