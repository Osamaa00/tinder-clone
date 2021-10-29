import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className="header" >
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG5.png" alt="Tinder Logo" />
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header
