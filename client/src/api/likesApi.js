import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import requester from "../utils/requester"

const baseUrl = 'http://localhost:3030/data/likes'

export const useLikeBook = () => {
    const { options } = useAuth()
    const likeBook = (bookId, title, imageUrl, author, price) => {

        requester.post(baseUrl, { bookId, title: title, imageUrl: imageUrl, author: author, price: price }, options)
    }

    return {
        likeBook
    }
}

export const useFetchAllLikedBooks = (userId) => {
    const [likedBooks, setLikedBooks] = useState([]);
const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`
        })

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(result=>{
                setLikedBooks(result);
                setLoading(false)
            })
    }, [userId])

    return { likedBooks, setLikedBooks, loading }
}

export const useDislikeBook = () => {
    const { options } = useAuth()
    const dislikeBook = async (likeId) => {
        const response = await requester.delete(`${baseUrl}/${likeId}`, null, options);
        return response
    }
    return { dislikeBook }
}

