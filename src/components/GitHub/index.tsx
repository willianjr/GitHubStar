import React, { memo } from 'react'
import LoginGitHub from '../../services/loginGitHub'
import { useGitHub } from '../../contexts/githubContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as S from './styled'

const ButtonAuth = (): JSX.Element => {
    const { isAutentication, signOutGit, gitHubUser } = useGitHub()
    function handleAut(): void {
        isAutentication ? signOutGit() : LoginGitHub.authWithRedirect()
    }

    return (
        <>
            <S.Auth onClick={() => handleAut()}>
                <FontAwesomeIcon icon={faGithub} />
                {isAutentication ? `Encerrar sessão` : `Entrar com GitHub`}
            </S.Auth>
            <S.Info>
                {isAutentication
                    ? `Seja bem vindo(a) ${gitHubUser?.displayName}`
                    : `Inicie uma sessão com GitHub para ter acesso
                a strelar os repositórios buscados.`}
            </S.Info>
        </>
    )
}

export default ButtonAuth
