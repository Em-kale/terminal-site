import React, {useEffect, useState, useRef} from 'react'
import {Avatar, Box, Typography, ButtonBase, Stack, Fade} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from '../theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { keyframes } from '@mui/styled-engine'
import Menu from '../common/menu'
import Portfolio from '../portfolio/portfolioCD'
const Home = (props) => {
    const matches = useMediaQuery('(max-width:500px)')
    const body1 = "hi, i'm emmitt. welcome to my website."
    const body2 = "check out my portfolio, or learn more about me :-)"
    const body3 = ""
    
    const [bodyText1, setBodyText1] = useState("")
    const [bodyText2, setBodyText2] = useState("")
    const [bodyText3, setBodyText3] = useState("")
    const [blink, setBlink] = useState() 
    const [firstFinished, setFirstFinished] = useState(false) 
    const [secondFinished, setSecondFinished] = useState(false) 
    const [cursor, setCursor] = useState("|")
    const [cursor2, setCursor2] = useState("")
    const [prefix2, setPrefix2] = useState("")
    const [prefix3, setPrefix3] = useState("")
    const [fade, setFade] = useState(false)
    const [currentDirectory, setCurrentDirectory] = useState("home")
    const [cursor3, setCursor3] = useState("")

    const {activateMenu} = props


    useEffect(() => {
        const timeout = setTimeout(() => {
          setBodyText1(body1.slice(0, bodyText1.length + 1));
          if(body1.length == bodyText1.length){
            setFirstFinished(true)
            setCursor("")
          }
        }, 70);
    
        return () => clearTimeout(timeout);
      }, [bodyText1]);
    
    useEffect(() => {
        if(firstFinished){
        setCursor2("|")
        setPrefix2(":~/home$")

        const timeout = setTimeout(() => {
          setBodyText2(body2.slice(0, bodyText2.length + 1));
        }, 70);
        
        if(body2.length == bodyText2.length){
            setFade(true)
            setSecondFinished(true)
            activateMenu() 
            setCursor2("")
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
      }, [bodyText2, firstFinished]);

    useEffect(() => {
        if(secondFinished){
            setCursor3("|")
            setPrefix3(":~/home$")
                const timeout = setTimeout(() => {
                setBodyText3(body3.slice(0, bodyText3.length + 1));
                }, 70);
                
                if(body3.length == bodyText3.length){
                    setFade(true)
                    activateMenu() 
                    setCurrentDirectory("portfolio")
                }
            return () => clearTimeout(timeout);
            
        }
      }, [bodyText3, secondFinished]);

    return( 
    < >
    <Box >
    <Stack direction="row" justifyContent="left" alignItems="left">
        <Typography variant="h1-prefix" color="secondary" fontWeight="fontWeightBold" >
            :~/home$</Typography>
        <Typography variant="h1" color="secondary" fontWeight="fontWeightBold" 
        >{bodyText1}{cursor}</Typography>
            {/* <Typography variant="h1" color="secondary"
        >{cursor}</Typography> */}
        </Stack>
            <Stack direction="row" justifyContent="left" alignItems="left">
                <Typography variant="h1-prefix" color="secondary" fontWeight="fontWeightBold" >
                    {prefix2}
                </Typography>
                <Typography variant="h1" color="secondary" fontWeight="fontWeightBold" >
                    {bodyText2}{cursor2}
                </Typography>
               
        </Stack>
        </Box>
        
    </>
    )
}
export default Home