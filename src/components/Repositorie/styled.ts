import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const Containers = styled(Col)`
    position: relative;
`
export const Cards = styled(Card)`
    background-color: ${({ theme: { colors } }) => colors.dourado_semi};
    padding: 1.5rem 1rem;
    border: none;
`
export const Nome = styled.h4`
    text-align: center;
    font-size: 24px;
`
export const Buttons = styled(Button)`
    position: absolute;
    z-index: 99999;
    right: 1rem;
    top: 0.5rem;
    border: none;
`
export const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.text};
    margin: 0.5rem auto;
    &:hover {
        color: ${({ theme: { colors } }) => colors.text};
        opacity: 0.7;
        cursor: pointer;
    }
    > svg {
        color: ${({ theme: { colors } }) => colors.text};
        margin: 0.5rem 0;
    }
`
