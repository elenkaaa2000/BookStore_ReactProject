import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth";
import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/buy'

export const useFetchShopCart = (userId) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`
        });

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setBooks)
    }, [userId])

    return { books, setBooks }
}

export const useBuyBook = () => {
    const { options } = useAuth()
    const buyBook = (bookId, title, imageUrl, price) => {
        requester.post(baseUrl, { bookId, title: title, imageUrl: imageUrl, price: price }, options)
    }

    return { buyBook }
}

export const useDeleteShopBook = () => {
    const { options } = useAuth()
    const deleteBook = async (_id) => {
        const response = await requester.delete(`${baseUrl}/${_id}`, null, options);
        return response
    }

    return{deleteBook}
}