import React, { Component, useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import NewPoint from "./newPoint";
import Button from '@mui/material/Button';
import Highcharts from "highcharts-react-official";
import HighchartsReact from 'highcharts-react-official';
import Widget from './Widget';


export default function Botao() {

    const [open, setOpen] = useState(false);

    const [countPoints, setCountPoints] = useState(1);

    const addNewPoint = () => {
        setCountPoints(countPoints + 1);
    
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCountPoints(1);
    };

  
    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 9, marginLeft: "90rem", backgroundColor: "rgb(178, 215, 249)" } }}
            >
                <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                    <AddIcon
                    />
                </Fab>
                <Dialog
                    open={open}
                    fullScreen
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                   
                >
                    <DialogContent
                    >
                        {[...Array(countPoints)].map(() => {
                            return <NewPoint />
                            
                        })}
                       {/* <Fab
                            variant="contained"
                            color="primary"
                            style={{ margin: "15px 0 0 0 " }}
                            onClick={() => {
                                console.log(countPoints);
                                addNewPoint ()
                            }}
                        >
                            <AddIcon style={{ color: "white" }}></AddIcon>
                        </Fab>*/}
                        
                    </DialogContent> 
                    <DialogActions>
                        <Fab onClick={handleClose}
                         color="secondary"
                         >
                           DEL
                        </Fab>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
}