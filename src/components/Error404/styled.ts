import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const Containers = styled(Row)``

export const Coluna = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

export const Buttons = styled(Button)`
    margin-top: 8px;
    height: 50px;
    z-index: 9999;
    background-color: transparent;
    transition: 1s ease-in background-color;

    > :hover {
        background-color: ${({ theme: { colors } }) => colors.silver_clear2};
    }
    > * {
        color: ${({ theme: { colors } }) => colors.black};
        font-size: 20px;
        margin-right: 1rem;
    }
`

export const Logo = styled.img`
    margin: 0.5rem;
    padding: 0.5rem;
    width: 245px;
`
export const Error404 = styled.h1`
    font-size: 10rem;
    position: fixed;
    left: 0;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -1px;
    z-index: 1;
    color: ${({ theme: { colors } }) => colors.silver_clear};
`
export const Info = styled.p`
    font-size: 2rem;
    letter-spacing: -1px;
    color: ${({ theme: { colors } }) => colors.silver_dark};
    font-weight: 600;
`
