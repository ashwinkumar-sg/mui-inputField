import React from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { FormLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';  
import InputBase from '@mui/material/InputBase';
//import { makeStyles,TextField } from '@material-ui/core'
//import { createMuiTheme,ThemeProvider } from '@material-ui/core';
//import { createTheme, ThemeProvider } from '@mui/material/styles';



const useStyles = makeStyles({
    root:{
        maxWidth:"200px",
    },
    input:{
        paddingRight:"16px",
        paddingLeft:"16px",
        
    }
   
})



const App = () => {
  
  const classes = useStyles();


    return (

        <div style={{padding:"100px",textAlign:"center"}}>

          <InputBase/>

          <FormControl variant="standard" classes={{}}>

              <InputLabel>Email address</InputLabel>
              <Input id="my-input" 
                     classes={{root : classes.input}}
                     defaultValue="type..."  
                     aria-describedby="my-helper-text"
                     endAdornment= {
                              <InputAdornment position="end">
                                <LockIcon sx={{maxWidth:"12px"}}/>
                              </InputAdornment>
                            }
              />
              <FormHelperText id="my-helper-text" >We'll never share your email.</FormHelperText>

          </FormControl>
          
        </div>
    );
};

export default App;