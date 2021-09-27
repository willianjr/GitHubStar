import React, { ReactNode, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled'

declare interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const [showButton, setShowButton] = useState(false)
    const scrollToTop = (): void => {
        document.documentElement.scrollTop = 0
    }
    document.addEventListener('scroll', () => {
        setShowButton(document.documentElement.scrollTop > 300 ? true : false)
    })
    return (
        <S.Containers>
            {showButton && (
                <S.GoToTop onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </S.GoToTop>
            )}

            {children}
        </S.Containers>
    )
}

export default Layout
