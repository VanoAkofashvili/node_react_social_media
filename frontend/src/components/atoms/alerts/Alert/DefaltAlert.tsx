import { AlertProps, Alert } from '@material-ui/lab'
import React from 'react'

const DefaultAlert: React.FC<AlertProps> = ({...rest}) => {
    return <Alert {...rest} />
}

export default DefaultAlert