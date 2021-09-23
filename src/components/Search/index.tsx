import React from 'react'
import logo from '../../assets/imgs/logoGitStar.svg'
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { GlobalStyle } from '../../assets/styles/global'

import * as S from './styled'

const Search = () => {
    return (
        <>
            <GlobalStyle bg={0} />
            <S.Containers>
                <S.Coluna md={{ span: 5, offset: 3 }}>
                    <S.Logo src={logo} />
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="pesquisa">Digite o nome do usuário que deseja pesquisar.</Tooltip>}>
                        <S.Label controlId="floatingInput" label="Digite um Nome" className="mt-3 pb-3">
                            <Form.Control size="lg" type="text" placeholder="Digite um nome" />
                            <S.Buttons variant="light">
                                <FontAwesomeIcon icon={faSearch} />
                            </S.Buttons>
                        </S.Label>
                    </OverlayTrigger>
                </S.Coluna>
            </S.Containers>
        </>
    )
}

export default Search
