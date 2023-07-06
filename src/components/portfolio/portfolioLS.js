import React, {useEffect, useState, useRef} from 'react'
import {Stack, Typography, Box, ButtonBase, Fade, Link, Grid} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import DefaultTheme from '../theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@mui/styled-engine'

const PortfolioLS = (props) => {
    const matches = useMediaQuery('(max-width:500px)')
    const body1 = "ls -1 ./projects"
    const [blink, setBlink] = useState()
    const [commandText1, setCommandText1] = useState("")
    const [commandText2, setCommandText2] = useState("")
    const [firstFinished, setFirstFinished] = useState(false)
    const [secondFinished, setSecondFinished] = useState(false)
    const [prefix2, setPrefix2] = useState("")
    const [cursor, setCursor] = useState("|")
    const [cursor2, setCursor2] = useState("")
    const [displayContentArray, setDisplayContentArray] = useState({array: [0]})
    const [displayContent, setDisplayContent] = useState()
    const [portfolioBody, setPortfolioBody] = useState("")
    const [finishedRender, setFinishedRender] = useState(false)
    const bottomRef = useRef();
    const {listPortfolioClicked} = props

    const {setProject} = props
 

    useEffect(()=>{
 
           
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

    }, [commandText1, firstFinished, displayContentArray])

    useEffect(() => {
        const timeout = setTimeout(() => {
          setCommandText1(body1.slice(0, commandText1.length + 1));
          if(body1.length == commandText1.length){
            setFirstFinished(true)
            setCursor("")
            setBlink(keyframes`
            from,
            to {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }`)
            }
        }, 70);

        return () => clearTimeout(timeout);
    
    }, [commandText1, finishedRender]);


    return (
        <>
            <Grid container >
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="left" alignItems="left">
                        <Typography variant="h1-prefix"  fontWeight="fontWeightBold"  color="secondary">
                            :~/portfolio$
                        </Typography>
                        <Typography variant="h1"  fontWeight="fontWeightBold"  color="secondary">
                            {commandText1}
                        </Typography>
                        <Typography variant="h1" fontWeight="fontWeightBold"  color="secondary">
                            {cursor}
                        </Typography>
                    </Stack>
                </Grid>
                { firstFinished ?
                <> 
                    <Grid item variant="ls-grid" xs={12}>
                      
                            <Link onClick={()=>{setProject("bookstore")}} underline="hover"><Typography  fontWeight="fontWeightBold"  variant='h1' color="secondary">'bookstore web app.md'</Typography></Link>
                            <Link href="/access-governance" underline="hover"><Typography  fontWeight="fontWeightBold"  variant='h1' color="secondary">'governance platform.md'</Typography></Link>
                            <Link href="/access-scraper" underline="hover"><Typography  fontWeight="fontWeightBold"  variant='h1' color="secondary">'python web scraper.md'</Typography></Link>
                            <Link href="/access-survey" underline="hover"><Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'survey web app.md'</Typography></Link>
                            <Link href="/access-robot" underline="hover"><Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'autonomous mail robot.md'</Typography></Link>
                            <Link href="/access-reservation" underline="hover">  <Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'rental car reservations.md'</Typography></Link>
                            <Link href="/access-simulation" underline="hover"> <Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'python factory simulation.md'</Typography></Link>
                            <Link href="/access-security" underline="hover"> <Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'security suite.md'</Typography></Link>
                            
                        </Grid>
                     </>: <></>}
                     <Box variant="div" ref={bottomRef}> </Box>
            </Grid>
            <Box variant="div" ref={bottomRef}> </Box>
        </>
    )
}
export default PortfolioLS