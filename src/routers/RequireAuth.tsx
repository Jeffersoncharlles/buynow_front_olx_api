import { Navigate, } from "react-router-dom";
import { useAuth } from "../Context/auth";

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children, ...rest }: Props) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return children
    } else {
        return <Navigate to="/signin" />
    }
}