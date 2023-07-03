'use client';

import { useState } from 'react';

import type { IInputProps } from '@/types';

import styles from './input.module.css';


export const Input: React.FC<IInputProps> = ({placeholder, type = 'text', onChange, value, name}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
    }

    return (
        <div className={styles.inputContainer}>
            <input 
                className={styles.input} 
                name={name}
                type={type} 
                placeholder={!isFocused ? placeholder : ''}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <label className={styles.placeholderLabel}>{placeholder}</label>
        </div>
    )
}