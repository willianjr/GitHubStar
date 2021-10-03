import React from 'react'
import logo from '../../assets/imgs/logoGitStar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { GlobalStyle } from '../../assets/styles/global'
import { useHistory } from 'react-router-dom'

import * as S from './styled'

const Search = (): JSX.Element => {
    const history = useHistory()
    return (
        <>
            <GlobalStyle bg={0} />
            <S.Containers>
                <S.Coluna md={{ span: 5, offset: 3 }}>
                    <S.Logo src={logo} />
                    <S.Info>Página não encontrada.</S.Info>
                    <S.Buttons variant="light" onClick={() => history.goBack()}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                        Voltar
                    </S.Buttons>
                </S.Coluna>
                <S.Error404>Error 404</S.Error404>
            </S.Containers>
        </>
    )
}

export default Search
