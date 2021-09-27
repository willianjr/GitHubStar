import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export const Containers = styled(Container)`
    padding: 0.5rem;
`

export const GoToTop = styled.button`
    background: ${({ theme: { colors } }) => colors.background_dourado};
    width: 4rem;
    height: 4rem;
    padding: 0.5rem;
    border-radius: 50%;

    border: none;
    position: fixed;
    right: 0;
    top: 95vh;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999999;

    svg {
        width: 1.5rem !important;
        height: 1.5rem !important;
    }
`
