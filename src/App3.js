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
    input:{
      marginTop:"4px !important",
      borderBottom:"1px solid #E6E6E6",
      height:"40px !important",
      paddingRight:"16px",
      paddingLeft:"16px",
      fontSize:"14px !important",
      fontFamily:"IBM plex sans !important",
      color:"#808080 !important",
      '&:hover':{
        backgroundColor:"#F2F2F2"
      },
      '&:active':{
        backgroundColor:"#F2F2F2",
        color:"#000000 !important",
        borderBottom:"1px solid #000000 !important",
        '& svg':{
          color:"#000000 !important"
        }
      }
    },
    label:{
      fontSize:"12px !important",
      fontFamily:"IBM plex sans !important",
      position:"static !important",
      color:"#808080 !important"
      
    },
    disabledLabel:{
      fontSize:"12px !important",
      fontFamily:"IBM plex sans !important",
      position:"static !important",
      color:"#B3B3B3 !important"
    },
  
    helperText:{
      fontSize:"12px !important",
      fontFamily:"IBM plex sans !important",
      color:"#808080 !important"
    },
    labelFocused:{
      color:"#808080 !important"
    },
    inputFocused:{
      borderBottom:"1px solid #2D6BFF !important",
      color:"#000000 !important",
      '& svg':{
        color:"#000000 !important"
      },
      backgroundColor:"#F2F2F2"
      
    },
  
   
     // understand why we can't style label and helpertext like abve fields   
  })
  
  const App = () => {
    
    const classes = useStyles();
    console.log(classes.input)
      return (

          <div style={{padding:"100px"}}>
            <h5>1) hover active focus</h5>
            <FormControl variant="standard" className={classes.root} >

                <label className={classes.label}>Email address </label>
                <Input 
                       inputLabelP
                       disableUnderline="true"
                       classes={{focused:classes.inputFocused}}
                       className={classes.input}
                       defaultValue="type..."  
                       aria-describedby="my-helper-text"
                       endAdornment= {
                                <InputAdornment position="end">
                                  <LockIcon  sx={{maxWidth:"12px",color:"#808080"}}/>
                                </InputAdornment>
                              }
                
                />
                <FormHelperText id="my-helper-text" className={classes.helperText}>We'll never share your email.</FormHelperText>
            </FormControl>

            <br/>

            <div style={{marginTop:"20px",marginBottom:"20px"}}>

            <h5>2) disabled</h5>
             <FormControl variant="standard" className={classes.root} >
             <label className={classes.disabledLabel}>Email address </label>
                    <Input 
                       disabled="true"
                       disableUnderline="true"
                     
                       defaultValue="disabled"  
                       aria-describedby="my-helper-text"
                       endAdornment= {
                                <InputAdornment position="end">
                                  <LockIcon  sx={{maxWidth:"12px",color:"#808080"}}/>
                                </InputAdornment>
                              }
                      // for disable using inline styling, because here not using react state for conditonal rendering
                       sx={{backgroundColor:"#B3B3B3",borderBottom:"1px solid #E6E6E6",
                       marginTop:"4px !important",
                       height:"40px !important",
                       paddingRight:"16px",
                       paddingLeft:"16px",
                       fontSize:"14px !important",
                       fontFamily:"IBM plex sans !important",
                       color:"#808080 !important",}}
                />
                <FormHelperText id="my-helper-text" className={classes.disabledLabel}>We'll never share your email.</FormHelperText>
            </FormControl>
           
            <br/>
            <div style={{marginTop:"20px",marginBottom:"20px"}}>
            <h5>3) error</h5>

             <FormControl error variant="standard"  >

             <label className={classes.label}>Email address </label>
                    <Input
                       disableUnderline="true"
                       defaultValue="error"  
                       aria-describedby="my-helper-text"
                       endAdornment= {
                                <InputAdornment position="end">
                                  <LockIcon  sx={{maxWidth:"12px",color:"#F82A2A"}}/>
                                </InputAdornment>
                              }
                      // for Error using inline styling, because here not using react state for conditonal rendering
                       sx={{
                       marginTop:"4px !important",
                       borderBottom:"1px solid #F82A2A !important",
                       backgroundColor:"#F2F2F2",
                       height:"40px !important",
                       paddingRight:"16px",
                       paddingLeft:"16px",
                       fontSize:"14px !important",
                       fontFamily:"IBM plex sans !important",
                       color:"#F82A2A !important",}}
                />
                <FormHelperText id="my-helper-text" sx={{ fontSize:"12px !important",fontFamily:"IBM plex sans !important",color:"#F82A2A !important"}}>We'll never share your email.</FormHelperText>
            </FormControl>

            
            </div>

      </div>
            
</div>

          
      );
  };
  
  export default App;