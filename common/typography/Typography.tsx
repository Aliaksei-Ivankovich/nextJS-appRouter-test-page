import { clsx } from 'clsx';

import type { ITypographyProps } from '@/types';

import styles from './typography.module.css';


export const Typography: React.FC<ITypographyProps> = ({
    children,
    fontSize = '16',
    color = 'primary-100',
    uppercase = false,
    underline = false
}) => {

    const clazz = `${clsx({
            [styles.text12]: fontSize === '12',
            [styles.text13]: fontSize === '13',
            [styles.text16]: fontSize === '16',
            [styles.text18]: fontSize === '18',
            [styles.text26]: fontSize === '26',
            [styles.text28]: fontSize === '28',
            [styles.text40]: fontSize === '40',

        })} ${clsx({
            [styles.primary]: color === 'primary-100',
            [styles.secondary]: color === 'primary-50',
        })} ${clsx({
            [styles.uppercase]: uppercase === true,
        })} ${clsx({
            [styles.underline]: underline === true,
        })}
    `

    return (
        <span className={clazz}>
            {children}
        </span>
    )
}