import styles from './Header.module.css'

import igniteLogo from '../assets/igniteLogo.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="logo da ignite"/>
            <strong>Ignite Feed</strong>
        </header>
    );
}