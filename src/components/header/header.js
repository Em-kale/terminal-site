import React from 'react'
import { AppBar, IconButton, Toolbar, Button, Box, Typography, Link} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import DefaultTheme from '../theme/theme'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import useMediaQuery from '@mui/material/useMediaQuery';



const Header = () => {
    const matches = useMediaQuery('(max-width:500px)')

    return (
        <ThemeProvider theme={DefaultTheme}>
            {!matches ?
            <AppBar position="static">
                <Toolbar>
                    <Box display='flex' flexGrow={0.45}>
                        <Link href="/">
                            <Typography variant="subtitle1">EMMITT  LUHNING</Typography>
                        </Link>
                    </Box>
                    <Box display='flex' flexGrow={0.55}>
                        <Button href="/portfolio" color="secondary">Portfolio</Button>
                        <Button href="/about" color="secondary">About</Button>
                        <Button href="/contact" color="secondary">Contact</Button>
                    </Box>
                    <IconButton href="https://github.com/Em-kale">
                        <GitHubIcon size="medium" color="secondary">
                        </GitHubIcon>
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/emmitt-luhning-245919233/"    >
                        <LinkedInIcon  color="secondary" size="large">
                        </LinkedInIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>:
            <AppBar position="static">
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Typography variant="subtitle2">EMMITT LUHNING</Typography>
                    </Box>
                    <Box display='flex'>
                        <Button href="/portfolio" color="secondary">Portfolio</Button>
                        <Button href="/about" color="secondary">About</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        }
        </ThemeProvider>
    )
}
export default Header