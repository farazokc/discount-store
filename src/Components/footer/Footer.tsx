import './Footer.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';

function Footer(){
    const [value, setValue] = React.useState(0);

    return(
        <div className="footer">
            {/* <div className="Home">
                <HomeIcon/><br />
                Home
            </div>
            <div className="Add Items">
                <AddCircleOutlineIcon/><br />
                Add Items
            </div>
            <div className="Account">
                <PersonIcon/><br />
                Account
            </div> */}

            <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Add Items" icon={<AddCircleOutlineIcon />} />
                <BottomNavigationAction label="Account" icon={<PersonIcon />} />
            </BottomNavigation>
            </Box>
        </div>
    );
}

export default Footer;