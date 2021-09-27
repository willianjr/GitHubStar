import styled from 'styled-components'
import Col from 'react-bootstrap/Col'

export const Containers = styled(Col)`
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 0.25rem;
        background: ${({ theme: { colors } }) => colors.dourado};
        border-radius: 1rem;
        font-weight: bold;
    }
`
