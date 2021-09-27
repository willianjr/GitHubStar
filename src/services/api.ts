import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: { Authorization: 'Bearer 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' },
})

export default api
