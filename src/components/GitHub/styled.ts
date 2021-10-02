import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const Auth = styled(Button)`
    background: ${({ theme: { colors } }) => colors.silver_clear2};
    height: 2rem;
    width: 15rem;
    padding: 1.5rem;
    margin-top: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: ${({ theme: { colors } }) => colors.black};

    &:hover,
    &:focus,
    &:active {
        background: ${({ theme: { colors } }) => colors.text};
    }

    > svg {
        width: 2rem !important;
        height: 2rem;
        margin-right: 1rem;
    }
`
export const Info = styled.p`
    font-size: 0.85em;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: solid 1px ${({ theme: { colors } }) => colors.silver_clear2};
    color: ${({ theme: { colors } }) => colors.text_input};
    text-align: center;
`
