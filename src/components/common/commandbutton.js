import { ThemeProvider } from '@emotion/react'
import React, {useEffect, useState} from 'react'
import DefaultTheme from '../theme/theme'
import { keyframes } from '@mui/styled-engine'
import {Typography, ButtonBase, Fade} from '@mui/material'

const CommandButton = (props) => {
    const {buttonName, activated, onClick} = props
    const [blink, setBlink] = useState() 
    const [button, setButton] = useState("")
    

    useEffect(() => {
        if(activated){
            const timeout = setTimeout(() => {
            setButton(buttonName.slice(0, button.length + 1));
            }, 150);
            
            if(button.length == buttonName.length){
                setBlink(keyframes`
                from,
                to {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }`)
            }

            return () => clearTimeout(timeout);
        }
    }, [button, buttonName, activated]);



    return (
        <>
            <Fade in={activated}>
                <ButtonBase onClick={onClick} variant="outlined-portfolio">
                        <Typography variant="button-base" color="secondary">
                            {button}
                        </Typography>
                        <Typography variant="button-base" color="secondary" sx={{animation: `${blink} 1s steps(1) infinite`}}
                            >|
                        </Typography>
                </ButtonBase>
            </Fade>
        </>
    )
}
export default CommandButton 