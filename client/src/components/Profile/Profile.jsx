import { useUserProfile } from "../../api/userApi"

export default function Profile() {
    const { profile } = useUserProfile()
    //ToDO

    return (
        <>
            <h1>Profile</h1>
            <h2>{profile.firstName}</h2>
        </>

    )
}