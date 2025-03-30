
import { useUserProfile } from "../../api/userApi"
import { Link,useNavigate } from 'react-router'

export default function Profile() {
    const { profile,error } = useUserProfile();

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <i className="fa-regular fa-user profile-icon"></i>
                    <h2>{profile?.name}</h2>

                </div>

                <div className="profile-details">
                    <p><i className="fas fa-envelope"></i> {profile?.email}</p>
                    <p><i className="fa-solid fa-circle-user"></i> {profile?.username}</p>
                    <p><i className="fa-solid fa-location-dot"></i> {profile?.address}</p>
                </div>

                <div className="profile-actions">
                    <button className="logout-btn"><Link to='/logout'>Излез</Link></button>
                </div>
            </div>
        </div>)
}