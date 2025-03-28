import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"
import requester from "../utils/requester"

const baseUrl = `http://localhost:3030/data/comments`;

export const useCreateComment = () => {
    const { options } = useAuth()
    const createComment = async (bookId, data, name) => {
       
        const result = await requester.post(baseUrl, { ...data, bookId, name}, options);
        return result
    }

    return {
        createComment
    }
}

export const useFetchBookComments = (bookId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `bookId="${bookId}"`
        });

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setComments)
    }, [bookId]);

    return {
        comments,
        setComments
    }
}

