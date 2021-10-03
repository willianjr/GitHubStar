import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

import * as S from './styled'

const HeaderAuth = (): JSX.Element => {
    const history = useHistory()

    return (
        <>
            <S.Header>
                <S.Buttons variant="light" onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    Voltar
                </S.Buttons>
            </S.Header>
        </>
    )
}

export default memo(HeaderAuth)
