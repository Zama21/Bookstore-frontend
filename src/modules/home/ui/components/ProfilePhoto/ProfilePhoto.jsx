import React from 'react';
import defaultProfile from 'shared/Img/default-profile.png';
import cls from './ProfilePhoto.module.css';

export const ProfilePhoto = ({ ...otherProps }) => {
    return <img {...otherProps} className={cls.profileImg} src={defaultProfile} alt='profile img' />;
};
