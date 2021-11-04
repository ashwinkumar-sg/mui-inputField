import React from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import Input from '@mui/material/Input';
import InputBase from '@mui/material/Input';
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

  inputDiv:{
    display:"-ms-flexbox",
    display:"flex",
    marginTop:"4px",
    fontSize:"14px ",
    fontFamily:"IBM plex sans",
    color:"#808080",
    '&:hover':{
      backgroundColor:"#F2F2F2"
    },
    '&:active':{
      backgroundColor:"#F2F2F2",
      color:"#000000 ",
      borderBottom:"1px solid #000000"
    },
    '&:focus':{
        backgroundColor:"#F2F2F2",
        borderBottom:"1px solid #2D6BFF !important",
        color:"#000000"
    }
  },
  input:{
      borderBottom:"1px solid #E6E6E6",
      border:0,
      outline:0,
      width:"100%"
  },
  

   // understand why we can't style label and helpertext like abve fields   

         
            
        inputIcons: {
            marginBottom: "10px",
            display:"flex"
        },
          
        icon: {
            padding: "10px",
            color: "green",
            minWidth: "50px",
            textAlign: "center",
            position: "absolute"
        },
          
        inputField: {
            padding: "10px",
            textAlign: "center"
        }
        })  


const App = () => {
  
  const classes = useStyles();
  console.log(classes.input)
    return (

        <div style={{padding:"100px",textAlign:"center"}}>
            <FormControl>
              <label for="my-input">Email address</label>
              <div className={classes.inputDiv}>
                <input id="my-input"
                     className={classes.input} 
                     placeholder="type..." 
                     aria-describedby="my-helper-text" 
                />
                <LockIcon classname={{}} sx={{fontSize:"12px",position:"absolute"}}/>
              </div>
              <span id="my-helper-text">We'll never share your email.</span>
           </FormControl>
           <FormControl>
           <div class={classes.inputIcons}>
            <i class={`fa fa-envelope ${classes.icon}`}>
              </i>
                <input class={classes.inputField}
                       type="text" 
                       placeholder="Username"
                  />
            </div>
            </FormControl>
        </div>

        
    );
};

export default App;