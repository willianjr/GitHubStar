import { createGlobalStyle } from 'styled-components'
import { themeType } from '../styles/theme'

export const GlobalStyle = createGlobalStyle<{ theme: themeType; bg: number }>`
  *{
    font-family:${({ theme: { fonts } }) => fonts.regular}
  }
body{
	background: ${({ theme: { colors }, bg }) => (bg === 1 ? colors.background_gold : colors.background)};
    min-height:100vh;

	}
`
