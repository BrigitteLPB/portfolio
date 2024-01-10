import profileImage from 'assets/profile_picture_crop.jpg';
import 'styles/components/profile_image.scss';

export default function ProfileImage() {
    return (
        <div className="profile-image">
            <img
                src={`${profileImage}?w=248&fit=crop&auto=format`}
                alt="profile"
                loading="lazy"
            />
        </div>
    );
}
