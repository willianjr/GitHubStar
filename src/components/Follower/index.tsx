import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled'
import { useGitHub } from '../../contexts/githubContext'

declare interface Props {
    id: string
    name: string
    link: string
    avatar?: string
    description: string
    className?: string
}

const Repositorie = ({ id, name, link, description, className, avatar }: Props): JSX.Element => {
    return (
        <S.Containers md={4} sm={6} className={className}>
            <S.Cards>
                <S.Cards.Img variant="top" src={avatar} />
                <S.Nome>{name}</S.Nome>
                {description && <S.Description>{description}</S.Description>}

                <S.Link href={link} title="Acessar Perfil" target="_blank">
                    <FontAwesomeIcon icon={faLink} />
                    {link}
                </S.Link>
            </S.Cards>
        </S.Containers>
    )
}

export default Repositorie
