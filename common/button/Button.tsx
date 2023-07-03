'use client';

import type { IButtonProps } from '@/types';

import styles from './button.module.css';


export const Button: React.FC<IButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
}