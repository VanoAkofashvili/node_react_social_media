import { IconButton } from '@material-ui/core'
import React from 'react'

interface IconButtonComponentProps {
    icon: any; // TODO: change
    onClick(e: React.MouseEvent<HTMLButtonElement>): void;
}

const IconButtonComponent: React.FC<IconButtonComponentProps> = (props) => (
    <IconButton color="default" onClick={props.onClick}>
        {props.icon}
    </IconButton>
)

export default IconButtonComponent