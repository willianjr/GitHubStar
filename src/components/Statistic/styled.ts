import styled from 'styled-components'
import Col from 'react-bootstrap/Col'

export const Containers = styled(Col)`
    > div a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
        word-break: break-word;
        padding: 0.25rem;
        background: ${({ theme: { colors } }) => colors.gold};
        border-radius: 1rem;
        font-weight: bold;
        line-height: 0.9rem;
        font-size: 1rem;
        text-align: center;
        letter-spacing: -1px;
        height: 100%;
        color: ${({ theme: { colors } }) => colors.black};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        > svg {
            margin: 0.1rem auto;
        }
    }
`
