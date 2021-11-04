import React from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';  
//import { makeStyles,TextField } from '@material-ui/core'
//import { createMuiTheme,ThemeProvider } from '@material-ui/core';
//import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({

  root:{
      '& label':{
          fontSize:"12px",
          fontFamily:"IBM plex sans",
          color:"#808080"
    
      },
      '& p':{
          fontSize:"12px",
          fontFamily:"IBM plex sans",
          color:"#808080"
      },
      '& div':{
          borderBottom:"10px solid red",
          height:"40px",
          paddingRight:"16px",
          paddingLeft:"16px",
          marginTop:"4px",
         
          '&:hover':{
              fontSize:"12px",
              fontFamily:"IBM plex sans",
              backgroundColor:"#F2F2F2",
              borderColor:"red"
          },
          '&:active':{

          }

      }
     
  }

})

// here we can globally set a theame for our app

/*  const theme = createMuiTheme( {
  overrides: {
        muiTextField:{
          root:{
            backgroundColor:"red"
          }
        },
        MuiInput:{
          root :{
            marginTop:"4px",
            backgroundColor:"blue"
          }
  
        }
      }
      },
   )
*/

const App = () => {
  

  const classes = useStyles();

    return (

        <div style={{padding:"100px",textAlign:"center"}}>
          <FormControl>
<InputLabel htmlFor="my-input">Email address</InputLabel>
<Input id="my-input" aria-describedby="my-helper-text" />
<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
          <div sltyle={{padding:"50px",border:"2px solid"}}>
          <TextField 
             id="standard-basic"
             label="Standard"
             variant="standard" 
             defaultValue="type..." 
             helperText="It is necessary" 
             InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon sx = {{maxWidth:"12px"}}/>
                </InputAdornment>
              ),
            }}
             />
          </div>

            <TextField 
             id="standard-basic"
             label="Standard"
             variant="standard" 
             defaultValue="type..." 
             helperText="It is necessary" 
             className={classes.root}
             InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon sx = {{maxWidth:"12px"}}/>
                </InputAdornment>
              ),
            }}
             />


            <br/>

            <div style={{margin:'70px'}}>

            <Input placeholder="Placeholder" helperText="helperText" />

            </div>

        </div>
    );
};

export default App;