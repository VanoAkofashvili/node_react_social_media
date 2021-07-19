import { Avatar, ListItemAvatar } from '@material-ui/core'
import React from 'react'

interface ListItemAvatarProps {
    src: any
    alt: string
}

const ListItemAvatarComponent: React.FC<ListItemAvatarProps> = (props) => (
    <ListItemAvatar>
        <Avatar alt={props.alt} src={props.src} />
    </ListItemAvatar>    
)

export default ListItemAvatarComponent