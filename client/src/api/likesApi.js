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

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`
        })

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLikedBooks)
    }, [userId])

    return { likedBooks }
}

export const useDislikeBook = () => {
    const { options } = useAuth()
    const dislikeBook = (likeId) => {
        requester.delete(`${baseUrl}/${likeId}`, null, options)
    }
    return {dislikeBook}
}

