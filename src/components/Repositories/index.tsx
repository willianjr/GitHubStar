import React, { useEffect } from 'react'
import { useGitHub } from '../../contexts/githubContext'
import { Repositorie } from '../index'
import * as S from './styled'
import { RepositoresProps, NodesProps } from '../../services/queries'
import ScrollReveal from 'scrollreveal'

const Repositories = (): JSX.Element => {
    const { getRepositoriesStarred } = useGitHub()
    const repositoriesList = getRepositoriesStarred()
    ScrollReveal().reveal('.repo-reveal', { reset: false, delay: 100, scale: 0.5 })
    return (
        <>
            <S.Retorno>Foram encontratos {repositoriesList?.length} repositórios favoritados.</S.Retorno>
            <S.Containers className={`g-4 repo-teste`}>
                {repositoriesList.map((repositorie) => (
                    <Repositorie
                        className={`repo-reveal`}
                        id={repositorie.id}
                        key={repositorie.id}
                        name={repositorie.name}
                        description={repositorie.description}
                        link={repositorie.url}
                        owner={repositorie.owner?.login}
                    />
                ))}
            </S.Containers>
        </>
    )
}

export default Repositories
