import React from 'react'
import  TextareaAutosize  from '@material-ui/core/TextareaAutosize'
import  {TextareaAutosizeProps}  from '@material-ui/core/TextareaAutosize'

const TextArea: React.FC<TextareaAutosizeProps> = ({...rest}) => {
    return <TextareaAutosize {...rest} />
}
export default TextArea