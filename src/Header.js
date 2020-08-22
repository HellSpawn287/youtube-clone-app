import React from 'react'
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from "@material-ui/icons/Notifications";




function Header() {
    return (
        <div className="header">
            <div className ="header_left" >
                <MenuIcon />
                <img className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                alt="" 
            />
            </div>
            <div className="header_input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header_inputButton"/>
            </div>
            <div className="header_icons">
                <VideoCallIcon classname="header_icon"/>
                <AppsIcon classname="header_icon"/>
                <NotificationsIcon classname="header_icon"/>
                <Avatar 
                    alt="Robert Prus"
                    src="https://avatars3.githubusercontent.com/u/32910154?s=60&v=4"
                />
            </div>
        </div>
    )
}

export default Header
