import React, {useState, useEffect} from 'react'
import {Stack, Typography, Grid, Slide, Box, Card, CardMedia, ButtonBase} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from '../theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Image} from 'mui-image'
import search_book from '../../assets/search_book.png'

const Bookstore = () => {
    const [checked, setChecked] = useState(false)
    const [unchecked, setUnChecked] = useState(false)
    const [finished, setFinished] = useState(false)

    const matches = useMediaQuery('(max-width:500px)')
    
    useEffect(()=>{
        setChecked(true)
    }, [])

    const uncheck = () => {
        setChecked(false)
    }

    const finish = () => {
        setFinished(true)
    }

    const check = () => {
        setChecked(true)
    }

    const reverse = () => {
        setFinished(false)
    }
    return (
        <ThemeProvider theme={DefaultTheme}>
            { !finished? ( 
                <>
                <Grid container alignItems='center' justifyContent="center" spacing={2}>
                    <Slide direction="down" in={checked} out={unchecked} timeout={500}>
                    <Grid item xs={12} variant="project-title">
                        <Stack direction="column" alignItems="center">
                        <Typography variant="h1-project" color="secondary">Bookstore Web Application</Typography>
                        </Stack>
                    </Grid>
                    </Slide>
                    <Slide direction="right" in={checked} out={unchecked} timeout={500}>
                        <Grid item xs={5} variant="project-box">
                            <Stack direction="column" alignItems="center">
                            <Typography variant="h1" color="secondary">problem: </Typography>
                            <Typography variant="p" color="secondary">For one of my university courses I needed to build a bookstore application with search functionality for books with a variety of filters, such as author, genre etc, cart functionality, login for users,
                             staff dashboard to add new books, and order page to fill out orders.</Typography>
                            </Stack>
                        </Grid>
                    </Slide>
                    <Slide direction="left" in={checked} out={unchecked} timeout={500}>
                        <Grid item xs={5} variant="project-box">
                            <Stack direction="column" alignItems="center">
                            <Typography variant="h1" color="secondary">solution: </Typography>
                            <Typography variant="p" color="secondary">
                                I used a PostgreSQL database to maintain information about books, users, and carts. I built the front-end of the application using React, and implemented an API in NodeJS to receive requests from the backend, and send queries to the database. I used Heroku and Github for continuous deployment. </Typography>
                            </Stack>
                        </Grid>
                    </Slide>
                </Grid>
                <Slide direction="up" in={checked} out={unchecked} timeout={500} onExited={finish}>
                    <Stack alignItems='center'>
                        <ButtonBase variant="outlined-portfolio" onClick={uncheck} >
                        <Typography variant="button-base" color="secondary">watch video</Typography>
                        </ButtonBase>
                    </Stack>
                </Slide></>):
                <>
                <Slide direction="down" in={!checked} timeout={500} onExited={reverse}>
                    <Stack direction="column" alignItems="center" justifyContent="center">
                        <CardMedia
                                variant="video"
                                component='iframe'
                                title='test'
                                src='https://www.youtube.com/embed/rzAQdEdl83g'
                            />
                    </Stack>
                </Slide>
                <Slide direction="up" in={!checked} timeout={500} onExited={reverse}>
                    <Stack direction="column" alignItems="center" justifyContent="center">
                        <ButtonBase variant="outlined-portfolio" onClick={check} >
                        <Typography variant="button-base" color="secondary">back</Typography>
                        </ButtonBase>
                    </Stack>
                </Slide>
                </>
                }
          
        </ThemeProvider>
    )   
}
export default Bookstore