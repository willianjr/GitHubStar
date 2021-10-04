import { getAuth, getRedirectResult, GithubAuthProvider, signOut, User } from 'firebase/auth'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import api from '../services/api'
import { firebase } from '../services/firebase'
import { querySearch, queryAddStar, queryRemoveStar, QueryProps, ViewerProps, NodesProps } from '../services/queries'

interface GitHubContextData {
    loading: boolean
    search: string
    user: QueryProps | null
    notFind: boolean | null
    favoriteRepositories: string[]
    isAutentication: boolean
    gitHubUser: User | undefined
    setLoading: (e: boolean) => void
    searchUser: (e: string) => void
    setToggleFavorite: (e: string) => void
    clearSearch: () => void
    getRepositories: () => NodesProps[]
    getRepositoriesStarred: () => NodesProps[]
    getViewerRepositoriesStarred: () => NodesProps[]
    getFollowers: () => NodesProps[]
    getFollowing: () => NodesProps[]
    signOutGit: () => void
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
    const [isAutentication, setAutentication] = useState<boolean>(false)
    const [gitHubUser, setGitHubUser] = useState<User>()

    useEffect(() => {
        getGitAuth()
    }, [])
    useEffect(() => {
        getViewerRepositoriesStarred().map((repositorie) => setFavoriteRepositories((old) => [...old, repositorie.id]))
    }, [viewer])
    useEffect(() => {
        //console.log('auth', gitHubUser)
        setAutentication(gitHubUser?.uid ? true : false)
    }, [gitHubUser])

    const setLoading = (state: boolean): void => {
        setLoad(state)
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
    const getFollowers = (): NodesProps[] => {
        return user?.followers ? Object.values(user?.followers.nodes) : []
    }
    const getFollowing = (): NodesProps[] => {
        return user?.followers ? Object.values(user?.following.nodes) : []
    }
    const getRepositoriesStarred = (): NodesProps[] => {
        return user?.starredRepositories ? Object.values(user?.starredRepositories.nodes) : []
    }
    const getViewerRepositoriesStarred = (): NodesProps[] => {
        //console.log(viewer?.starredRepositories)
        return viewer?.starredRepositories ? Object.values(viewer?.starredRepositories.nodes) : []
    }
    const setToggleFavorite = (id: string) => {
        const queryFavorite = favoriteRepositories.includes(id) ? queryRemoveStar : queryAddStar

        if (gitHubUser) {
            const gitHubUserId = gitHubUser?.providerData[0].uid || ''
            setLoad(true)
            api.post('', { query: `${queryFavorite(gitHubUserId, id)}` })
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
    }

    async function getGitAuthAsync() {
        const auth = await getAuth()
        const result = await getRedirectResult(auth)
        if (result) {
            //console.log('user', result)
            setGitHubUser(result?.user)
            setAutentication(result?.user.uid ? true : false)
        }
        //console.log('USSS', user)
    }
    const getGitAuth = (): void => {
        setLoad(true)
        getGitAuthAsync()
        const auth = getAuth()
        //console.log(auth)
        auth.onAuthStateChanged((user) => {
            //console.log('change', user)
            if (user) {
                //console.log('user', user)
                setGitHubUser(user)
                setAutentication(user?.uid ? true : false)
                setLoad(false)
            }
            if (!isAutentication) {
                //console.log('redirect', auth)
                getRedirectResult(auth)
                    .then((result) => {
                        //console.log(result)
                        //console.log(result?.user)
                        setGitHubUser(result?.user)
                    })
                    .catch((error) => {
                        console.log('Error:', error)
                        // Handle Errors here.
                        const errorCode = error.code
                        const errorMessage = error.message
                        // The email of the user's account used.
                        const email = error.email
                        // The AuthCredential type that was used.
                        const credential = GithubAuthProvider.credentialFromError(error)
                        // ...
                    })
                    .finally(() => setLoad(false))
            }
        })
    }
    const signOutGit = (): void => {
        signOut(getAuth()).then(() => setAutentication(false))
    }

    const gitHubContextData: GitHubContextData = {
        loading,
        search,
        user,
        notFind,
        favoriteRepositories,
        isAutentication,
        gitHubUser,
        setToggleFavorite,
        setLoading,
        searchUser,
        clearSearch,
        getRepositories,
        getRepositoriesStarred,
        getViewerRepositoriesStarred,
        getFollowers,
        getFollowing,
        signOutGit,
    }
    return <GitHubContext.Provider value={gitHubContextData}>{children}</GitHubContext.Provider>
}

export const useGitHub = (): GitHubContextData => {
    return useContext(GitHubContext)
}
