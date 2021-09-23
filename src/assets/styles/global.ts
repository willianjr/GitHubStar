import { createGlobalStyle } from 'styled-components'
import { themeType } from '../styles/theme'

export const GlobalStyle = createGlobalStyle<{ theme: themeType; bg: number }>`

body{
	background: ${({ theme: { colors }, bg }) => (bg === 1 ? colors.background_dourado : colors.background)};
    min-height:100vh;

	}
`
