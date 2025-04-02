import { useEffect, useId, useState } from "react"
import useAuth from "../hooks/useAuth";
import requester from "../utils/requester";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/buy`

export const useFetchShopCart = (userId) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        setLoading(true)
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`
        });

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(res => {
                setBooks(res);
                setLoading(false)
            })
    }, [userId])

    return { books, setBooks, loading }
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

    return { deleteBook }
}

export const useDeleteAllShopBooks = () => {
    const { options } = useAuth()
    const deleteAllBooks = async (books) => {
        await Promise.all(books.map(book => {
            requester.delete(`${baseUrl}/${book._id}`, null, options)
        }))
    }

    return { deleteAllBooks }
}
