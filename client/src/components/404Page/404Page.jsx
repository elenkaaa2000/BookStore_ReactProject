import { Link } from 'react-router'
export default function ErrorPage() {
    return (
        <>
            <h1 className='text'>Страницата не е намерена!</h1>
            <button className='btn'><Link to={'/'}>Начална страница</Link></button>
        </>

    )
}