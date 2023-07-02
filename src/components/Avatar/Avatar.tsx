import styles from './Avatar.module.css';

import { AvatarProps } from '../interfaces/AvatarProps';

export function Avatar({ hasBorder = true, ...props}: AvatarProps){

    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props}/>
    );
}