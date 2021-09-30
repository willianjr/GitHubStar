import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import api from '../services/api'
import {
    querySearch,
    queryAddStar,
    queryRemoveStar,
    QueryProps,
    ViewerProps,
    NodesProps,
    RepositoresProps,
} from '../services/queries'

interface GitHubContextData {
    loading: boolean
    search: string
    user: QueryProps | null
    notFind: boolean | null
    favoriteRepositories: string[]
    setLoading: (e: boolean) => void
    searchUser: (e: string) => void
    setToggleFavorite: (e: string) => void
    clearSearch: () => void
    getRepositories: () => NodesProps[]
    getRepositoriesStarred: () => NodesProps[]
    getViewerRepositoriesStarred: () => NodesProps[]
}
interface GitHubContextProviderProps {
    children: ReactNode
}
export const GitHubContext = createContext({} as GitHubContextData)

export function GithubContextProvider({ children }: GitHubContextProviderProps): JSX.Element {
    const [search, setSearch] = useState('')
    const [loading, setLoad] = useState(false)
    const [notFind, setNotFind] = useState<boolean | null>(null)
    const [user, setUser] = useState<QueryProps | null>(null)
    const [viewer, setViewer] = useState<ViewerProps | null>(null)
    const [favoriteRepositories, setFavoriteRepositories] = useState<string[]>([])

    useEffect(() => {
        getViewerRepositoriesStarred().map((repositorie) => setFavoriteRepositories((old) => [...old, repositorie.id]))
    }, [viewer])

    const setLoading = (state: boolean) => {
        setLoad(state)
    }
    const setToggleFavorite = (id: string) => {
        setLoad(true)

        const queryFavorite = favoriteRepositories.includes(id) ? queryRemoveStar : queryAddStar
        console.log(favoriteRepositories, favoriteRepositories.includes(id), queryFavorite)

        api.post('', { query: `${queryFavorite('MDQ6VXNlcjY5NjUwOTY3', id)}` })
            .then(({ data }) => {
                favoriteRepositories.includes(id)
                    ? setFavoriteRepositories(favoriteRepositories.filter((item) => item != id))
                    : setFavoriteRepositories((old) => [...old, id])
            })
            .catch((error) => {
                console.log(`error=${error}`)
            })
            .finally(() => {
                setLoad(false)
            })
    }
    const searchUser = (nameSearch: string): void => {
        setSearch(nameSearch)
        setLoad(true)
        api.post('', { query: `${querySearch(nameSearch)}` })
            .then(({ data: { data } }) => {
                if (data?.user) {
                    setUser(data?.user)
                    setViewer(data?.viewer)
                    setNotFind(null)
                } else {
                    setNotFind(true)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoad(false)
            })
    }
    const clearSearch = (): void => {
        setUser(null)
    }
    const getRepositories = (): NodesProps[] => {
        return user?.repositories ? Object.values(user?.repositories.nodes) : []
    }
    const getRepositoriesStarred = (): NodesProps[] => {
        return user?.starredRepositories ? Object.values(user?.starredRepositories.nodes) : []
    }
    const getViewerRepositoriesStarred = (): NodesProps[] => {
        console.log(viewer?.starredRepositories)
        return viewer?.starredRepositories ? Object.values(viewer?.starredRepositories.nodes) : []
    }

    return (
        <GitHubContext.Provider
            value={{
                loading,
                search,
                user,
                notFind,
                favoriteRepositories,
                setToggleFavorite,
                setLoading,
                searchUser,
                clearSearch,
                getRepositories,
                getRepositoriesStarred,
                getViewerRepositoriesStarred,
            }}>
            {children}
        </GitHubContext.Provider>
    )
}

export const useGitHub = (): GitHubContextData => {
    return useContext(GitHubContext)
}
