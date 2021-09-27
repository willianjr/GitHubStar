import React from 'react'
import { useGitHub } from '../../contexts/githubContext'
import { Repositorie } from '../index'
import * as S from './styled'
import { RepositoresProps, NodesProps } from '../../services/queries'

const Repositories = (): JSX.Element => {
    const { getRepositoriesStarred } = useGitHub()
    const repositories = getRepositoriesStarred()
    const repositoriesList: NodesProps[] = repositories ? Object.values(repositories?.nodes) : []

    return (
        <>
            <S.Retorno>Foram encontratos {repositories?.totalCount} repositórios favoritados.</S.Retorno>
            <S.Containers className={`g-4`}>
                {repositoriesList.map((repositorie) => (
                    <Repositorie
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
