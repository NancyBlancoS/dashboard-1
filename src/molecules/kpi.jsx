import React from 'react'
import {Paper, Box, Avatar, Grid} from "@mui/material";
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from "@mui/icons-material";

import ProgressBar from "../atoms/progressBar";

let kpiInfo

export default function KPI({data, icon, iconColor}) {

    const {title, amount, amountType, changeFromLastMonth, type} = data ?? {};

    const amountDecorator = (amount) => {
        //  Código para ver el valor de K o %
        const prefix = amountType === "thousands" ? "$" : ""
        const suffix = amountType === "thousands" ? "k" : "%"
        const formattedAmount = amountType === "thousands" ? amount /1000 : amount
        return `${prefix}${formattedAmount}${suffix}`;
    };

    let percentageLost

    if (changeFromLastMonth < 0 ) {
        percentageLost = "percentage-color-red"
    } else {
        percentageLost = "percentage-color-green"
    }

    const monthChange = changeFromLastMonth > 0 ? <ArrowUpwardOutlined sx={{color: "#14B8A7"}}/> : <ArrowDownwardOutlined sx={{color:"#CD4344"}}/>
    const monthChangeDisplay = changeFromLastMonth === null ? "" : monthChange;
    const percentageIcon = changeFromLastMonth !== null ? "%" : "";
    
    if (type === "change") {
            kpiInfo = "Since Last Month";
        } else if (type === "progress"){
            kpiInfo = <ProgressBar value={amount}/> ;
        } else {
            kpiInfo = " ";
    };
    
return (
    <Paper sx={{display:"flex", padding: "10px 15px"}}>
        <Box sx={{width:'90%'}}>
            <Grid sx={{textTransform:'uppercase', height:'10px'}}><h6>{title}</h6> </Grid>
            <Grid sx={{height:'50px'}}><h1>{amountDecorator(amount)}</h1></Grid>
            <Grid sx={{fontSize:'small', height:'50px'}}><p><span className={percentageLost}>{monthChangeDisplay}{changeFromLastMonth}{percentageIcon}</span>  {kpiInfo}</p></Grid>
        </Box>

        <Box>
            <Avatar sx={{bgcolor:`${iconColor}`}} className="avatar-kpi">
                {icon}
            </Avatar>
        </Box>
        
    </Paper>



    );
}