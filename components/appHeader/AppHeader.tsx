import { Logo, NavMenu } from '@/common';

import styles from './header.module.css';


export const AppHeader = () => {

    const navLinks = [
        {name: 'о бренде', href: '/about'},
        {name: 'ответственность', href: '/responsibility'},
        {name: 'где купить', href: '/buy'},
        {name: 'поддержка', href: '/support'},
        {name: 'контакты', href: '/contacts'},
        {name: 'cотрудничество', href: '/cooperation'},
    ];

    return (
       <header className={styles.header}>
            <Logo/>
            <NavMenu navLinks={navLinks}/>
       </header>
    )
};

