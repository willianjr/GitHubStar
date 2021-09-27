import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import { useGitHub } from './contexts/githubContext'

import theme from './assets/styles/theme'

import { Layout, Loading, Search, Profile } from './components'

function App(): JSX.Element {
    const { loading, user } = useGitHub()

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                {loading && <Loading />}
                {user ? <Profile /> : <Search />}
            </Layout>
        </ThemeProvider>
    )
}

export default App
