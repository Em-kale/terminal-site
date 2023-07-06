import React, {useState, useEffect} from 'react'
import {Stack, Typography, Grid, Slide, Card, CardMedia} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from '../theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { keyframes } from '@mui/styled-engine'
import Header from '../header/header';
import { useHistory } from "react-router-dom";

const Access = (props) => {
    const matches = useMediaQuery('(max-width:500px)')
    
 
    const blink = keyframes`
    from,
    to {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }`


    useEffect(()=>{
        setTimeout(()=>{
            console.log(props.destination)
          
            window.location.href = "/" + props.destination;
        }, 2000)
    })
    return (
        <ThemeProvider theme={DefaultTheme}>
            <Stack variant="access" alignItems="center">
                <Typography sx={{animation: `${blink} 1s steps(1) infinite`}} variant="access" color="secondary">ACCESS GRANTED</Typography>
            </Stack>
        </ThemeProvider>
    )   
}
export default Access