import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

export default function GuestGuard({ children }) {
    const { isAuthenticated } = useAuth()
    if (isAuthenticated) {
        return <Navigate to='/profile' />
    }

    return (
        <Outlet />
    )
}