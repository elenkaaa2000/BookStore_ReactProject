import { useContext, useEffect, useState } from "react"
import requester from "../utils/requester"
import useAuth from "../hooks/useAuth"
import { UserContext } from "../context/UserContext"

const baseUrl = `http://localhost:3030/users/`
export const useLogin = () => {
    const login = async (email, password) => {
        return requester.post(baseUrl + 'login', { email, password })
    }

    return {
        login
    }
}

export const useRegister = () => {
    const register = async (email, username, firstName, lastName, password) => {
        return requester.post(baseUrl + 'register', { email, username, firstName, lastName, password })
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
            .then(UserLogoutHandler)
    }, [accessToken, UserLogoutHandler])

    return {
        isLoggedOut: !!accessToken
    }
}

export const useUserProfile = () => {
    const [profile, setProfile] = useState([]);
    const { options } = useAuth()

    useEffect(() => {
        requester.get(baseUrl + 'me', null, options)
            .then(setProfile)
    }, []);

    return { profile }
}