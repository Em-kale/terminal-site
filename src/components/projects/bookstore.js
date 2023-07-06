import React from 'react'
import CustomWindow from '../common/customwindow'
import {Typography} from '@mui/material'

const Bookstore = (props) => {
    let content=(
    <Typography variant="h1">
        test
    </Typography>
    )

    const header="Bookstore Web App - Problem"

    const windows = [1, 2, 3]

    return (
        <>
        <CustomWindow top={5} left= {5}
        zIndex={1000}
        header="Bookstore Web App - Problem" content={content} />
        <CustomWindow top={10} left= {15}
        zIndex={999}
        header="Bookstore Web App - Tech Stack" content={content} />
         <CustomWindow top={15} left= {25}
        zIndex={998}
        header="Bookstore Web App - Video" content={content} />
        </>
  
    )
}
export default Bookstore