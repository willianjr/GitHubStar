import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const Header = styled.header`
    background: ${({ theme: { colors } }) => colors.gold_clear2};
    padding: 1rem;
    height: 70px;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px ${({ theme: { colors } }) => colors.shadow_gold};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
        margin: 1rem auto;
    }
`
export const Auth = styled(Button)`
    background: ${({ theme: { colors } }) => colors.gold_dark};
    height: 2rem;
    width: 13rem;
    padding: 1.5rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: ${({ theme: { colors } }) => colors.text};
    font-weight: normal;

    &:hover,
    &:focus,
    &:active {
        background: ${({ theme: { colors } }) => colors.silver_dark2};
    }

    > svg {
        width: 2rem !important;
        height: 2rem;
        margin-right: 0.5rem;
    }
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Avatar = styled.img`
    max-width: 55px;
    max-height: 55px;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.gold_dark};
    align-self: center;
    border: 1px solid ${({ theme: { colors } }) => colors.gold_dark};
    @media (max-width: 767px) {
        width: 80px;
        height: 80px;
    }
`
export const Name = styled.h4`
    margin: 0 0 0 1rem;

    text-align: left;
    font-size: 0.9rem;
    line-height: 1rem;
    color: ${({ theme: { colors } }) => colors.text};
    font-weight: normal;
`
