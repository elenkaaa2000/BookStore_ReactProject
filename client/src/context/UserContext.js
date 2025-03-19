import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    accessToken: '',
    UserLoginHandler: () => null,
    UserLogoutHandler: ()=>null
})

