import React from 'react'
import '/Users/j.han/Documents/CodingDojo/mern-stack/fullStackMern/slack-clone/slack-clone/src/Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from "../StateProvider";

function Header() {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
                {/* Avatars for logged in user */}
                {/* Time Icon */}
            </div>
            <div className="header__search">
                <SearchIcon />

                <input placeholder="Search JHAN Programmer"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
                {/* help icon */}
            </div>
        </div>
    )
}

export default Header
