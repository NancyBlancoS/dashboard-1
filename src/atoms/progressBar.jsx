import React from 'react'

import { LinearProgress } from '@mui/material'

export default function ProgressBar ({value}){
    return(
        <div>
            <LinearProgress variant="determinate" value={value}/>
        </div>
    )
};
