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
      label:{
          textAlign:"start",
          fontSize:"12px",
          fontFamily:"IBM plex sans",
          color:"#808080 "
      },
      helperText:{
          textAlign:"start",
          fontSize:"12px",
          fontFamily:"IBM plex sans",
          color:"#808080 "
      },
      box:{
          position:"relative",
          height:"40px ",
          borderBottom:"1px solid #E6E6E6 !important",
          zIndex:1000
          },
      input:{
          marginTop:"4px !important",
          width:"300px",
          border:0,
          outline:0,
          padding: "0px",
          paddingRight:"28px",
          paddingLeft:"16px",
          height:"100%",
          fontSize:"14px",
          fontFamily:"IBM plex sans",
          color:"#808080",
          '&:hover':{
            backgroundColor:"#F2F2F2"
          },
          
      },
      icon:{
          paddingLeft:"5px",
          color:"#808080",
          maxWidth:"12px",
          position:'absolute',
          right:"16px",
          top:"17px",
         

      }


      }

  

   // understand why we can't style label and helpertext like abve fields   

)  


const App = () => {
  
  const classes = useStyles();
  console.log(classes.input)
    return (

        <div style={{textAlign:"center"}}>

            <FormControl>
                <label for="my-input" className={classes.label}>Email address</label>
                <div className={classes.box}>
                <input
                    className={classes.input}
                    id="input-with-icon-adornment"
                />        
                <i class={`fa fa-lock ${classes.icon}`}></i> 
                </div>     
                <p id="my-helper-text" className={classes.helperText}>We'll never share your email.</p>
            </FormControl>
            
        </div>
    );
};

export default App;