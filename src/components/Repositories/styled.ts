import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

export const Containers = styled(Row)``
export const Retorno = styled(Row)`
    padding: 0.5rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.dourado_semi};
`
