import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

export const Containers = styled(Row)``

export const Coluna = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Label = styled(FloatingLabel)`
    display: flex;

    > input,
    > :placeholder-shown ~ label {
        font-size: 2rem;
        line-height: 2rem;
        color: ${({ theme: { colors } }) => colors.text_input};
    }
`
export const Buttons = styled(Button)`
    margin-left: -55px;
    margin-top: 8px;
    height: 50px;
    z-index: 9999;
    background-color: transparent;
    transition: 1s ease-in background-color;

    > :hover {
        background-color: ${({ theme: { colors } }) => colors.cinza_claro2};
    }
    > * {
        color: ${({ theme: { colors } }) => colors.dourado};
        font-size: 20px;
    }
`

export const Logo = styled.img`
    margin: 0.5rem;
    padding: 0.5rem;
    width: 245px;
`
