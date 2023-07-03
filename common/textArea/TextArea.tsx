'use client';


import type { ITextAreaProps } from '@/types';

import styles from './textArea.module.css';


export const TextArea: React.FC<ITextAreaProps> = ({placeholder, rows = 6, name, value, onChange}) => {

    return (
        <div className={styles.areaContainer}>
            <textarea 
                name={name}
                className={styles.area} 
                rows={rows}
                onChange={onChange}
                value={value}
            />   
            <label className={styles.placeholderLabel}>{placeholder}</label>
        </div>

    )
};