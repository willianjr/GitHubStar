export interface IRoute {
    path: string
    name: string
    exact?: boolean
    component: any
    props?: any
    auth?: boolean
    level?: number
    isLogado?: boolean
}

import Erro404 from '../pages/errors/404'
import HomePage from '../pages/home'
import RepositoriesPage from '../pages/repositories'
import StarrededPage from '../pages/starreded'
import FollowingsPage from '../pages/following'
import FollowersPage from '../pages/followers'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true,
        auth: false,
    },
    {
        path: '/repositories',
        name: 'Repositories',
        component: RepositoriesPage,
        exact: true,
        auth: false,
    },
    {
        path: '/starreded',
        name: 'Starreded',
        component: StarrededPage,
        exact: true,
        auth: false,
    },
    {
        path: '/followers',
        name: 'Followers',
        component: FollowersPage,
        exact: true,
        auth: false,
    },
    {
        path: '/followings',
        name: 'Followings',
        component: FollowingsPage,
        exact: true,
        auth: false,
    },
    {
        path: '*',
        name: 'Error',
        component: Erro404,
        exact: true,
    },
]

export default routes
