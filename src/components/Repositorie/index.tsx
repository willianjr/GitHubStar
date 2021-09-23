import React, { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStartOutline } from '@fortawesome/free-regular-svg-icons'
import * as S from './styled'

declare interface Props {
    nome: string
    link: string
}

const Repositorie = ({ nome, link }: Props): JSX.Element => {
    return (
        <S.Containers md={4} sm={6}>
            <S.Buttons variant="outline-dark">
                <FontAwesomeIcon icon={faStartOutline} />
            </S.Buttons>
            <S.Cards>
                <S.Nome>{nome}</S.Nome>
                <S.Link>
                    <FontAwesomeIcon icon={faLink} />
                    {link}
                </S.Link>
            </S.Cards>
        </S.Containers>
    )
}

export default Repositorie
