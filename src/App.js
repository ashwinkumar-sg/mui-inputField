import React from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { FormLabel } from '@mui/material';
import { makeStyles } from '@mui/styles'
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';  
//import { makeStyles,TextField } from '@material-ui/core'
//import { createMuiTheme,ThemeProvider } from '@material-ui/core';
//import { createTheme, ThemeProvider } from '@mui/material/styles';



const useStyles = makeStyles(
  {
   
    root:{

    },
    inputRoot:{
        paddingRight:"16px",
        paddingLeft:"16px",
        marginTop:"4px",
        height:"40px",
        fontSize:"12px",
        fontFamily:"IBM plex sans ",
        color:"#808080 !important"
    },
    InputLabel:{
        fontSize:"12px",
        fontFamily:"IBM plex sans ",
        color:"#808080 !important"
    },
    underline:{
        borderBottom:" 1px red !important"
    }

   




})

const App = () => {
  
  const classes = useStyles();

    return (

        <div style={{padding:"100px",textAlign:"center"}}>

          <FormControl variant="standard" className={classes.root} >

              <InputLabel   focused="false" classes={{formControl:classes.InputLabel}}>Email address</InputLabel>
              <Input id="my-input" 
                     classes={{root:classes.inputRoot,}}
                     defaultValue="type..."  
                     aria-describedby="my-helper-text"
                     endAdornment= {
                              <InputAdornment position="end">
                                <LockIcon sx={{maxWidth:"12px"}}/>
                              </InputAdornment>
                            }
              
              />
              <FormHelperText id="my-helper-text" classes={{}}>We'll never share your email.</FormHelperText>

          </FormControl>
          
        </div>
    );
};

export default App;