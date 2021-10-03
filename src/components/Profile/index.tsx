import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarker,
    faLink,
    faEnvelope,
    faUserTag,
    faUsers,
    faCode,
    faCodeBranch,
    faArrowCircleLeft,
    faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/imgs/logoGitStar.svg'
import { Statistic } from '../index'

import * as S from './styled'
import { useGitHub } from '../../contexts/githubContext'

const Profile = (): JSX.Element => {
    const { user, clearSearch } = useGitHub()
    const history = useHistory()

    useEffect(() => {
        !user?.name && history.push('/')
    }, [user])

    return (
        <>
            <S.Voltar onClick={() => clearSearch()} title="Voltar para uma nova pesquisa.">
                <FontAwesomeIcon icon={faArrowCircleLeft} />
            </S.Voltar>
            <S.Perfil>
                <S.Logo src={logo} />
                <S.Avatar src={user?.avatarUrl} />
                <S.Name>{user?.name}</S.Name>
                <S.Statistics className={`g-1`}>
                    <Statistic
                        legend="Ver Seguidores"
                        number={user?.followers.totalCount}
                        icon={<FontAwesomeIcon icon={faUserTag} />}
                        link={'/followers'}
                    />
                    <Statistic
                        legend="Ver Seguindo"
                        number={user?.following.totalCount}
                        icon={<FontAwesomeIcon icon={faUsers} />}
                        link={'/followings'}
                    />
                    <Statistic
                        legend="Gists"
                        number={user?.gists.totalCount}
                        icon={<FontAwesomeIcon icon={faCode} />}
                    />
                    <Statistic
                        legend="Ver Repositórios"
                        number={user?.repositories.totalCount}
                        icon={<FontAwesomeIcon icon={faCodeBranch} />}
                        link={'/repositories'}
                    />
                </S.Statistics>
                <S.Bio>{user?.bio}</S.Bio>
                {user?.location && (
                    <S.Info>
                        <FontAwesomeIcon icon={faMapMarker} />
                        {user?.location}
                    </S.Info>
                )}

                {user?.url && (
                    <S.InfoLink href={user?.url} title="Acessar o link do perfil." target="_blank">
                        <FontAwesomeIcon icon={faLink} />
                        {user?.url}
                    </S.InfoLink>
                )}

                {user?.websiteUrl && (
                    <S.InfoLink href={user?.websiteUrl} title="Acessar o website." target="_blank">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        {user?.websiteUrl}
                    </S.InfoLink>
                )}

                {user?.email && (
                    <S.InfoLink href={`mailto:${user?.email}`} title="Enviar um e-mail." target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} />
                        {user?.email}
                    </S.InfoLink>
                )}
            </S.Perfil>
        </>
    )
}

export default Profile
