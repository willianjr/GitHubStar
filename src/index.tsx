import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GithubContextProvider } from './contexts/githubContext'

ReactDOM.render(
    <React.StrictMode>
        <GithubContextProvider>
            <App />
        </GithubContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
