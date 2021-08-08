import  Alert  from '@material-ui/lab/Alert'
import { AlertProps } from '@material-ui/lab/Alert/'

import React from 'react'

const DefaultAlert: React.FC<AlertProps> = ({...rest}) => {
    return <Alert {...rest} />
}

export default DefaultAlert