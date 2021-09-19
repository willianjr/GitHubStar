import { createGlobalStyle } from "styled-components";
import {themeType} from '../styles/theme'

export const GlobalStyle = createGlobalStyle<{theme:themeType}>`

body{
	background: ${({ theme: { colors } }) => colors.background};
    height:100vh;
    
	}
`;