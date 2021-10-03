import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import routes from './config/routes'

export const Routes = (props: any): JSX.Element => {
    return (
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props: RouteComponentProps<any>) => (
                            <route.component name={route.name} {...props} {...route.props} />
                        )}
                    />
                )
            })}
        </Switch>
    )
}
