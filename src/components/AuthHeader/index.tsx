import React, { memo } from 'react'
import { authWithRedirect } from '../../services/loginGitHub'
import { useGitHub } from '../../contexts/githubContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as S from './styled'

const HeaderAuth = (): JSX.Element => {
    const { isAutentication, signOutGit, gitHubUser } = useGitHub()
    function handleAut(): void {
        isAutentication ? signOutGit() : authWithRedirect()
    }

    return (
        <>
            <S.Header>
                {isAutentication && (
                    <S.Info>
                        <S.Avatar src={gitHubUser?.photoURL || ''} />
                        <S.Name>{gitHubUser?.displayName}</S.Name>
                    </S.Info>
                )}
                <S.Auth onClick={() => handleAut()}>
                    <FontAwesomeIcon icon={faGithub} />
                    {isAutentication ? `Encerrar sessão` : `Entrar com GitHub`}
                </S.Auth>
            </S.Header>
        </>
    )
}

export default memo(HeaderAuth)
