import React from 'react';
import {TextField, Grid, InputLabel} from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label }) => {
    const{ control }= useFormContext();

    return (
       <Grid item xs={12} sm={6} >
           <InputLabel>{label}</InputLabel>
           <Controller 
           defaultValue=""
           render={({field})=><TextField{...field}/>}
           name={name}
           control={control}
           fullWidth
           label={label}
           required
           error={Error}
           variant="outlined"
           />
       </Grid>
    );
}

export default FormInput;
