import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'

import theme from './assets/styles/theme'

import { Layout, Loading, Search, Profile } from './components'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Profile />
            </Layout>
        </ThemeProvider>
    )
}

export default App
