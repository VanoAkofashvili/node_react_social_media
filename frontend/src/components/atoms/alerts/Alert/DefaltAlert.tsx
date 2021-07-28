import { AlertProps, Alert } from '@material-ui/lab'
import React from 'react'

console.log('deafultAler')

const DefaultAlert: React.FC<AlertProps> = ({...rest}) => {
    return <Alert {...rest} />
}

export default DefaultAlert