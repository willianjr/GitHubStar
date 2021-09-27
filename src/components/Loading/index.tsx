import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../../assets/imgs/loadingGit1.json'

import * as S from './styled'

const Loading = (): JSX.Element => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    }

    return (
        <S.Containers>
            <Lottie height="250px" options={defaultOptions} />
            <span>Carregando</span>
        </S.Containers>
    )
}

export default Loading
