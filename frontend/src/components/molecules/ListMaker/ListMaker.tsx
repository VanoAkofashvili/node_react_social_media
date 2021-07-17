// TODO complate this function for stories and active users

import React from 'react'

type listItem = {
    button: boolean,
    icon: any,

}
interface ListMakerProps {
    items: listItem[]
}

const ListMaker: React.FC<ListMakerProps> = (props) => {
    return (
       <div>list</div>
    )
} 

export default ListMaker