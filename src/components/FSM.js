import React, {useEffect, useState, useRef} from 'react'
import Menu from '../components/common/menu'
import PortfolioCD from '../components/portfolio/portfolioCD'
import PortfolioLS from '../components/portfolio/portfolioLS'
import Home from '../components/home/home'
import About from '../components/about/about'
import { Box, Typography} from '@mui/material'
import DefaultTheme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';

const FSM = (props) => {
    const bottomRef = useRef();
    const {setProject} = props 

    const states = {
        Home: {
            about: {component: <About/>, menu_buttons: ["cd portfolio", "cd about"], state: "about"},
            portfolio: {component: <PortfolioCD setProject={setProject}/>, menuButtons: ["ls ./projects", "cd about"], state: "portfolioCD"}
        },
        portfolioLS: {
            about: {component: <About />, menu_buttons: ["cd portfolio", "cd about"], state: "about"},
            portfolio: {component: <PortfolioLS setProject={setProject}/>, menuButtons: ["ls ./projects", "cd about"], state: "portfolioLS"}
        },
        portfolioCD: {
            about: {component: <About />, menu_buttons: ["cd portfolio", "cd about"], state: "about"},
            portfolio: {component: <PortfolioLS setProject={setProject}/>, menuButtons: ["ls ./projects", "cd about"], state: "portfolioLS"}
        },
        about: {
            about: {component: <About />, menuButtons: ["cd portfolio", "cd about"]},
            portfolio: {component: <PortfolioCD setProject={setProject}/>, menuButtons: ["cd portfolio", "cd about"], state: "about"}
        }
    }

    const [components, setComponents] = useState([<Home activateMenu={activateMenu} portfolio={portfolio} about={about}></Home>])
    const [currentState, setCurrentState] = useState(states.Home)
    const [menuButtons, setMenuButtons] = useState(["cd portfolio", "cd about"])
    const [activated, setActivated] = useState(false)

    function about(){
        addComponent(currentState.about.component)
        setMenuButtons(currentState.about.menuButtons)
        setCurrentState(currentState.about.state)
    }

    function portfolio(){
        console.log("state changed - current state: ", currentState)
        addComponent(currentState.portfolio.component)
        let temp = currentState.portfolio.menuButtons
        setMenuButtons(temp)
        setCurrentState(states[currentState.portfolio.state])
    }

    function addComponent(component){
        setComponents([...components, component])
    }

    function activateMenu(){    
        setActivated(true)
    }
     
    //before adding component, get last component, set prop value

    return(
        <>
        {components}
        <Menu menuButtons={menuButtons} about={about} portfolio={portfolio} activated={activated}/> 
        <Box ref={bottomRef}></Box>
        </>
    )

}
export default FSM