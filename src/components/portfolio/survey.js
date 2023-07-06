import React, {useState, useEffect} from 'react'
import {Stack, Typography, Grid, Slide, Card, CardMedia} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from '../theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const Survey = () => {
    const [checked, setChecked] = useState(false)
    const matches = useMediaQuery('(max-width:500px)')
    
    useEffect(()=>{
        setChecked(true)
    }, [])

    return (
        <>
            <Slide direction="down" in={checked} timeout={2000} mountOnEnter unmountOnExit>
                <Stack justifyCOntent='center' alignItems='center'>
                    <Typography variant="subtitle1-portfolio">Bookstore Web App</Typography>
                </Stack>
            </Slide>
            <Slide direction="up" in={checked} timeout={2000} mountOnEnter unmountOnExit>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Stack justifyContent='center' direction="row">
                            <Stack variant="side" direction="column">
                                <Typography variant="subtitle1-content">Problem</Typography>
                                <Typography variant="body1-problem">
                                For one of my university courses I needed to build a bookstore application with search functionality for books with a
                                 variety of filters, such as author, genre etc, cart functionality, login for users, staff dashboard to add new books, 
                                 and order page to fill out order.
                                </Typography>
                            </Stack>
                            <Stack variant="divider-problem-book" direction="column">
                            </Stack>
                            <Stack variant="side" direction="column">
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                            <Stack justifyContent='center'  direction="row">
                                <Stack variant="side" direction="column">
                                <Slide direction="right" in={checked} timeout={2000} mountOnEnter unmountOnExit>
                                    <CardMedia
                                    variant="video-test"
                                    component='iframe'
                                    title='test'
                                    src='https://www.youtube.com/embed/rzAQdEdl83g'
                                    />
                                </Slide>
                                </Stack>
                                <Stack variant="divider-solution-book" direction="column">
                                </Stack>
                                <Stack variant="side" direction="column">
                                        <Typography variant="subtitle1-content">Solution<br /></Typography>
                                        <Typography variant="body1-problem">
                                        I used a PostgreSQL database to maintain information about books, users, and carts.
                                        I built the front-end of the application using React, and implemented an API in NodeJS using express to receive requests from the front-end, 
                                        and send queries to the database. Heroku and Github were used for CI/CD. 
                                        </Typography>
                                </Stack>
                            </Stack>
                    </Grid>
                </Grid>
            </Slide>
        </>
    )   
}
export default Survey