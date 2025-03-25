import { useEffect, useState } from "react"
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = `http://localhost:3030/data/books`;

export const useFetchData = (category) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (category == `Всички`) {
            requester.get(baseUrl)
                .then(setBooks)
        } else {
            const searchParams = new URLSearchParams({
                where: `category="${category}"`
            })
            requester.get(`${baseUrl}?${searchParams.toString()}`)
                .then(setBooks)
        }


    }, [category]);

    return {
        books,
        setBooks
    }
}

export const useCreateBook = () => {
    const { options } = useAuth();
    const create = (bookData) => {
        requester.post(baseUrl, bookData, options)
    }

    return {
        create
    }
}

export const useFetchLatestBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3
        });

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setBooks)
    }, []);
    return {
        books
    }
}

export const useFetchBookDetails = (bookId) => {
    const [book, setBook] = useState({})
    useEffect(() => {
        requester.get(`${baseUrl}/${bookId}`)
            .then(setBook)
    }, [bookId])

    return { book }
}

export const useUpdateBook = () => {
    const { options } = useAuth()
    const updateBook = (bookId, data) => {
        requester.put(`${baseUrl}/${bookId}`, { ...data, _id: bookId }, options)
    }
    return {
        updateBook
    }
}

export const useDeleteBook = () => {
    const { options } = useAuth()
    const deleteBook = (bookId) => {
        requester.delete(`${baseUrl}/${bookId}`, null, options)
    }

    return {
        deleteBook
    }
}
