import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: { Authorization: 'Bearer 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' },
})

export default api
