import React, { ReactNode } from 'react'
import * as S from './styled'

declare interface LayoutProps {
    icon: any
    number: number
}

const Layout = ({ icon, number }: LayoutProps): JSX.Element => {
    return (
        <S.Containers>
            <div>
                {icon}
                {number}
            </div>
        </S.Containers>
    )
}

export default Layout
