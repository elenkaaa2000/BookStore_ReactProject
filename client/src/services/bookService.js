import requester from '../utils/requester'
const baseUrl = `http://localhost:3030/jsonstore/books`

export default {
    async getAll() {
        const result = await requester.get(baseUrl)
        return Object.values(result)
    },
    async createBook(bookData) {
        return requester.post(baseUrl, bookData)
    }
}