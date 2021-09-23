import React from 'react'
import { GlobalStyle } from '../../assets/styles/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarker,
    faLink,
    faEnvelope,
    faUserTag,
    faUsers,
    faCode,
    faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/imgs/logoGitStar.svg'
import Row from 'react-bootstrap/Row'
import { Statistic, Repositories } from '../index'

import * as S from './styled'

const Profile = () => {
    return (
        <>
            <GlobalStyle bg={1} />
            <Row className={`gx-3`}>
                <S.ColunaLateral md={3}>
                    <S.Perfil>
                        <S.Logo src={logo} />
                        <S.Avatar />
                        <S.Name>Fula de tal</S.Name>
                        <S.Statistics className={`g-1`}>
                            <Statistic number={2} icon={<FontAwesomeIcon icon={faUserTag} />} />
                            <Statistic number={1} icon={<FontAwesomeIcon icon={faUsers} />} />
                            <Statistic number={0} icon={<FontAwesomeIcon icon={faCode} />} />
                            <Statistic number={10} icon={<FontAwesomeIcon icon={faCodeBranch} />} />
                        </S.Statistics>
                        <S.Bio>
                            Engenheiro de Controle e Automação com MBA em Gestão de Projetos. Experiência em análise,
                            desenvolvimento e gestão de projetos de sistema web e automação.
                        </S.Bio>
                        <S.Local>
                            <FontAwesomeIcon icon={faMapMarker} />
                            Santana do Paraíso, MG
                        </S.Local>
                        <S.Url>
                            <FontAwesomeIcon icon={faLink} />
                            https://github.com/fulano
                        </S.Url>
                        <S.Email>
                            <FontAwesomeIcon icon={faEnvelope} />
                            fulando@email.com
                        </S.Email>
                    </S.Perfil>
                </S.ColunaLateral>
                <S.Coluna>
                    <Repositories />
                </S.Coluna>
            </Row>
        </>
    )
}

export default Profile
