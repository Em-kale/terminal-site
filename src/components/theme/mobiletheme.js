import React from 'react'
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const MobileTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",

        },
        secondary: {
            main: "#20C20E",
        },
    },
    components: {
        MuiStack: {
            variants: [
                {
                    props: {variant: "ls"},
                    style: {marginTop: "20px", marginBottom: "20px"}
                },
                {
                    props: {variant: "ls-column"},
                    style: {marginRight: "30px"}
                }, 
                {
                    props: {variant: "access"}, 
                    style: {marginTop: "15%"}
                }
            ]
        },
        MuiGrid:{
            variants: [{
                props: {variant: "project-box"},
                style: {borderStyle: "solid", borderColor: "#20C20E", borderWidth: "2px",
                 boxShadow: "1px 1px 3px #2cdf18", margin: "10px"}
            },
            {
                props: {variant: "project-title"},
                style: {marginTop: "20px"}
            },
            {
                props: {variant: "ls-grid"},
                style: {paddingTop: "15px", paddingBottom: "15px"}
            }
        ]
        },
        MuiButtonBase: {
            variants: [{
                props: {variant: "outlined"},
                style: {position: "relative", borderStyle: "solid", borderColor: "#20C20E", borderWidth: "2px", boxShadow: "1px 1px 5px #2cdf18", height: "60px", width: "200px", fontFamily: "consolas, monospace"}
                },
                {
                    props: {variant: "outlined-portfolio"},
                    style: {display: "block", borderStyle: "solid", borderColor: "#20C20E", borderWidth: "2px",
                             boxShadow: "1px 1px 5px #2cdf18",  height: "60px", width: "100%", fontFamily: "consolas, monospace"}
                }
            ]
        },
        MuiCardMedia: {
            variants: [
                {
                    props: {variant: "video"}, 
                    style: {borderStyle: "solid", boxShadow : "1px 1px 5px #2cdf18", borderColor: "#20C20E", borderWidth: "2px", marginTop: "50px", height: "250px", width: "500px"}
                }
            ]
        }, 
        MuiTypography: {
            variants: [
                {
                    props: {variant: "h0"},
                    style: {textShadow : "1px 1px 3px #2cdf18", fontSize:"50%", fontFamily: "consolas, monospace"}
                },
                {
                    props: {variant: "h1"},
                    style: { textShadow : "1px 1px 3px #2cdf18", fontSize: "15px", fontFamily: "consolas, monospace"}
                },
                {
                    props: {variant: "p"},
                    style: {marginLeft: "5px", marginRight: "5px", marginTop: "15px", textShadow : "1px 1px 3px #2cdf18", fontSize:"16px", fontFamily: "consolas, monospace"}
                },
                {
                    props: {variant: "access"},
                    style: { textShadow : "1px 1px 3px #2cdf18", fontSize:"40px", fontFamily: "consolas, monospace"}
                },
                {
                    props: {variant: "h1-prefix"},
                    style: { textShadow : "1px 1px 3px #2cdf18", marginRight: "15px", fontSize:"15px", fontFamily: "consolas, monospace"}
                },
                {
                    props: {variant: "h1-project"},
                    style: {textShadow : "1px 1px 3px #2cdf18", fontSize:"16px", fontFamily: "consolas, monospace"}
                },
                {
                    props: {variant: "button-base"},
                    style: {textShadow : "1px 1px 3px #2cdf18", fontSize:"15px", fontFamily: "consolas, monospace"}
                }
            ]
        },
        MuiOuterWindow: {
            styleOverrides: {
              root: {
                overflowX: "hidden", overflowY: "auto", scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                    width: '0.7em',
                },
                '&::-webkit-scrollbar-track': {
                    background: "#186d0f",
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#20C20E',
                    maxHeight: "20px", 
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#20C20E'
                },
              opacity: "90%", padding: "10px", backgroundColor: "#060d05",  
              position: "absolute", height: "85%", width: "85%", boxShadow: "1px, 1px, 2px, #2cdf18", 
            borderStyle: "solid", borderWidth: "2px", borderColor: "#20C20E"
              }
            }
          },
    }
})

export default MobileTheme