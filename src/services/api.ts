import axios from 'axios'
const api = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: { Authorization: `Bearer ${process.env.REACT_APP_GIT_API_KEY}` },
})

export default api
