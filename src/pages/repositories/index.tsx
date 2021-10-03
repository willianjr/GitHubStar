import React from 'react'
import { GlobalStyle } from '../../assets/styles/global'
import Row from 'react-bootstrap/Row'
import { Repositories, AuthHeader, Profile, NavGoBack } from '../../components'

import * as S from './styled'

const PageRepositories = (): JSX.Element => {
    return (
        <>
            <GlobalStyle bg={1} />
            <Row className={`gx-3`}>
                <S.ColunaLateral md={3}>
                    <Profile />
                </S.ColunaLateral>
                <S.Coluna>
                    <AuthHeader />
                    <NavGoBack />
                    <Repositories typeRepositorie="repo" />
                </S.Coluna>
            </Row>
        </>
    )
}

export default PageRepositories
