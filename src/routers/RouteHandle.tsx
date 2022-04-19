import { Route, Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element
    private?: boolean
}

export const RouteHandle = ({ children, ...rest }: Props) => {
    const isAuthenticated = true

    const authorized = (rest.private && !isAuthenticated) ? false : true

    return (
        <Route
            {...rest}
            children={
                authorized ? children : <Navigate to='/signin' />
            }
        />
    );
}