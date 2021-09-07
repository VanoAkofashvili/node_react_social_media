import React from 'react'
import IconButton  from '@material-ui/core/IconButton'
import { IconButtonProps } from '@material-ui/core'


const IconButtonComponent: React.FC<IconButtonProps> = ({...rest}) => (
    <IconButton color="default" {...rest}>
        {rest.children}
    </IconButton>
)

export default IconButtonComponent