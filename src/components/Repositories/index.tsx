import React, { useEffect } from 'react'
import { useGitHub } from '../../contexts/githubContext'
import { Repositorie } from '../index'
import * as S from './styled'
import { NodesProps } from '../../services/queries'
import ScrollReveal from 'scrollreveal'

interface RepositoriesProps {
    typeRepositorie: string
}

const Repositories = ({ typeRepositorie }: RepositoriesProps): JSX.Element => {
    const { getRepositoriesStarred, getRepositories } = useGitHub()
    const repositoriesList = typeRepositorie === 'repo' ? getRepositories() : getRepositoriesStarred()
    const repositoriesListTitle = typeRepositorie === 'repo' ? '' : 'estrelados'
    useEffect(() => {
        ScrollReveal().reveal('.repo-reveal', { reset: false, delay: 100, scale: 0.5, interval: 1, origin: 'left' })
    }, [])
    return (
        <>
            <S.Retorno>
                Foram encontratos {repositoriesList?.length} repositórios {repositoriesListTitle}.
            </S.Retorno>
            <S.Containers className={`g-4 repo-teste`}>
                {repositoriesList.map((repositorie: NodesProps) => (
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
