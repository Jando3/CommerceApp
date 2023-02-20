import React from 'react';
import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme)=>({
    root:{
        height:'100vh',
        color: red
    }
}))


const HomePage = () => {
  return (
    <div root>
        <image></image>
    </div>
  )
}

export default HomePage