import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

export const Containers = styled(Row)`
    display: flex;
    background: blue;
`

export const Coluna = styled(Col)`
    border-radius: 0.5rem;
`
export const ColunaLateral = styled(Col)``
export const Perfil = styled.div`
    background: ${({ theme: { colors } }) => colors.background};
    min-height: calc(100vh - 10px);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
        min-height: auto;
        height: auto;
        padding-bottom: 1rem;
    }
`
export const Logo = styled.img`
    margin: 0.5rem;
    padding: 0.5rem;
    width: 107px;

    @media (max-width: 767px) {
        width: 60px;
    }
`
export const Avatar = styled.div`
    margin: 0.5rem;
    width: 165px;
    height: 165px;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.cinza_claro2};

    @media (max-width: 767px) {
        width: 80px;
        height: 80px;
    }
`
export const Name = styled.h4`
    margin: 0.5rem;
    width: 250px;
    height: 50px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.cinza_claro2};

    text-align: center;
    font-size: 1.7rem;
`
export const Statistics = styled(Row)`
    margin: 0 0.5rem 0.5rem;
    padding: 0 0 0.5rem;
    width: 250px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.cinza_claro2};
`
export const Bio = styled.p`
    margin: 0 0.5rem 0.5rem;
    padding: 0 0 0.5rem;
    width: 250px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.cinza_claro2};
    font-size: 0.8rem;
    text-align: center;
`
export const Local = styled.span`
    margin: 0.05rem;
    width: 250px;

    text-align: left;
    font-size: 1rem;
    > svg {
        margin-right: 0.5rem;
        color: ${({ theme: { colors } }) => colors.dourado};
    }
`
export const Url = styled.a`
    margin: 0.05rem;
    width: 250px;
    text-align: left;
    font-size: 1rem;
    color: #000;
    &:hover {
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
    > svg {
        margin-right: 0.5rem;
        color: ${({ theme: { colors } }) => colors.dourado};
    }
`
export const Email = styled.a`
    margin: 0.05rem;
    width: 250px;
    text-align: left;
    font-size: 1rem;
    color: #000;
    &:hover {
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
    > svg {
        margin-right: 0.5rem;
        color: ${({ theme: { colors } }) => colors.dourado};
    }
`
