import React from 'react'

import {Autocomplete, Box, TextField} from "@mui/material";

import {
    SignalCellularAltOutlined, 
    PeopleOutlineOutlined, 
    ShoppingBagOutlined, 
    PersonOutlined, 
    SettingsOutlined, 
    LockOutlined,
    PersonAddAlt1Outlined,
    CancelOutlined
} from '@mui/icons-material';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import logo from '../assets/img/logo.png'

import '../styles/styles.css';

export default function Menu() {

    const iconStyle = {
        '&:hover':{
            color:'#12B981',
            bgcolor: 'rgba(238, 243, 253, 0.1)'
        },
        borderRadius:'10px',
        padding:'10px',
        margin:'15px 20px',
        gap:'10px'
    };

    const menuStyle = {
        bgcolor:'#192130',
        height: '100%',
        color: '#EEF3FD',
        padding:'10px 0'
    }

    const level = [
        {label: 'Basic'},
        {label: 'Medium'},
        {label: 'Premium'}
    ]

return (
        <Box container className="container menu" sx={menuStyle}>
            <MenuList>
                <MenuItem className="option menu-upper">
                    <img src={logo} alt="" />
                </MenuItem>

                <br />

                <MenuItem className="menu-mid" sx={{borderRadius:"10px", width: '100%', color:'white', padding:'20px'}}>
                    <Autocomplete
                        disablePortal
                        options={level}
                        sx={{width: '100%', bgcolor: 'rgba(238, 243, 253, 0.1)', borderRadius:'10px'}}
                        renderInput={(params) => <TextField 
                                                    {...params}
                                                    label='Acmen Inc' 
                                                    className="text-color-red"/>}
                    />
                </MenuItem>

                <hr/>
                
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
