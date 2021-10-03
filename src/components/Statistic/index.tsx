import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as S from './styled'

declare interface LayoutProps {
    icon: any
    number: number | undefined
    legend?: string
    link?: string
}

const Layout = ({ icon, number, legend, link }: LayoutProps): JSX.Element => {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-static`}>{legend}</Tooltip>}>
            <S.Containers md={3} sm={6} xs={3}>
                <div>
                    <Link to={link || ''}>
                        {icon}
                        {number}
                    </Link>
                </div>
            </S.Containers>
        </OverlayTrigger>
    )
}

export default Layout
