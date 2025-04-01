import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"
import requester from "../utils/requester"

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/comments`;

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
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const searchParams = new URLSearchParams({
            where: `bookId="${bookId}"`
        });

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(result=>{
                setComments(result)
                setLoading(false)
            })
    }, [bookId]);

    return {
        comments,
        setComments,
        loading
    }
}

