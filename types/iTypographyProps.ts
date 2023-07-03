type TTypographySize = '12' | '13' | '16' | '18' | '26' | '28' | '40';
type TTypographyColor = 'primary-100' | 'primary-50';

export interface ITypographyProps {
    children: React.ReactNode;
    fontSize?: TTypographySize;
    color?: TTypographyColor;
    uppercase?: boolean;
    underline?: boolean;
}