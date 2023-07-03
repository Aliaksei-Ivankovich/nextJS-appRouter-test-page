'use client'

import { Typography } from '../typography/Typography';

import { usePathname } from 'next/navigation';
import Link from "next/link";

import type { INavMenuProps } from '@/types';

import style from './navMenu.module.css';


export const NavMenu: React.FC<INavMenuProps>  = ({navLinks}) => {
    const pathname = usePathname();

    return (
        <nav className={style.nav}>
            <ul className={style.menu}>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    const clazz = isActive ? `${style.item} ${style.active}` : style.item

                    return (
                    <Link
                        className={clazz}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                    )
                })}
            </ul>
        </nav>
    )
}; 