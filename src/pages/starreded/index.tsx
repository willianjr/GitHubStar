import React, { useEffect } from 'react'
import { GlobalStyle } from '../../assets/styles/global'
import Row from 'react-bootstrap/Row'
import { Repositories, AuthHeader, Profile } from '../../components'
import { useGitHub } from '../../contexts/githubContext'
import { useParams } from 'react-router'

import * as S from './styled'
interface ParamsProps {
    search: string
}
const PageRepositories = (): JSX.Element => {
    const { searchUser } = useGitHub()
    const { search } = useParams<ParamsProps>()
    useEffect(() => {
        console.log(search)
        search && searchUser(search)
    }, [])
    return (
        <>
            <GlobalStyle bg={1} />
            <Row className={`gx-3`}>
                <S.ColunaLateral md={3}>
                    <Profile />
                </S.ColunaLateral>
                <S.Coluna>
                    <AuthHeader />
                    <Repositories typeRepositorie="starred" />
                </S.Coluna>
            </Row>
        </>
    )
}

export default PageRepositories
