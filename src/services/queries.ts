declare interface TotalCount {
    totalCount: number
}
export declare interface NodesProps {
    id: string
    name: string
    url: string
    description: string
    owner?: OwnerProps
}
declare interface OwnerProps {
    login: string
}
export declare interface RepositoresProps {
    totalCount: number
    nodes: NodesProps
}
export declare interface QueryProps {
    name: string
    avatarUrl: string
    bio: string
    email: string
    location: string
    websiteUrl: string
    url: string
    gists: TotalCount
    followers: TotalCount
    following: TotalCount
    repositories: RepositoresProps
    starredRepositories: RepositoresProps
}
export declare interface ViewerProps {
    name: string
    starredRepositories: RepositoresProps
}
export const querySearch = (user: string): string => {
    const queryBase = `
    {
      viewer{
          name
          starredRepositories(last:100)
          {
            nodes{
              id
            }
          }
      }
      user(login: "${user}") {
          name
          avatarUrl
          bio
          email
          url
          location
          websiteUrl
          gists {
            totalCount
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories(last: 100) {
          totalCount
            nodes {
              id
              name
              url
              description
            }
          }
          starredRepositories(last: 100) {
          totalCount
          nodes{
            id
            name
            url
            description
            owner {
              login
            }
         }
        }
      }
    }
    `
    return queryBase
}
export const queryAddStar = (user: string, repositorie: string): string => {
    const queryBase = `
    mutation {
      addStar(input: { clientMutationId:"${user}" starrableId:"${repositorie}" })
      { clientMutationId
        starrable{
        id
      }
         }
    }
  `
    return queryBase
}

export const queryRemoveStar = (user: string, repositorie: string): string => {
    const queryBase = `
    mutation {
      removeStar(input: { clientMutationId:"${user}" starrableId:"${repositorie}" })
      { clientMutationId
        starrable{
        id
      }
         }
    }
  `
    return queryBase
}
