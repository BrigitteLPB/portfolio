import profileImage from 'assets/profile_picture_crop.jpg';

export default function ProfileImage({ size, removeSpace, left }) {
    const imageSize = size || 50;

    const div_style = {
        overflow: 'hidden',
        width: `${removeSpace ? imageSize * 1.4 : imageSize}px`,
        height: `${imageSize}px`,
        position: 'relative',
    };

    const image_style = {
        borderRadius: '50%',
        with: removeSpace ? '140%' : '100%',
        height: removeSpace ? '140%' : '100%',
        position: 'absolute',
        top: removeSpace ? '-20%' : '0',
        transform: `scaleX(${left ? -1 : 1})`,
    };

    return (
        <div style={div_style}>
            <img src={profileImage} style={image_style} />
        </div>
    );
}
