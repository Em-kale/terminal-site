import React, {useEffect, useState, useRef} from 'react'
import {Stack, Typography, Box, ButtonBase, Fade, Link, Grid} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import DefaultTheme from '../theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@mui/styled-engine'

const Portfolio = (props) => {
    const matches = useMediaQuery('(max-width:500px)')
    const body1 = "cd portfolio"
    const body2 = "ls -1 ./projects"
    const [blink, setBlink] = useState()
    const [commandText1, setCommandText1] = useState("")
    const [commandText2, setCommandText2] = useState("")
    const [commandText3, setCommandText3] = useState("")
    const [portfolioPrefix, setPortfolioPrefix] = useState("")
    const [firstFinished, setFirstFinished] = useState(false)
    const [secondFinished, setSecondFinished] = useState(false)

    const [cursor, setCursor] = useState("|")
    const [cursor2, setCursor2] = useState("")
    const [cursor3, setCursor3] = useState("")
    const [displayContentArray, setDisplayContentArray] = useState({array: [0]})
    const [finishedRender, setFinishedRender] = useState(false)
    const bottomRef = useRef();
    const {listPortfolioClicked} = props

    const {setProject} = props

    useEffect(()=>{
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [commandText1, firstFinished, secondFinished, displayContentArray])

    useEffect(()=>{
        if(listPortfolioClicked >= 1){
        console.log("list portfolio clicked definitely")
        let tempArray = displayContentArray.array
        tempArray.push(1)
        setDisplayContentArray({...displayContentArray, array: tempArray})
    }
    }, [listPortfolioClicked])

    
    useEffect(() => {
        const timeout = setTimeout(() => {
          setCommandText1(body1.slice(0, commandText1.length + 1));
          if(body1.length == commandText1.length){
            setFirstFinished(true)
            setPortfolioPrefix(":~/portfolio$")
            setCursor("")
            setCursor2("|")
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

    useEffect(() => {
        if(firstFinished){
            const timeout = setTimeout(() => {
            setCommandText2(body2.slice(0, commandText2.length + 1));
            if(body2.length == commandText2.length){
                setSecondFinished(true)
                setCursor2("")
                setCursor3("|")
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
        }
    }, [commandText2, finishedRender, firstFinished]);

    return (
            <>
              <Grid container>
                <Grid item>
                    <Stack direction="row" justifyContent="left" alignItems="left">
                        <Typography variant="h1-prefix" fontWeight="fontWeightBold"  color="secondary">
                            :~/home$
                        </Typography>
                        <Typography variant="h1" fontWeight="fontWeightBold"  color="secondary">
                            {commandText1}
                        </Typography>
                        <Typography variant="h1" color="secondary" fontWeight="fontWeightBold" sx={{animation: `${blink} 1s steps(1) infinite`}}
                            >{cursor}
                        </Typography>
                        </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="left" alignItems="left">
                        <Typography variant="h1-prefix" fontWeight="fontWeightBold"  color="secondary">
                            {portfolioPrefix}
                        </Typography>
                        <Typography variant="h1" fontWeight="fontWeightBold"   color="secondary">
                            {commandText2}
                        </Typography>
                        <Typography variant="h1" fontWeight="fontWeightBold"   color="secondary">
                            {cursor2}
                        </Typography>
                    </Stack>
                </Grid>
                { secondFinished ?
                <> 
                    <Grid item xs={12} variant="ls-grid">
                            <Link onClick={()=>{setProject("bookstore")}}  underline="hover"><Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'bookstore web app.md'</Typography></Link>
                            <Link underline="hover"><Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'governance platform.md'</Typography></Link>
                            <Link underline="hover"><Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'python web scraper.md'</Typography></Link>
                            <Link  underline="hover"><Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'survey web app.md'</Typography></Link>
                            <Link  underline="hover"><Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'autonomous mail robot.md'</Typography></Link>
                            <Link  underline="hover">  <Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'rental car reservations.md'</Typography></Link>
                            <Link  underline="hover"> <Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'python factory simulation.md'</Typography></Link>
                            <Link underline="hover"> <Typography fontWeight="fontWeightBold"  variant='h1' color="secondary">'security suite.md'</Typography></Link>
                        </Grid>
                </>: <></>}
                <Box variant="div" ref={bottomRef}> </Box>
            </Grid>
            <Box variant="div" ref={bottomRef}> </Box>
        </>
    )
}
export default Portfolio