import type {TTypographySize, TTypographyColor} from '@/types'; 


export interface IPhoneProps {
    tel: string;
    size?: TTypographySize;
    color?: TTypographyColor;
}