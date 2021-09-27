import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStartOutline } from '@fortawesome/free-regular-svg-icons'
import * as S from './styled'
import { useGitHub } from '../../contexts/githubContext'

declare interface Props {
    id: string
    name: string
    link: string
    description: string
    owner?: string
}

const Repositorie = ({ id, name, link, description, owner }: Props): JSX.Element => {
    const { setTootleFavorite, favoriteRepositories } = useGitHub()

    return (
        <S.Containers md={4} sm={6}>
            <S.Buttons variant="outline-dark" onClick={() => setTootleFavorite(id)}>
                <FontAwesomeIcon icon={favoriteRepositories.includes(id) ? faStar : faStartOutline} />
            </S.Buttons>
            <S.Cards>
                <S.Nome>{name}</S.Nome>
                {description && (
                    <S.Description>
                        {description}
                        {owner && <S.Owner>{owner}</S.Owner>}
                    </S.Description>
                )}

                <S.Link href={link} title="Acessar projeto" target="_blank">
                    <FontAwesomeIcon icon={faLink} />
                    {link}
                </S.Link>
            </S.Cards>
        </S.Containers>
    )
}

export default Repositorie
