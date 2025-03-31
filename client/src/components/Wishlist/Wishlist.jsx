import { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { useFetchAllLikedBooks } from "../../api/likesApi";
import WishlistItem from "./WishlistItem/WishlistItem";
import Loader from "../Loader/Loader";


export default function Wishlist() {
    const { _id: userId } = useContext(UserContext);
    const { likedBooks, setLikedBooks, loading } = useFetchAllLikedBooks(userId);

    const editListHandler = (removeBookId) => {        
        setLikedBooks(prevBooks => prevBooks.filter(prevBooks => prevBooks._id !== removeBookId))
    }

    return (
        <section className="section site-wishlist">
            <h1>Любими книги</h1>
            <section className="featured-books">
                {loading ? (<Loader/>) :
                likedBooks.length > 0 ? likedBooks.map(b => <WishlistItem key={b._id} {...b} onEditList={editListHandler} />) : (<h2>Няма добавени любими книги</h2>)} 
                
            </section>
        </section>
    )
}