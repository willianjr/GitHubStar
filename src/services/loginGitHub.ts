import { firebase } from './firebase'
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    GithubAuthProvider,
    signOut,
} from 'firebase/auth'

//firebase initia
firebase
const auth = getAuth()
const provider = new GithubAuthProvider()
provider.addScope('githubstar')

export const authWithPopup = (): void => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken

            // The signed-in user info.
            const user = result.user

            console.log(user)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.email
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error)
            // ...
        })
}
export const authWithRedirect = (): void => {
    signInWithRedirect(auth, provider)
}
export const getIdUser = (): string | null => {
    const auth = getAuth()
    return auth.currentUser ? auth.currentUser?.providerData[0].uid : null
}

//signInWithRedirect(auth, provider)
