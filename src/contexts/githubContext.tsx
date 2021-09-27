import React, { createContext, useContext, useState, ReactNode } from 'react'
import api from '../services/api'
import { query, QueryProps, RepositoresProps } from '../services/queries'

interface GitHubContextData {
    loading: boolean
    search: string
    user: QueryProps | null
    notFind: boolean | null
    favoriteRepositories: string[]
    setLoading: (e: boolean) => void
    searchUser: (e: string) => void
    setTootleFavorite: (e: string) => void
    clearSearch: () => void
    getRepositories: () => RepositoresProps | undefined
    getRepositoriesStarred: () => RepositoresProps | undefined
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
    const [favoriteRepositories, setFavoriteRepositories] = useState<string[]>([])

    const setLoading = (state: boolean) => {
        setLoad(state)
    }
    const setTootleFavorite = (id: string) => {
        favoriteRepositories.includes(id)
            ? setFavoriteRepositories(favoriteRepositories.filter((item) => item != id))
            : setFavoriteRepositories((old) => [...old, id])
    }
    const searchUser = (nameSearch: string): void => {
        setSearch(nameSearch)
        setLoad(true)
        api.post('', { query: `${query(nameSearch)}` })
            .then(({ data: { data } }) => {
                if (data?.user) {
                    setUser(data?.user)
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
    const getRepositories = () => {
        return user?.repositories
    }
    const getRepositoriesStarred = () => {
        return user?.starredRepositories
    }

    return (
        <GitHubContext.Provider
            value={{
                loading,
                search,
                user,
                notFind,
                favoriteRepositories,
                setTootleFavorite,
                setLoading,
                searchUser,
                clearSearch,
                getRepositories,
                getRepositoriesStarred,
            }}>
            {children}
        </GitHubContext.Provider>
    )
}

export const useGitHub = (): GitHubContextData => {
    return useContext(GitHubContext)
}
