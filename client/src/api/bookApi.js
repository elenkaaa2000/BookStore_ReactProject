import { useEffect, useState } from "react"
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/books`;

export const useFetchData = (category) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (category == `Всички` || category == '') {
            requester.get(baseUrl)
                .then(result => {
                    setBooks(result)
                    setLoading(false)
                })
        } else {
            const searchParams = new URLSearchParams({
                where: `category="${category}"`
            })
            requester.get(`${baseUrl}?${searchParams.toString()}`)
                .then(result => {
                    setBooks(result)
                    setLoading(false)
                })
        }


    }, [category]);

    return {
        books,
        setBooks,
        loading
    }
}

export const useFetchSearchData = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false)

    const searchBook = async (search) => {
        if (search === "") {
            setSearchResult([]);
            return
        };
        setLoading(true)
        const searchParams = new URLSearchParams({
            where: `title LIKE "${search}"`
        });

        const response = await requester.get(`${baseUrl}?${searchParams.toString()}`)
        setSearchResult(response)
        setLoading(false)
    }
    return {
        searchBook,
        searchResult,
        loading
    }
}

export const useCreateBook = () => {
    const { options } = useAuth();
    const create = async (bookData) => {
        await requester.post(baseUrl, bookData, options)
    }

    return {
        create
    }
}

export const useFetchLatestBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3
        });

        requester.get(`${baseUrl}?${searchParams.toString()}`)
            .then(result => {
                setBooks(result);
                setLoading(false)
            })
    }, []);
    return {
        books,
        loading
    }
}

export const useFetchBookDetails = (bookId) => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        requester.get(`${baseUrl}/${bookId}`)
            .then(result => {
                setBook(result);
                setLoading(false)
            });
    }, [bookId])

    return { book, loading }
};


export const useUpdateBook = () => {
    const { options } = useAuth()
    const updateBook = async (bookId, data) => {
        await requester.put(`${baseUrl}/${bookId}`, { ...data, _id: bookId }, options);
    }
    return {
        updateBook
    }
}

export const useDeleteBook = () => {
    const { options } = useAuth()
    const deleteBook = async (bookId) => {
        try {
            await requester.delete(`${baseUrl}/${bookId}`, null, options);
        } catch (error) {
            throw new Error("Неуспешно изтриване на книгата.");
        }
    }

    return {
        deleteBook
    }
}
