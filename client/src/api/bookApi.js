import { useEffect, useState } from "react"
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = `http://localhost:3030/data/books`

export const useFetchData = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        requester.get(baseUrl)
            .then(setBooks)
    }, []);

    return {
        books
    }
}

export const useCreateBook = () => {
    const options = useAuth();
    const create = (bookData) => {
        requester.post(baseUrl, bookData, options)
    }

    return {
        create
    }
}