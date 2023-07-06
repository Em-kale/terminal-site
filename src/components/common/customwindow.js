import React from 'react'
import DefaultTheme, {InnerWindow, OuterWindow} from '../theme/theme';
import {Typography} from "@mui/material"
const CustomWindow = (props) => {
    let { header, content, zIndex, top, left} = props
  


    return (
        <OuterWindow justifyContent="center" sx={{zIndex: zIndex, top: top, left: left}}>
            <Typography variant="window-header" fontWeight="fontWeightBold" >{header}</Typography>
            <InnerWindow>
                {content}
            </InnerWindow>
        </OuterWindow>
    )
}
export default CustomWindow