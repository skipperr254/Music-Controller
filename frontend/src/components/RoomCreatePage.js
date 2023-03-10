import React, { Component } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControl"
import { Link } from "react-router-dom"

export default class RoomCreatePage extends Component {
    defaultVotes = 2
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Create A Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText component="div">
                        <div align="center">
                            Guest control of playback state
                        </div>
                    </FormHelperText>
                    <RadioGroup defaultValue="true">
                        <FormControlLabel 
                            value="true"   
                            control={<Radio color="primary" 
                            label="Play/Pause"
                            labelPlacement="bottom"
                            />}/>
                        <FormControlLabel 
                            value="true"   
                            control={<Radio color="secondary" 
                            label="No control"
                            labelPlacement="bottom"
                            />}/>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
        );
    }
}