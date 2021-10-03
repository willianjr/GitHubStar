import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/imgs/logoGitStar.svg'
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { GlobalStyle } from '../../assets/styles/global'
import { useGitHub } from '../../contexts/githubContext'
import { GitHubAuth } from '../../components'

import * as S from './styled'

const Search = (): JSX.Element => {
    const history = useHistory()
    const [nameSearch, setNameSearch] = useState('')
    const { searchUser, notFind, isAutentication, user } = useGitHub()
    const userNotFind = (): JSX.Element => {
        return notFind ? <span>Usuário não encontrado</span> : <></>
    }
    useEffect(() => {
        user?.name && history.push('/starreded')
    }, [user])

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
                            <Form.Control
                                size="lg"
                                type="text"
                                placeholder="Digite um nome"
                                value={nameSearch}
                                onChange={(e) => setNameSearch(e.target.value)}
                            />
                            <S.Buttons
                                variant="light"
                                disabled={nameSearch === ''}
                                onClick={() => searchUser(nameSearch)}>
                                <FontAwesomeIcon icon={faSearch} />
                            </S.Buttons>
                        </S.Label>
                    </OverlayTrigger>
                    {userNotFind()}
                    <GitHubAuth />
                </S.Coluna>
            </S.Containers>
        </>
    )
}

export default Search
