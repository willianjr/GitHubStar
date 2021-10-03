import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { useGitHub } from './contexts/githubContext'
import { Routes } from './Routes'

import theme from './assets/styles/theme'

import { Layout, Loading } from './components'

function App(): JSX.Element {
    const { loading } = useGitHub()

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Layout>
                    {loading && <Loading />}
                    <Routes />
                </Layout>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
