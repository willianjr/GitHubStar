import React from 'react'
import { useGitHub } from '../../contexts/githubContext'
import { Repositorie } from '../index'
import * as S from './styled'
import { RepositoresProps, NodesProps } from '../../services/queries'

const Repositories = (): JSX.Element => {
    const { getRepositoriesStarred } = useGitHub()
    const repositoriesList = getRepositoriesStarred()

    return (
        <>
            <S.Retorno>Foram encontratos {repositoriesList?.length} repositórios favoritados.</S.Retorno>
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
