import React, { ReactNode } from 'react'
import * as S from './styled'

declare interface LayoutProps {
    icon: any
    number: number
}

const Layout = ({ icon, number }: LayoutProps): JSX.Element => {
    return (
        <S.Containers md={3} sm={6} xs={3}>
            <div>
                {icon}
                {number}
            </div>
        </S.Containers>
    )
}

export default Layout
