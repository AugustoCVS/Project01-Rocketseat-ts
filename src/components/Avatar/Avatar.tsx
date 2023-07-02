import styles from './Avatar.module.css';

import { AvatarProps } from '../interfaces/AvatarProps';

export function Avatar({ hasBorder = true, src}: AvatarProps){

    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src}/>
    );
}