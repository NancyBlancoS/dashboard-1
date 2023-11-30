import React from 'react'

import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";
import Button from '@mui/material/Button';

import {
    SignalCellularAltOutlined, 
    PeopleOutlineOutlined, 
    ShoppingBagOutlined, 
    PersonOutlined, 
    SettingsOutlined, 
    UnfoldMoreOutlined, 
    LockOutlined,
    PersonAddAlt1Outlined,
    CancelOutlined
} from '@mui/icons-material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import logo from '../assets/img/logo.png'

import '../styles/styles.css';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function Menu() {

    const iconStyle = {
        color: '#EEF3FD', py:'10px'};
    const menuStyle = {
        bgcolor:'#192130',
        height: '100%',
        padding: "20px"
    }
    const optionsStyle = {
        width: '100%'
    }

return (
        <Box container className="container menu" sx={menuStyle}>

            <MenuList sx={optionsStyle}>

                <MenuItem className="option menu-upper" sx={iconStyle}>
                    <img src={logo} alt="" />
                </MenuItem>

                <br />

                <MenuItem className="menu-mid" sx={{bgcolor:"#6B7280", borderRadius:"10px", color: '#EEF3FD', py:'0 10px'}}>
                    <Grid>
                        <h3>Acme Inc</h3>
                        <p>Your tier : Premium</p>
                    </Grid>
                </MenuItem>

                <br />
                
                <MenuItem className="option" sx={iconStyle}>
                    <SignalCellularAltOutlined/>
                    <ListItemText>Dashboard</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <PeopleOutlineOutlined/>
                    <ListItemText>Customers</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                <ShoppingBagOutlined/>
                    <ListItemText>Products</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <PersonOutlined/>
                    <ListItemText>Account</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <SettingsOutlined/>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <UnfoldMoreOutlined/>
                    <ListItemText>ComArrow</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <LockOutlined/>
                    <ListItemText>Login</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <PersonAddAlt1Outlined/>
                    <ListItemText>Register</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <CancelOutlined/>
                    <ListItemText>Error</ListItemText>
                </MenuItem>

            </MenuList>
        </Box>

    )
}
