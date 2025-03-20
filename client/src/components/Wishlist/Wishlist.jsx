import { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { useFetchAllLikedBooks } from "../../api/likesApi";
import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";
import WishlistItem from "./WishlistItem/WishlistItem";


export default function Wishlist() {
    const { _id: userId } = useContext(UserContext);
    const { likedBooks } = useFetchAllLikedBooks(userId);


    return (
        <section className="section site-wishlist">
            <h1>Любими книги</h1>
            <section className="featured-books">
                {likedBooks.length > 0 ? likedBooks.map(b => <WishlistItem key={b._id} {...b} />) : (<h1>Ne</h1>)}

            </section>
        </section>
    )
}