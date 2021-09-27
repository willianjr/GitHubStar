import axios from 'axios'
console.log(process.env.REACT_APP_GIT_API_KEY)
const api = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: { Authorization: `Bearer ${process.env.REACT_APP_GIT_API_KEY}` },
})

export default api
