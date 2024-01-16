import React from 'react'

import {Box, Grid, Paper,} from "@mui/material";
import {PieChart, Pie, Cell, Legend} from "recharts";
import {ComputerOutlined, TabletMacOutlined, LocalPhone} from "@mui/icons-material";

import '../styles/styles.css';

const COLORS = ["#3F51B5", "#E53935", "#FB8C00"];
const DEVICES = [<ComputerOutlined />, <TabletMacOutlined />, <LocalPhone />];

export default function Traffic({data}) {
    return (
        <Box>
            <Paper sx={{display:'flex', alignItems:'center', p:'15px 30px', marginBottom:'7px'}}>
                <Grid sx={{fontWeight:'bold', fontSize:'20px'}}>Traffic by Device</Grid>
            </Paper>
            <Paper sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', paddingTop:'20px'}}>
                <PieChart width={400} height={200} style={{textTransform:'capitalize'}}>
                    <Legend align="center" verticalAlign="top" iconSize={13} style={{margin:'10px 0'}}/>
                    <Pie
                        className="pie-chart"
                        data={data}
                        dataKey="traffic"
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={70}
                        paddingAngle={2}
                        startAngle={90}
                        endAngle={-360}
                        nameKey="device"
                        >
                        {data.map((entry, index) => (
                            <Cell key={Cell-`${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

                <Grid sx={{display:'flex', flexDirection:'row', marginTop:'-20px'}}>
                    {data.map((data, index) => (
                        <Grid>
                            <Grid><h1 style={{color:'#6F7683', padding:'0 20px'}}>{DEVICES[index]}</h1></Grid>
                            <Grid><p style={{textTransform:'capitalize', padding:'0 5px'}}>{data.device}</p></Grid>
                            <Grid><h1 style={{color:`${COLORS[index]}`, padding:'0 5px'}}>{data.traffic}%</h1></Grid>
                        </Grid>
                        ))}
                </Grid>

            </Paper>
        </Box>
    );
}