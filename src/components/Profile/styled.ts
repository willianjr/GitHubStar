import styled, { css } from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    min-height: calc(100vh - 0.5rem);
    height: calc(100% - 0px);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    align-items: flex-stretch;

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
    align-self: center;

    @media (max-width: 767px) {
        width: 60px;
    }
`
export const Avatar = styled.img`
    margin: 1rem;
    max-width: 165px;
    max-height: 165px;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.silver_clear2};
    align-self: center;

    @media (max-width: 767px) {
        width: 80px;
        height: 80px;
    }
`
export const Name = styled.h4`
    margin: 0.5rem;
    min-height: 50px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.silver_clear2};

    text-align: center;
    font-size: 1.7rem;
    line-height: 1.5rem;
    font-weight: 700;
`
export const Statistics = styled(Row)`
    margin: 0 0.5rem 0.5rem;
    padding: 0 0 0.5rem;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.silver_clear2};
    display: flex;
    align-items: stretch;
`
export const Bio = styled.p`
    margin: 0 0.5rem 0.5rem;
    padding: 0 0 0.5rem;

    border-bottom: 1px solid ${({ theme: { colors } }) => colors.silver_clear2};
    font-size: 0.8rem;
    line-height: 1.4rem;
    text-align: center;
`
const InfoCss = css`
    margin: 0.5rem;

    color: ${({ theme: { colors } }) => colors.text};
    text-align: left;
    font-size: 1rem;
    line-height: 1rem;
    word-break: break-word;
    padding-left: 25px;
    position: relative;
    font-weight: 500;
    > svg {
        margin-right: 0.5rem;
        color: ${({ theme: { colors } }) => colors.gold};
        position: absolute;
        left: 0;
    }
`
export const Info = styled.div`
    ${InfoCss}
`
export const InfoLink = styled.a`
    ${InfoCss}
    text-decoration:none;
    &:hover {
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        text-decoration: underline;
    }
`
export const Voltar = styled.button`
    width: 3rem;
    height: 3rem;
    position: absolute;
    border-radius: 5rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 0;
    border: none;
    svg {
        width: 1.5rem !important;
        height: 1.5rem !important;
    }
`
