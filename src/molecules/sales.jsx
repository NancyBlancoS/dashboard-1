import React from 'react'

import {Box, Grid, Paper} from "@mui/material";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

import {longToShortDate} from "../utils/dates";

function normalizeData(data){

    return data.map((sale) => {
        const formattedDate = longToShortDate(sale.date)

        return {
        date: formattedDate,
        currentYear: sale.currentYear,
        lastYear: sale.lastYear
    }
    });
}

export default function Sales({data}) {
    const newData = normalizeData(data)

    return (
        <Box>
            <Paper sx={{display:'flex', alignItems:'center', p:'15px 30px', marginBottom:'7px'}}>
                <Grid sx={{fontWeight:'bold', fontSize:'20px'}}>Latest Sales</Grid>
                <Grid sx={{marginLeft:'auto', fontSize:'small', color:'#3F51B5', fontWeight:'bold'}}>Last 7 days -</Grid>
            </Paper>

            <Paper sx={{display:'flex', alignItems:'center', justifyContent:'center', p:'20px'}}>
                <BarChart width={900} height={368} data={newData}>
                    <CartesianGrid strokeDasharray="1 1"/>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ccc' }}/>
                    <Legend verticalAlign="top" align="center" height={40}/>
                    <Bar dataKey="currentYear" fill="#3F51B5" barSize={10} radius={5}/>
                    <Bar dataKey="lastYear" fill="#AFAFAF" barSize={10} radius={5}/>
                </BarChart>
            </Paper>
        </Box>
    );
}