import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from "react-router-dom";
import {Home} from "@material-ui/icons";
import {SvgIcon} from "@material-ui/core";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function MenuPopupState() {

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button style={{color: 'white'}} color="transparent" {...bindTrigger(popupState)}><HomeIcon/>
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem component={Link} to="/Users">User</MenuItem>
                        <MenuItem component={Link} to="/Games">Games</MenuItem>
                        <MenuItem component={Link} to="/Review">Review</MenuItem>
                        <MenuItem component={Link} to="/Keys">Keys</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}

function onSubmit (){

}


