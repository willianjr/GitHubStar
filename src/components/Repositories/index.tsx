import React, { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Repositorie } from '../index'
import * as S from './styled'

declare interface Props {
    nome: string
    link: string
}

const Repositories = (): JSX.Element => {
    return (
        <>
            <S.Retorno>Foram encontratos 12 repositórios</S.Retorno>
            <S.Containers className={`g-4`}>
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
                <Repositorie nome={`Teste`} link={`http://www.github.com/wrjrsistema`} />
            </S.Containers>
        </>
    )
}

export default Repositories
