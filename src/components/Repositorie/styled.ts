import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const Containers = styled(Col)`
    position: relative;
    display: flex;
    align-items: stretch;
`
export const Cards = styled(Card)`
    background-color: ${({ theme: { colors } }) => colors.gold_semi};
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme: { colors } }) => colors.shadow_gold};
    align-items: flex-stretch;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 25px ${({ theme: { colors } }) => colors.shadow_gold};
    &:hover,
    &:focus,
    &:active {
        background-color: ${({ theme: { colors } }) => colors.gold_clear};
    }
`
export const Buttons = styled(Button)`
    position: absolute;
    z-index: 99999;
    left: 1rem;
    top: 0.2rem;
    border: none;
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 1rem;
    }
`
export const Nome = styled.h4`
    text-align: center;
    font-size: 24px;
    padding-left: 1.4rem;
`

export const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.text};
    margin: 0.2rem auto;
    word-break: break-word;
    text-align: center;
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
export const Description = styled.p`
    text-align: center;
    font-size: 11px;
    margin-bottom: 0.2rem;
`
export const Owner = styled.span``
