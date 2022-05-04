import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from "@material-ui/core/TextField";
import delfos_logo from "../delfos.png";
import { style } from '@mui/system';


export default function BasicTextFields() {
  return (
    <div>
       <a href="" rel="noreferrer" target="_blank" >
              <img src={delfos_logo} alt="delfos_logo" className="logo" style= {{width: "100px", heigth: "100px", marginTop: "20px", marginBottom: "50px" }} />
            </a>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch', marginLeft: "77rem", marginTop: "-90px" },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField autoFocus
       id="outlined-basic" 
       label="Pesquisar" 
       variant="outlined" />
    </Box>
    </div>
  );
}