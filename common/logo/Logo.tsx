import Link from "next/link";
import { clsx } from 'clsx';

import type { ILogoProps } from "@/types";

import styles from './logo.module.css';


export const Logo: React.FC<ILogoProps> = ({size = 'large'}) => {

    const clazz = `${styles.logo} ${clsx({
        [styles.large]: size === 'large',
        [styles.small]: size === 'small',
    })}`

    return (
        <Link href='/'>
            <span className={clazz}>LOGO</span>
        </Link> 
    )
};

