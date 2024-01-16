import React from 'react'

import {SearchOutlined, AccountCircleOutlined, NotificationsNoneOutlined} from '@mui/icons-material';
import {Grid, Box, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import '../styles/styles.css';

export default function Header({search, onSearch, onSearchType}) {
    const onKeyDownHandler = (event) => {
        if (event.key === "Enter") {
            onSearch()
        }
    }

    
    return (
            <Paper sx={{ display: 'flex', alignItems: 'center', marginBottom:'20px'}}>

                <IconButton type="button" sx={{p:'10px 20px'}} aria-label="search">
                    <SearchOutlined/>
                </IconButton>
                <InputBase sx={{ ml:1, flex: 1}} value={search} onChange={onSearchType} onKeyDown={onKeyDownHandler}/>

                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent:'end'}} flex={1}>
                    <IconButton>
                        <AccountCircleOutlined/>
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneOutlined/>
                    </IconButton>
                </Grid>

            </Paper>
    )
}
