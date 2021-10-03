import React, { useEffect } from 'react'
import { useGitHub } from '../../contexts/githubContext'
import { Follower } from '../index'
import * as S from './styled'
import { NodesProps } from '../../services/queries'
import ScrollReveal from 'scrollreveal'

interface RepositoriesProps {
    typeRepositorie: string
}

const Repositories = ({ typeRepositorie }: RepositoriesProps): JSX.Element => {
    const { getFollowers, getFollowing } = useGitHub()
    const repositoriesList = typeRepositorie === 'followers' ? getFollowers() : getFollowing()
    const repositoriesListTitle =
        typeRepositorie === 'followers'
            ? `Retornou ${repositoriesList?.length} usuários seguidores`
            : `Retornou ${repositoriesList?.length} usuários que estão sendo seguidos`
    useEffect(() => {
        ScrollReveal().reveal('.repo-reveal', { reset: false, delay: 100, scale: 0.5, interval: 1, origin: 'left' })
    }, [])
    return (
        <>
            <S.Retorno>{repositoriesListTitle}.</S.Retorno>
            <S.Containers className={`g-4`}>
                {repositoriesList.map((follower: NodesProps) => (
                    <Follower
                        className={`repo-reveal`}
                        id={follower.id}
                        key={follower.id}
                        name={follower.name}
                        avatar={follower?.avatarUrl}
                        description={follower.description}
                        link={follower.url}
                    />
                ))}
            </S.Containers>
        </>
    )
}

export default Repositories
