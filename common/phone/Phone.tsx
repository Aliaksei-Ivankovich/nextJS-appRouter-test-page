import { Typography } from '../typography/Typography';

import { formatPhoneNum } from '@/utils';

import type { IPhoneProps } from "@/types";


export const Phone: React.FC<IPhoneProps> = ({tel, size = '16', color = 'primary-100'}) => {

    return (
        <a href={`tel:+${tel}`}>
            <Typography fontSize={size} color={color}>
                {formatPhoneNum(tel)}
            </Typography>
        </a>
    )
};
