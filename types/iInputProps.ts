import { ChangeEvent } from 'react';


type TInput = 'text' | 'email'

export interface IInputProps {
    placeholder: string;
    value: string;
    name: string;
    type?: TInput;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
};