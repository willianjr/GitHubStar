import React, { ReactNode } from 'react'
import * as S from './styled'

declare interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return <S.Containers>{children}</S.Containers>
}

export default Layout
