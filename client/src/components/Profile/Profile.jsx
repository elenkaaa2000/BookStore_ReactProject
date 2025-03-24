//import { useState } from "react"
import { /*useEditProfile,*/useUserProfile } from "../../api/userApi"
import { Link } from 'react-router'

export default function Profile() {
    const { profile, setProfile } = useUserProfile()
    /*const [isEditMode, setEditMode] = useState(false);   
    

    const changeEditMode = () => {
        setEditMode(true)
    }

    const { editProfile } = useEditProfile()

    const formAction = async (formData) => {
        const data = Object.fromEntries(formData);

        const result = await editProfile(data);
        setProfile(result)
        setEditMode(false)
    }

    if (isEditMode) {       
        return (
            <section className="section register-page">
                <div className="image">
                    <img src="https://media.istockphoto.com/id/1469343787/photo/businessman-using-laptop-with-verification-account-blue-tick-checkmark-concept-verification.jpg?s=612x612&w=0&k=20&c=mZ050rrQ_PXbE_KOvHGW-PL7qCBKSvZ2_iibMDODyBU=" alt="" />
                </div>
                <div className="login-form-container">
                    <h2>Редактирай профил</h2>
                    <form className="login-form" action={formAction}>
                        <div className="field">
                            <label htmlFor="username">Потребителско име</label>
                            <input type="text" name="username" id="username" defaultValue={profile.username} />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Имейл</label>
                            <input type="email" name="email" id="email" defaultValue={profile.email} />
                        </div>
                        <div className="field">
                            <label htmlFor="name">Име и фамилия</label>
                            <input type="text" name="name" id="name" defaultValue={profile.name} />
                        </div>
                        <div className="field">
                            <label htmlFor="address">Адрес</label>
                            <input type="text" name="address" id="address" defaultValue={profile.address} />
                        </div>
                        <input type="submit" value="Промени" />
                    </form>
                </div>
            </section>
        )
    }*/

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <i className="fa-regular fa-user profile-icon"></i>
                    <h2>{profile.name}</h2>

                </div>

                <div className="profile-details">
                    <p><i className="fas fa-envelope"></i> {profile.email}</p>
                    <p><i className="fa-solid fa-circle-user"></i> {profile.username}</p>
                    <p><i className="fa-solid fa-location-dot"></i> {profile.address}</p>
                </div>

                <div className="profile-actions">
                    {/*<button onClick={changeEditMode} className="edit-btn">Редактирай</button>*/}
                    <button className="logout-btn"><Link to='/logout'>Излез</Link></button>
                </div>
            </div>
        </div>)
}