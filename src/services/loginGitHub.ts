import { firebase } from './firebase'
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GithubAuthProvider,
    UserCredential,
    getRedirectResult,
} from 'firebase/auth'

//firebase initia

export default {
    authWithRedirect: async (): Promise<never> => {
        firebase
        const auth = getAuth()
        const provider = new GithubAuthProvider()
        provider.addScope('githubstar')
        const Login = await signInWithRedirect(auth, provider)
        return Login
    },
    authWithPopup: async (): Promise<UserCredential> => {
        firebase
        const auth = getAuth()
        const provider = new GithubAuthProvider()
        provider.addScope('githubstar')
        const Login = await signInWithPopup(auth, provider)
        return Login
    },
    getAuthRedirect: async (): Promise<UserCredential | null> => {
        firebase
        const auth = getAuth()
        const provider = new GithubAuthProvider()
        provider.addScope('githubstar')
        const Login = await getRedirectResult(auth, provider)
        return Login
    },
}
