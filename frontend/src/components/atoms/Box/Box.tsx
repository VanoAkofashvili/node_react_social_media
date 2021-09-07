import React from 'react'
import  Box  from "@material-ui/core/Box";
import { BoxProps } from "@material-ui/core/Box";

const DefaultBox: React.FC<BoxProps> = ({...rest}) => {
    return <Box {...rest}></Box>
}
export default DefaultBox
