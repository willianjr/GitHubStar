import React from 'react'
import { GlobalStyle } from '../../assets/styles/global'
import Row from 'react-bootstrap/Row'
import { Followers, AuthHeader, Profile, NavGoBack } from '../../components'

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
                    <Followers typeRepositorie="following" />
                </S.Coluna>
            </Row>
        </>
    )
}

export default PageRepositories
