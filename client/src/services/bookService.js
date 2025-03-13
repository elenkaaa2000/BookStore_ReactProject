import requester from '../utils/requester'
const baseUrl = `http://localhost:3030/jsonstore/books`

export default {
    async getLastFive() {
        const result = await requester.get(`${baseUrl}?sort=createdAt&order=desc`);
        return Object.values(result)
    },
    async getAll() {
        const result = await requester.get(baseUrl)
        return Object.values(result)
    },
    async getOne(bookId) {
        return requester.get(`${baseUrl}/${bookId}`)
    },
    async createBook(bookData) {
        return requester.post(baseUrl, bookData)
    }
}