import React , {useLayoutEffect, useRef, useState, useEffect}from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack, Typography} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './theme/theme';
import MobileTheme from './theme/mobiletheme'
import Survey from './portfolio/survey';
import Access from './portfolio/access'
import Matrix from './animation/matrix'
import FSM from './FSM'
import useMediaQuery from '@mui/material/useMediaQuery'
import CustomWindow from './common/customwindow';
import Bookstore from './projects/bookstore';

const MainPage = () => {
    
    const [bookstore, setBookstore] = useState(false)
    const [accessGranted, setAccessGranted] = useState(false) 
    
    let element = document.getElementById("grid");

    useLayoutEffect(() => { document.body.style.backgroundColor = 'black' 
    document.body.style.overflowX = "hidden"
    document.body.style.overflowY = "hidden"}, [])

    useEffect(()=>{}, [bookstore])

    const matches = useMediaQuery('(min-width:600px)');

    function setProject(project){
        if(project === "bookstore"){
            //not entirely sure why booleans need to be passed to a function to flip properly
            setBookstore(bookstore => !bookstore) 
            accessToggle("bookstore")
        }
        else{
            console.log("temporary log")
        }

    }

    function accessToggle(type){
        setAccessGranted(accessGranted => !accessGranted)
    }
    let content = (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<FSM setProject={(project)=>setProject(project)}/>}
            ></Route>
            <Route path="/bookstore" element={<Bookstore />}></Route>
            <Route path="/survey" element={<Survey />}></Route>
            <Route path="/access-bookstore" element={<Access destination="bookstore"/>}></Route>
        </Routes>
    </BrowserRouter>
    )

    return (
            <>{ matches ? 
            <ThemeProvider theme={DefaultTheme}>
              { accessGranted ? <accessGranted /> : <></> }
              { bookstore ? <Bookstore ></Bookstore>: <></> }
            <Stack alignItems="center" justifyContent="center" sx={{position: "absolute", height: "100vh"}}>
             <Matrix>
             </Matrix>
                {/** add type prop to CustomWindow to indicate if it is mobile or not */}
             <CustomWindow zIndex={1} header="terminal" content={content}></CustomWindow>
            </Stack>
         
        </ThemeProvider>:
        <ThemeProvider theme={MobileTheme}>
            <Stack alignItems="center"  justifyContent="center" sx={{height: "100vh"}}>
                <CustomWindow heaeder="" content={content}>
                </CustomWindow>
            </Stack>
        </ThemeProvider>
        }
        </>
    )
}
export default MainPage 