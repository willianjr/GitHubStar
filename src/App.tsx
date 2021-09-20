import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import theme from './assets/styles/theme'
import { GlobalStyle } from './assets/styles/global'

import { Layout, Loading, Search } from './components'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Search />
            </Layout>
        </ThemeProvider>
    )
}

export default App
