
import { UserContext } from "../context/UserContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({
    children
}) {

    const [authData, setAuthData] = usePersistedState('auth', {});
    const UserLoginHandler = (result) => {
        setAuthData(result)
    };

    const UserLogoutHandler = () => {
        setAuthData({})
    }

    return (
        <UserContext.Provider value={{ ...authData, UserLoginHandler, UserLogoutHandler }}>
            {children}
        </UserContext.Provider>
    )
}

