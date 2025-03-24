import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    username: '',
    email: '',
    name: '',
    address: '',
    accessToken: '',
    UserLoginHandler: () => null,
    UserLogoutHandler: ()=>null
})

