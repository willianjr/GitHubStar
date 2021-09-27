import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: { Authorization: 'Bearer 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' },
})

export default api
