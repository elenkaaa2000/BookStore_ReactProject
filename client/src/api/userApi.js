import { useContext, useEffect, useState } from "react"
import requester from "../utils/requester"
import useAuth from "../hooks/useAuth"
import { UserContext } from "../context/UserContext"

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users/`
export const useLogin = () => {
    const login = async (email, password) => {
        return requester.post(baseUrl + 'login', { email, password })
    }

    return {
        login
    }
}

export const useRegister = () => {
    const register = async (email, username, name, address, password) => {
        return requester.post(baseUrl + 'register', { email, username, name, address, password })
    }

    return {
        register
    }
}

export const useLogout = () => {
    const { accessToken, UserLogoutHandler } = useContext(UserContext);
    if (!accessToken) {
        return
    }

    useEffect(() => {
        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        }

        requester.get(baseUrl + 'logout', null, options)
            .finally(UserLogoutHandler)
    }, [accessToken, UserLogoutHandler])

    return {
        isLoggedOut: !!accessToken
    }
}

export const useUserProfile = () => {
    const [profile, setProfile] = useState([]);
    const { options } = useAuth();
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        requester.get(baseUrl + 'me', null, options)
        .then(res=>{
            setProfile(res);
            setLoading(false)
        });
    }, []);

    return { profile,loading }
}

