import requester from '../utils/requester'
const baseUrl = `http://localhost:3030/jsonstore/books`

export default {   
    async getAll() {
        const result = await requester.get(baseUrl)
        return Object.values(result)
    },
    async getOne(bookId) {
        return requester.get(`${baseUrl}/${bookId}`)
    },
    async createBook(bookData) {
        const {...data} = bookData
        data.createdAt = new Date().toISOString();
        data.updatedAt = new Date().toISOString();
        return requester.post(baseUrl, data)
    }
}