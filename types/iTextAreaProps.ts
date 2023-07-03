import { ChangeEvent } from 'react';


export interface ITextAreaProps {
    name: string;
    value: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    rows?: number;
};