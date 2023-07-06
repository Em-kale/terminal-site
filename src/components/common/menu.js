import React, { useEffect, useState } from 'react'
import {Stack} from '@mui/material'
import CommandButton from './commandbutton'

const Menu = (props) => {
    let {activated, menuButtons, about, portfolio} = props
    const [buttons, setButtons] = useState([])


    function handleClick(button){
        if(button == "cd abnout"){
            about()
        }
        else if(button == "cd portfolio" || button == "ls ./projects"){
            portfolio()
        }
    }

    useEffect(()=>{
        let button_array = menuButtons.map((button)=>{
            return (
                <CommandButton activated={activated} buttonName={button} onClick={()=>{handleClick(button)}}/>
            )
        })

        setButtons(button_array)
    }, [menuButtons, activated])

    return (
        <Stack justifyContent="center" alignItems="center" spacing={5} direction="row" sx={{marginTop: "5%", marginBottom: "5%"}}>
           {buttons}
        </Stack>
    )
}
export default Menu