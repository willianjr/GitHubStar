import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const Header = styled.header`
    padding: 1rem;
    height: 70px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: end;
    align-items: center;
    @media (max-width: 767px) {
        margin: 1rem auto;
    }
`
export const Buttons = styled(Button)`
    margin-top: 8px;
    height: 50px;
    z-index: 9999;
    background-color: transparent;
    transition: 0.5s ease-in background-color;
    border: none;
    :hover {
        background-color: ${({ theme: { colors } }) => colors.gold_clear2};
    }
    > * {
        color: ${({ theme: { colors } }) => colors.black};
        font-size: 20px;
        margin-right: 1rem;
    }
`
